import * as playwright from "playwright";
import * as fs from "fs-extra";

/**
 * Testing script to generate PDFs for the maths club pack
 * Uses plawright to create a headless chrome browser and use native pdf export
 * (allows better support for custom styles, latex rendering etc. than pure md conversion)
 */
(async () => {
  fs.ensureDirSync("pdfs");
  fs.emptyDirSync("pdfs");
  const browser = await playwright["chromium"].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const lang = "en";
  const slug = "counting-chickens";
  await page.goto(`http://localhost:4200/${lang}/${slug}`);
  await page.waitForTimeout(1000)
  await page.pdf({ path: `pdfs/${slug}-student.pdf` });
  await browser.close();
})();
