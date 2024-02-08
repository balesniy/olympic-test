module.exports = async (page) => {
  // Function to be evaluated in the page context
  const preloadScript = () => {
    document.addEventListener('DOMContentLoaded', () => {
      // Now you can safely interact with the DOM
      const template = document.querySelector('#third').content.cloneNode(true);
      const el = document.querySelector('.carousel');
      el.appendChild(template);
      console.log('preloadScript loaded');
    });
  };

  // Add the script to the page
  await page.evaluateOnNewDocument(preloadScript);
}
