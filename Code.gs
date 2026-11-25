// Google Apps Script: เปิด Google Sheet > ส่วนขยาย > Apps Script > วางโค้ดนี้
// แถวแรกของชีต "Orders": order_id | time | name | phone | address | sku | product | qty | total | status
const KEY = "เปลี่ยนรหัสผ่านแอดมินตรงนี้";
const out = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
const sheet = () => SpreadsheetApp.getActive().getSheetByName("Orders");

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const id = "H" + Utilities.formatDate(new Date(), "Asia/Bangkok", "yyMMddHHmmss");
  sheet().appendRow([id, new Date(), d.name, d.phone, d.address, d.sku, d.product, d.qty, d.total, "new"]);
  return out({ ok: true, id });
}
function doGet(e) {
  if (e.parameter.key !== KEY) return out({ error: "unauthorized" });
  const [h, ...rows] = sheet().getDataRange().getValues();
  return out(rows.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))));
}
