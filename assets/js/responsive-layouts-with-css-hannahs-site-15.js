describe('Media query for max-width: 600px', function () {
  it('should have a media query for max-width: 600px', function () {
    const stylesheets = document.styleSheets;
    let mediaQueryFound = false;

    for (let i = 0; i < stylesheets.length; i++) {
      try {
        const rules = stylesheets[i].cssRules || stylesheets[i].rules; // Get CSS rules

        for (let j = 0; j < rules.length; j++) {
          if (
            rules[j].media &&
            rules[j].media.mediaText.includes('max-width: 600px')
          ) {
            mediaQueryFound = true;
            break;
          }
        }
      } catch (error) {
        // Skip cross-origin stylesheets
        continue;
      }
    }

    if (!mediaQueryFound) {
      fail(
        'No @media screen and (max-width: 600px) media query found. Ensure you have added a media query for small screens.'
      );
    }

    expect(mediaQueryFound).toBe(true);
  });
});
