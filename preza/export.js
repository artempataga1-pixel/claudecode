const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('[JARVIS] Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const htmlPath = path.join(__dirname, 'presentation.html');
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

  console.log('[JARVIS] Loading presentation:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for fonts to load
  await page.waitForTimeout(2000);

  const outputPath = path.join(__dirname, 'portfolio.pdf');

  console.log('[JARVIS] Exporting PDF...');
  await page.pdf({
    path: outputPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  console.log('[JARVIS] PDF saved to:', outputPath);
  await browser.close();
  console.log('[JARVIS] Export complete. STATUS: ONLINE.');
})();
