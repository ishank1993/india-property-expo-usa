import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: January 2026
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-bold text-base mb-2">1. Information We Collect</h3>
              <p>
                We collect information that you provide directly to us when you register for our events, including your name, email address, phone number, and investment preferences.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you about our events, and to send you updates about real estate opportunities that may interest you.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. Information Sharing</h3>
              <p>
                We may share your information with participating developers and partners at our events. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@nrinivesh.in or call +91 93727 72669.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}