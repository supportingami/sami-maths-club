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
  await page.goto("http://localhost:4200/p/adding-to-15");
  await page.pdf({ path: `pdfs/adding-to-15-student.pdf` });
  await browser.close();
})();
