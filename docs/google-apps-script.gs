// Paste this into Extensions > Apps Script on your Google Sheet, then deploy
// as a Web App (Execute as: Me, Who has access: Anyone) to get a URL.
// Set that URL as GOOGLE_SHEET_WEBHOOK_URL in your site's environment.
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheetName = data.sheet || 'Sheet1';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  delete data.sheet;
  var keys = Object.keys(data);

  var headerRow = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
  if (sheet.getLastRow() === 0 || headerRow.every(function (h) { return h === ''; })) {
    sheet.getRange(1, 1, 1, keys.length).setValues([keys]);
    headerRow = keys;
  }

  var row = headerRow.map(function (key) {
    var value = data[key];
    return value === undefined ? '' : value;
  });

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
