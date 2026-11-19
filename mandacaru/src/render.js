// Renderiza as artes em PNG: node render.js
const { chromium } = require('playwright');
const path = require('path');
const out = path.resolve(__dirname, '..');
const jobs = [
  ['story.html?v=piscina', 1080, 1920, 'story-mandacaru-piscina.png'],
  ['story.html?v=confra', 1080, 1920, 'story-mandacaru-confra.png'],
  ['feed.html', 1080, 1350, 'feed-mandacaru.png'],
  ['interativo.html?n=1', 1080, 1920, 'interativos/story-interativo-1.png'],
  ['interativo.html?n=2', 1080, 1920, 'interativos/story-interativo-2.png'],
  ['interativo.html?n=3', 1080, 1920, 'interativos/story-interativo-3.png'],
  ['interativo.html?n=4', 1080, 1920, 'interativos/story-interativo-4.png'],
  ['interativo.html?n=5', 1080, 1920, 'interativos/story-interativo-5.png'],
  ['interativo.html?n=6', 1080, 1920, 'interativos/story-interativo-6.png'],
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
