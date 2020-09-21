const PercyScript = require('@percy/script');

const options = {headless: false};
PercyScript.run(async (page, percySnapshot) => {

  await page.setViewport({
  width: 1440,
  height: 800
});

  await page.goto('https://my.matterport.com/show/?m=5xgpQmLLzpa&brand=0')
  await page.waitFor('#canvas-container');
  await page.waitFor(5000);

  await percySnapshot('MP base page');

  await page.keyboard.press('ArrowUp');
  await page.waitFor(5000);

  await percySnapshot('MP after 1 up arrow');

  await page.keyboard.press('ArrowUp');
  await page.waitFor(5000);

  await percySnapshot('MP after 2 up arrow');

}, options);
