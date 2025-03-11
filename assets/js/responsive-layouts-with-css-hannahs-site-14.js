describe('Styling for footer and footer ul', function () {
  it('should have footer ul with display set to flex', function () {
    const footerUl = document.querySelector('footer ul');

    if (!footerUl) {
      fail(
        'No <ul> found inside the <footer>. Ensure you have added a <ul> inside the <footer>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footerUl);

      expect(computedStyle.display).toBe(
        'flex',
        'The footer ul should have display set to flex.'
      );
    }
  });

  it('should have footer ul with justify-content set to center', function () {
    const footerUl = document.querySelector('footer ul');

    if (!footerUl) {
      fail(
        'No <ul> found inside the <footer>. Ensure you have added a <ul> inside the <footer>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footerUl);

      expect(computedStyle.justifyContent).toBe(
        'center',
        'The footer ul should have justify-content set to center.'
      );
    }
  });

  it('should have footer ul with gap set to 20px', function () {
    const footerUl = document.querySelector('footer ul');

    if (!footerUl) {
      fail(
        'No <ul> found inside the <footer>. Ensure you have added a <ul> inside the <footer>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footerUl);

      expect(computedStyle.gap).toBe(
        '20px',
        'The footer ul should have gap set to 20px.'
      );
    }
  });

  it('should have footer with padding set to 15px 0', function () {
    const footer = document.querySelector('footer');

    if (!footer) {
      fail(
        'No <footer> element found. Ensure you have added a <footer> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footer);

      expect(computedStyle.paddingTop).toBe(
        '15px',
        'The <footer> should have top padding set to 15px.'
      );

      expect(computedStyle.paddingBottom).toBe(
        '15px',
        'The <footer> should have bottom padding set to 15px.'
      );

      expect(computedStyle.paddingLeft).toBe(
        '0px',
        'The <footer> should have left padding set to 0.'
      );

      expect(computedStyle.paddingRight).toBe(
        '0px',
        'The <footer> should have right padding set to 0.'
      );
    }
  });

  it('should have footer with margin set to 20px 0', function () {
    const footer = document.querySelector('footer');

    if (!footer) {
      fail(
        'No <footer> element found. Ensure you have added a <footer> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footer);

      expect(computedStyle.marginTop).toBe(
        '20px',
        'The <footer> should have top margin set to 20px.'
      );

      expect(computedStyle.marginBottom).toBe(
        '20px',
        'The <footer> should have bottom margin set to 20px.'
      );

      expect(computedStyle.marginLeft).toBe(
        '0px',
        'The <footer> should have left margin set to 0.'
      );

      expect(computedStyle.marginRight).toBe(
        '0px',
        'The <footer> should have right margin set to 0.'
      );
    }
  });
});
