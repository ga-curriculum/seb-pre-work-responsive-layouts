describe('Styling for #image-container', function () {
  it('should have #image-container with display set to flex', function () {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
      fail(
        'No element with id="image-container" found. Ensure you have added id="image-container" to the correct <div>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(imageContainer);

      expect(computedStyle.display).toBe(
        'flex',
        'The #image-container should have display set to flex.'
      );
    }
  });

  it('should have #image-container with flex-wrap set to wrap', function () {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
      fail(
        'No element with id="image-container" found. Ensure you have added id="image-container" to the correct <div>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(imageContainer);

      expect(computedStyle.flexWrap).toBe(
        'wrap',
        'The #image-container should have flex-wrap set to wrap.'
      );
    }
  });

  it('should have #image-container with justify-content set to center', function () {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
      fail(
        'No element with id="image-container" found. Ensure you have added id="image-container" to the correct <div>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(imageContainer);

      expect(computedStyle.justifyContent).toBe(
        'center',
        'The #image-container should have justify-content set to center.'
      );
    }
  });

  it('should have #image-container with gap set to 30px', function () {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
      fail(
        'No element with id="image-container" found. Ensure you have added id="image-container" to the correct <div>.'
      );
    } else {
      const computedStyle = window.getComputedStyle(imageContainer);

      expect(computedStyle.gap).toBe(
        '30px',
        'The #image-container should have gap set to 30px.'
      );
    }
  });
});
