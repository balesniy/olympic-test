const baseScript = require('./onReady.cjs');
module.exports = async (page, scenario, vp) => {
  await baseScript(page, scenario, vp);
  await page.evaluate(() => {
    const copy = document.querySelector('.site-navigation-item').cloneNode(true);
    document.querySelector('.site-navigation').appendChild(copy);
  })
}
