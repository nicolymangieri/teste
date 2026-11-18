// Renderiza as artes em PNG: node render.js
const { chromium } = require('playwright');
const path = require('path');
const out = path.resolve(__dirname, '..');
const jobs = [
  ['story.html?v=piscina', 1080, 1920, 'story-mandacaru-piscina.png'],
  ['story.html?v=confra', 1080, 1920, 'story-mandacaru-confra.png'],
  ['feed.html', 1080, 1350, 'feed-mandacaru.png'],
];
(async () => {
  const b = await chromium.launch();
  for (const [file, w, h, name] of jobs) {
    if (process.argv[2] && !file.startsWith(process.argv[2])) continue;
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await p.goto('file://' + path.join(__dirname, file));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    await p.locator('#art').screenshot({ path: path.join(out, name) });
    console.log('ok', name);
  }
  await b.close();
})();
