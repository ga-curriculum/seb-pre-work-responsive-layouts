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

// --- MutationObserver for CSS Changes ---
const styleObserver = new MutationObserver(() => {
  if (window.jasmine && jasmine.getEnv) {
    jasmine.getEnv().execute();
  }
});

// Find the <style> element(s) where CSS is applied in CodePen
const cssNodes = document.querySelectorAll('style, link[rel="stylesheet"]');

// Watch for changes in existing style elements
cssNodes.forEach((node) => {
  styleObserver.observe(node, { childList: true, subtree: true });
});

// Also, observe the document head for new <style> elements being added dynamically
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
