import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Loader2, RefreshCw, Download, Users, LogOut } from "lucide-react";
import { toast } from "sonner";
import { AdminLogin } from "./AdminLogin";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzA08KCv3DFbFMcKUzpMi5Ug-xUd0_tqDmicwg-xr0ENcNtx7OfJdGvqTaHzHOkYxWw/exec";

interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  dateOfVisit: string;
  preferredCity: string;
  educationalSession: string;
  consultationService: string;
  registeredAt: string;
  status: string;
}

export function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const authenticated = localStorage.getItem("adminAuthenticated");
    const loginTime = localStorage.getItem("adminLoginTime");
    
    if (authenticated === "true" && loginTime) {
      // Check if session is less than 24 hours old
      const loginDate = new Date(loginTime);
      const now = new Date();
      const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        handleLogout();
      }
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    fetchRegistrations();
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminLoginTime");
    setIsAuthenticated(false);
    setRegistrations([]);
    toast.success("Logged out successfully");
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  const fetchRegistrations = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SHEETS_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch registrations");
      }

      const result = await response.json();

      if (result.success) {
        setRegistrations(result.data || []);
        toast.success(`Loaded ${result.count || 0} registrations`);
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load registrations";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("❌ Error fetching registrations:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (registrations.length === 0) {
      toast.error("No data to export");
      return;
    }

    // CSV headers
    const headers = [
      "Registration ID",
      "Full Name",
      "Email",
      "Phone",
      "Date of Visit",
      "Preferred City",
      "Educational Session",
      "Consultation Service",
      "Registered At",
      "Status"
    ];

    // CSV rows
    const rows = registrations.map(reg => [
      reg.id,
      reg.fullName,
      reg.email,
      reg.phone,
      reg.dateOfVisit,
      reg.preferredCity,
      reg.educationalSession || "None",
      reg.consultationService || "None",
      new Date(reg.registeredAt).toLocaleString(),
      reg.status
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("CSV exported successfully");
  };

  const formatDate = (dateString: string) => {
    // Google Sheets already returns a pre-formatted SGT string
    return dateString || "-";
  };

  const formatDateOfVisit = (value: string) => {
    const map: Record<string, string> = {
      "sep-5": "5 Sep 2026",
      "sep-6": "6 Sep 2026",
      // Legacy values (for historical records)
      "aug-1": "1 Aug 2026",
      "aug-2": "2 Aug 2026",
      "apr-18": "18 Apr 2026",
      "apr-19": "19 Apr 2026",
      "jan-31": "31 Jan 2026",
      "feb-1": "1 Feb 2026",
      "both": "Both Days"
    };
    return map[value] || value;
  }; 

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                📊 Registration Dashboard
              </CardTitle>
              <CardDescription className="mt-2">
                NRI Nivesh Property Expo 2026 - Admin Panel
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={fetchRegistrations}
                variant="outline"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                Refresh
              </Button>
              <Button
                onClick={exportToCSV}
                disabled={registrations.length === 0}
                className="bg-green-600 hover:bg-green-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-600 font-semibold">Total Registrations</p>
                    <p className="text-3xl font-bold text-orange-700">{registrations.length}</p>
                  </div>
                  <Users className="h-10 w-10 text-orange-500 opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-semibold">5th Sep Visitors</p>
                    <p className="text-3xl font-bold text-green-700">
                      {registrations.filter(r => r.dateOfVisit === "sep-5" || r.dateOfVisit === "aug-1" || r.dateOfVisit === "apr-18" || r.dateOfVisit === "both").length}
                    </p>
                  </div>
                  <div className="text-2xl">📅</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-semibold">6th Sep Visitors</p>
                    <p className="text-3xl font-bold text-blue-700">
                      {registrations.filter(r => r.dateOfVisit === "sep-6" || r.dateOfVisit === "aug-2" || r.dateOfVisit === "apr-19" || r.dateOfVisit === "both").length}
                    </p>
                  </div>
                  <div className="text-2xl">📅</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              <p className="font-semibold">Error loading registrations:</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && registrations.length === 0 && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
              <span className="ml-3 text-gray-600">Loading registrations...</span>
            </div>
          )}

          {/* No Data State */}
          {!isLoading && registrations.length === 0 && !error && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No Registrations Yet</h3>
              <p className="text-gray-500">Registrations will appear here once users sign up.</p>
            </div>
          )}

          {/* Table */}
          {!isLoading && registrations.length > 0 && (
            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Email</TableHead>
                      <TableHead className="font-bold">Phone</TableHead>
                      <TableHead className="font-bold">Visit Date</TableHead>
                      <TableHead className="font-bold">City</TableHead>
                      <TableHead className="font-bold">Session</TableHead>
                      <TableHead className="font-bold">Consultation</TableHead>
                      <TableHead className="font-bold">Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{reg.fullName}</TableCell>
                        <TableCell className="text-sm">{reg.email}</TableCell>
                        <TableCell className="text-sm">{reg.phone}</TableCell>
                        <TableCell className="text-sm">{formatDateOfVisit(reg.dateOfVisit)}</TableCell>
                        <TableCell className="text-sm capitalize">
                          {reg.preferredCity.replace(/-/g, " ")}
                        </TableCell>
                        <TableCell className="text-xs">
                          {reg.educationalSession === "none" ? (
                            <span className="text-gray-400">-</span>
                          ) : (
                            <span className="text-green-600">✓</span>
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {reg.consultationService === "none" ? (
                            <span className="text-gray-400">-</span>
                          ) : (
                            <span className="text-orange-600">✓</span>
                          )}
                        </TableCell>
                        <TableCell className="text-xs text-gray-600">
                          {formatDate(reg.registeredAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* Footer Info */}
          {registrations.length > 0 && (
            <div className="mt-6 text-sm text-gray-500 text-center">
              Showing {registrations.length} registration{registrations.length !== 1 ? "s" : ""}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}