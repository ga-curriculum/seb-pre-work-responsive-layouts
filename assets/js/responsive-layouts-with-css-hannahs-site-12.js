describe('Styling for #introduction', function () {
  it('should have a #introduction element with top and bottom margin set to 20px auto', function () {
    const introElement = document.getElementById('introduction');

    if (!introElement) {
      fail(
        'No element with id="introduction" found. Ensure you have added id="introduction" to the correct paragraph.'
      );
    } else {
      const computedStyle = window.getComputedStyle(introElement);

      expect(computedStyle.marginTop).toBe(
        '20px',
        'The #introduction element should have a top margin of 20px.'
      );

      expect(computedStyle.marginBottom).toBe(
        '20px',
        'The #introduction element should have a bottom margin of 20px.'
      );
    }
  });

  it('should have a #introduction element with max-width set to 600px', function () {
    const introElement = document.getElementById('introduction');

    if (!introElement) {
      fail(
        'No element with id="introduction" found. Ensure you have added id="introduction" to the correct paragraph.'
      );
    } else {
      const computedStyle = window.getComputedStyle(introElement);

      expect(computedStyle.maxWidth).toBe(
        '600px',
        'The #introduction element should have max-width set to 600px.'
      );
    }
  });
});

// Function to rerun Jasmine tests
function rerunJasmineTests() {
  if (window.jasmine && jasmine.getEnv) {
    console.clear(); // Clears console for cleaner output
    jasmine.getEnv().execute(); // Rerun all Jasmine tests
  }
}

// MutationObserver to detect CSS changes
const styleObserver = new MutationObserver((mutations) => {
  console.log('CSS changed, rerunning tests...');
  rerunJasmineTests(); // Rerun Jasmine tests when styles change
});

// Observe all <style> and <link rel="stylesheet"> elements
const observeStyles = () => {
  const cssNodes = document.querySelectorAll('style, link[rel="stylesheet"]');
  cssNodes.forEach((node) => {
    styleObserver.observe(node, { childList: true, subtree: true });
  });
};

// Start observing existing styles
observeStyles();

// Also observe the <head> for new styles added dynamically
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (
        node.nodeName === 'STYLE' ||
        (node.nodeName === 'LINK' && node.rel === 'stylesheet')
      ) {
        styleObserver.observe(node, { childList: true, subtree: true });
      }
    });
  });
}).observe(document.head, { childList: true });

console.log(
  'CSS MutationObserver initialized. Tests will rerun when CSS changes.'
);
