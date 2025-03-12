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
// Function to rerun Jasmine tests
function rerunJasmineTests() {
  if (window.jasmine && jasmine.getEnv) {
    console.clear(); // Clears console for cleaner output
    console.log("Rerunning Jasmine tests due to CSS change...");
    jasmine.getEnv().execute(); // Rerun all Jasmine tests
  }
}

// MutationObserver to detect CSS changes
let styleObserver;
let cssChangeTimeout;

// Function to start observing styles
function startObservingStyles() {
  if (styleObserver) {
    styleObserver.disconnect(); // Stop any existing observer before starting fresh
  }

  styleObserver = new MutationObserver((mutations) => {
    clearTimeout(cssChangeTimeout);
    cssChangeTimeout = setTimeout(() => {
      rerunJasmineTests(); // Rerun Jasmine tests when styles change
    }, 300); // Small delay to batch changes and prevent excessive calls
  });

  // Find all <style> and <link rel="stylesheet"> elements
  document.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => {
    styleObserver.observe(node, { childList: true, subtree: true });
  });

  console.log("CSS MutationObserver is active.");
}

// Start observing styles
startObservingStyles();

// Also observe the <head> for new styles being added dynamically
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeName === 'STYLE' || (node.nodeName === 'LINK' && node.rel === 'stylesheet')) {
        console.log("New style element detected, reattaching observer...");
        startObservingStyles(); // Reattach observer to new styles
      }
    });
  });
}).observe(document.head, { childList: true });

console.log("CSS MutationObserver initialized. Tests will rerun when CSS changes.");
