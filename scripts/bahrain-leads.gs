/**
 * India Property Expo — Bahrain Edition
 * Lead capture endpoint (Google Apps Script Web App)
 *
 * Target sheet:
 * https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit
 *
 * Deploy: Extensions → Apps Script → paste this file → Deploy → New deployment
 *         → Web app → Execute as: Me → Who has access: Anyone → Deploy.
 * Then paste the /exec URL into GOOGLE_SHEETS_URL in
 * src/app/components/RegistrationModal.tsx
 *
 * Full walkthrough: scripts/GOOGLE_SHEET_SETUP.md
 */

var SPREADSHEET_ID = '1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA';
var SHEET_NAME = 'Leads';

var HEADERS = [
  'Timestamp',
  'Edition',
  'Full Name',
  'Email',
  'Country Code',
  'Phone',
  'Full Phone',
  'Day Attending',
  'City of Interest',
  'Consultation Requested',
  'Source Page'
];

// Human-readable labels for the values the form submits.
var DAY_LABELS = {
  'oct-23': 'Fri 23 Oct 2026',
  'oct-24': 'Sat 24 Oct 2026',
  'both': 'Both days'
};

var SERVICE_LABELS = {
  'tax-advisory': 'Tax Advisory (NRI/OCI)',
  'legal-consultation': 'Legal Consultation',
  'property-evaluation': 'Property Evaluation',
  'investment-planning': 'Investment Planning',
  'home-loan-assistance': 'Home Loan Assistance',
  'repatriation-guidance': 'Repatriation Guidance',
  'none': ''
};

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var params = (e && e.parameter) || {};

    if (params.action !== 'write') {
      return jsonResponse({ success: false, error: 'Unknown action' });
    }

    // Minimal server-side validation — never trust the client alone.
    var fullName = String(params.fullName || '').trim();
    var email = String(params.email || '').trim();
    var phone = String(params.phone || '').trim();

    if (!fullName || !email || !phone) {
      return jsonResponse({ success: false, error: 'Missing required fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email' });
    }

    var sheet = getSheet_();
    var countryCode = String(params.countryCode || '').trim();
    var day = String(params.dateOfVisit || '').trim();
    var service = String(params.consultationService || '').trim();

    sheet.appendRow([
      new Date(),
      String(params.edition || 'Bahrain'),
      fullName,
      email,
      countryCode,
      phone,
      countryCode + phone,
      DAY_LABELS[day] || day,
      String(params.preferredCity || '').trim(),
      SERVICE_LABELS.hasOwnProperty(service) ? SERVICE_LABELS[service] : service,
      String(params.source || '').trim()
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

/** Returns the Leads sheet, creating it with headers on first run. */
function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#ce1126')   // Bahrain flag red
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this once from the Apps Script editor to verify the sheet connection
 * and grant the required permissions before deploying.
 */
function testConnection() {
  var sheet = getSheet_();
  Logger.log('Connected to: ' + sheet.getParent().getName() + ' / ' + sheet.getName());
  Logger.log('Rows so far: ' + sheet.getLastRow());
}
