const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.emulate(puppeteer.devices['iPhone 12']);
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle2' });
  console.log('Page loaded');
  // wait for first package card link (ExclusivePackages card)
  await page.waitForSelector('a[href^="/itineraries/"]', { timeout: 5000 });
  const linkHandle = await page.$('a[href^="/itineraries/"]');
  if (!linkHandle) {
    console.error('No package link found');
    await browser.close();
    process.exit(2);
  }
  // get bounding box and try click
  const box = await linkHandle.boundingBox();
  console.log('Bounding box:', box);
  try {
    await page.tap('a[href^="/itineraries/"]');
    await page.waitForTimeout(1000);
    console.log('Tap performed, current url:', page.url());
  } catch (err) {
    console.error('Tap failed:', err.message);
  }
  await browser.close();
})();
