const { chromium } = require('playwright');
const path = require('path');

async function exportPDF(htmlFile, pdfFile) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  const htmlPath = path.join(__dirname, htmlFile);
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  console.log(`[AXENAI] Loading ${htmlFile}...`);
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(4000); // Three.js + шрифты
  const outputPath = path.join(__dirname, pdfFile);
  await page.pdf({
    path: outputPath,
    width: '1920px', height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log(`[AXENAI] Saved: ${pdfFile}`);
  await browser.close();
}

(async () => {
  await exportPDF('v1_corporate.html', 'v1_corporate.pdf');
  await exportPDF('v2_axenai.html', 'v2_axenai.pdf');
  console.log('[AXENAI] Both PDFs exported. STATUS: ONLINE.');
})();
