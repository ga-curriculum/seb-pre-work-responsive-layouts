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

// Function to rerun Jasmine tests 5
function rerunJasmineTests() {
  if (window.jasmine && jasmine.getEnv) {
    console.clear(); // Clears console for cleaner output
    console.log("Rerunning Jasmine tests due to CSS change...");
    jasmine.getEnv().execute(); // Rerun all Jasmine tests
  }
}

// Function to get all computed styles as a unique string (to detect changes)
function getComputedStylesSnapshot() {
  let styles = "";
  document.querySelectorAll("*").forEach((el) => {
    styles += window.getComputedStyle(el).cssText;
  });
  return styles;
}

let lastComputedStyles = getComputedStylesSnapshot();
let cssChangeTimeout;

// Function to monitor for CSS changes
function startCSSMonitoring() {
  setInterval(() => {
    const currentStyles = getComputedStylesSnapshot();
    if (currentStyles !== lastComputedStyles) {
      clearTimeout(cssChangeTimeout);
      cssChangeTimeout = setTimeout(() => {
        console.log("Detected CSS change, rerunning tests...");
        rerunJasmineTests();
        lastComputedStyles = currentStyles;
      }, 500); // Small delay to allow full typing before rerunning tests
    }
  }, 1000); // Check for changes every second
}

// Start monitoring CSS changes
startCSSMonitoring();

console.log("CSS Monitoring initialized. Tests will rerun when CSS changes.");

