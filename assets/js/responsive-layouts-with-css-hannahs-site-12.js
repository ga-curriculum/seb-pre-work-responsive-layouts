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
    console.log("Forcing test rerun by modifying the HTML...");
    
    // Create or update a hidden element to trigger CodePen’s HTML change detection
    let testTrigger = document.getElementById("test-force-trigger");
    if (!testTrigger) {
      testTrigger = document.createElement("span");
      testTrigger.id = "test-force-trigger";
      testTrigger.style.display = "none";
      document.body.appendChild(testTrigger);
    } else {
      testTrigger.textContent = testTrigger.textContent === "1" ? "0" : "1"; // Flip value
    }

    jasmine.getEnv().execute(); // Rerun all Jasmine tests
  }
}

// Function to detect CSS changes
let lastComputedStyles = "";
let cssChangeTimeout;

function checkForCSSChanges() {
  let currentStyles = "";
  document.querySelectorAll("*").forEach((el) => {
    currentStyles += window.getComputedStyle(el).cssText;
  });

  if (currentStyles !== lastComputedStyles) {
    clearTimeout(cssChangeTimeout);
    cssChangeTimeout = setTimeout(() => {
      rerunJasmineTests();
      lastComputedStyles = currentStyles;
    }, 500); // Small debounce to prevent excessive reruns
  }
}

// Start checking for CSS changes every second
setInterval(checkForCSSChanges, 1000);

console.log("CSS Monitoring initialized. Tests will rerun when CSS changes.");
