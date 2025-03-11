function loadCssTest() {
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
}
