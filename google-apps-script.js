// ====================================================================
// AALTO GUARD - GOOGLE APPS SCRIPT
// ====================================================================
// Kopioi tämä koodi Google Sheetsin Apps Scriptiin:
// 
// 1. Avaa uusi Google Sheets -taulukko.
// 2. Nimeä Sarake A: "Aikaleima" ja Sarake B: "Sähköposti".
// 3. Valitse ylävalikosta: Laajennukset (Extensions) -> Apps Script.
// 4. Liitä alla oleva koodi ja tallenna (Ctrl+S).
// 5. Klikkaa: Ota käyttöön (Deploy) -> Uusi käyttöönotto (New deployment).
// 6. Valitse ratas-ikonista tyyppi: "Verkkosovellus" (Web app).
//    - Suorita nimellä (Execute as): "Minä" (Me)
//    - Kenellä on pääsy (Who has access): "Kuka tahansa" (Anyone)
// 7. Klikkaa "Ota käyttöön" (Deploy) ja kopioi Verkkosovelluksen URL (Web app URL).
// 8. Liitä saatu URL tiedostoon script.js kohtaan: const GOOGLE_SCRIPT_URL = "...";
// ====================================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var email = e.parameter.email;
    var timestamp = new Date();
    
    // Lisää uusi rivi taulukkoon: Aikaleima ja Sähköposti
    sheet.appendRow([timestamp, email]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
