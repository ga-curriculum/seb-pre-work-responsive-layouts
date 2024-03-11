<textarea id="source">

<h1 class="slide-header">Responsive Layouts with CSS</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  In our multimedia world, a website can be viewed on everything from an 8,000px monitor to a 300px phone screen! The bottom line? One size does NOT fit all. We need our content to look good, regardless of the device on which it’s seen. Luckily there are responsive layouts!
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Width and Max-Width

<hr>

Media Queries

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/responsive-layouts-f71c79.pdf" target="_blank" download="responsive_layouts_with_css_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Adjust the width of HTML elements to render on different screens.</li>
  <li>Use media queries to restructure your page for different screens.</li>
</ul>

---

<h1 class="slide-header">Your Mission</h1>

We did a lot of work on Hannah’s page in the last lesson.

We just got some feedback from her that we can tackle now!

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/hannah-4-starter.png)

---

<h1 class="slide-header">Width as a Percentage</h1>

We’ll begin our journey into responsive design by playing with the width of elements on our page. 

Right now, we have the images set to `250px` wide. No matter where they are viewed, they will be this size. But we can also set the width of an element to be a _percentage_ of the screen size. 

Hannah said she wants them to take up the full width of her phone screen, so let’s do that! Adjust the following CSS rule:

```css
#image-grid img {
    width: 100%;
}
```

If you resize your browser window, you’ll see that the image automatically resizes to fit the full width of the screen. After a certain width, however, our images won’t look so great. Take Hannah’s giant desktop monitor — they might look terrible! 

If only there were a way to cap the width...

---

<h1 class="slide-header">The max-width Property</h1>

Our `width: 100%` images look great on small screens but, after a certain point, they display a little oddly. Let’s cap their width at 500px. To do that, we need to use the `max-width` property.

By setting their `width` to `100%`, we can be sure the images will take up the full screen. But, by constraining this with a `max-width` property, we can also ensure that they don’t grow wider than 500px, even if our screen gets larger. And, when our screen is smaller than 500px, the images will stretch to fill the space.

Let’s try it out! Add in the `max-width` property, like so:
```css
#image-grid img {
  width: 100%;
  max-width: 500px;
}
```

Now our images fill our screens on smaller devices but won’t get any wider than 500px on larger ones. Move your browser window around to see how this plays out.

---

<h1 class="slide-header">Sizing Other Elements</h1>

It would be nice if the rest of our content didn’t stretch out too much either. We can apply `width` and `max-width` in other places, too!

Let’s set the `<header>` element — which contains the `<h1>` and social icons — to have a **width of 100%** but a **max-width of 900px**.

What happens? When we start enlarging our screen, the header stays in place, but our social media list is still far to the right-hand side. Why is that?

If you recall, an element with `position: absolute` (like our social media list) will calculate its position based on a **parent element with a set position**. Right now, the social list’s parent, the `<header>`, has no set positioning, so it fixes itself to the `<body>` of the page. 

To change this, we need to put `position: relative` on the `<header>` so that the social media list will be positioned accordingly. Here’s how it should look now:
```css
header {
  width: 100%;
  max-width: 900px;
  position: relative;
}
```

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s apply the styling that we set for the `<header>` to the other large content blocks on the page: the `<nav>`, `<h2>`, `<p>`, `<div id = "image-grid">`, and `<footer>`. 

Think it through — what’s the **most efficient way** of doing this?

<details>
  <summary>Reveal Answer</summary>
  All of these items have one thing in common: They exist in the `<body>` of the page. By targeting the `<body>`, the formatting rules would apply to all the elements mentioned above.

    Let’s add a few more properties to the `<body>` rule at the top of our style sheet. 
    
    We can start with the `<header>` rule you just created and add these `width`, `max-width`, and `position` properties to the `<body>`:
    
    ```css
    body {
      width: 100%;
      max-width: 900px;
      position: relative;
    }
    ```
    
    **Note**: Remember the “cascading” part of CSS? Because this rule uses an element selector, it will be overridden by more specific rules that follow. So this **won’t** affect the `position: absolute` property of the social icons, as that rule has more specificity than the generic `body` rule.
</details>

---

<h1 class="slide-header">More Relative Sizing</h1>

Now that the maximum width of our `#image-grid` div is 900px (as determined by the `<body>`), there’s only room for one image per line in that container. But remember how Hannah asked for the images to display in rows on larger screens? With CSS, it’s possible!

  We have six images total, so two rows with three images each is ideal. This means that each image will take up one-third the width of the container; let’s call it `30%`. Here’s how you’d write that:
  ```css
  #image-grid img {
    width: 30%;
  }
  ```
  **Notice**: We can remove the `max-width` property from the images, as the `<body>` now has a `max-width`, and the images won’t be able to size beyond that.

---

<h1 class="slide-header">Centering with the Margin</h1>

Our page is looking better all the time! But now, when we widen the display window, our content is all stuck on the left, leaving us with a ton of whitespace on the right. We need a way to center our content on the page, even at large widths.

Believe it or not, our trusty friend the `margin` property can help! 

`margin` has two special values that will give elements **equal amounts of whitespace**:
* `margin: 0` gives an element equal whitespace at the **top and bottom**.
* `margin: auto` gives an element equal whitespace to the **left and right sides**.
* `margin: 0 auto` does both!

---

<h1 class="slide-header">Knowledge Check</h1>

Which `margin` value should we use to **horizontally center** our content on the page?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="event" value="event"  /><label for="event">`margin: 0`</label><br />
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">`margin: auto`</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">`margin: 0 auto`</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Some Finishing Touches</h1>

Let’s add a final few touches to beautify our page. It would be nice to space our elements out a bit, right?

Here’s where things can get tricky. We want to add top and bottom margins to space out the elements while still keeping the `auto` margins that center them:
1. Add a top and bottom margin of 30px to the `<h2>`.
2. Add a top and bottom margin of 30px to the `<p>`s.
3. Add a 5px margin to the images of Hannah’s artwork in the `#image-grid` `<div>`.

**Hint**: Remember the **TR**ou**BL**e acronym for targeting `margin` more specifically!

---

<h1 class="slide-header">Further Refinement: Media Queries</h1>

Our page is looking great! Let’s keep polishing it. 

Did you notice that our images get really tiny on mobile now that we’ve changed their width? We’ve lost the full-width mobile images that Hannah requested. If only there was a way to create special rules for different screens...

**Media queries** are the methods CSS uses to apply certain styles based on certain properties, such as screen size. Here’s what one looks like:
```css
@media screen and (max-width: 350px) {
  body {
    background-color: red;
  }
}
```
What is this saying? You can see a standard CSS declaration (apply a `background-color` to the `<body>`), but it’s wrapped inside a `@media` directive. Here’s what the media directive is telling the browser: 

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/talking-to-browser.png)

---

<h1 class="slide-header">Knowledge Check</h1>

Review the following media query. Which of the statements below accurately describes what will result?

```css
@media screen and (min-width: 1024px) {
 nav {
  display: inline;
  margin: 0 auto;
 }
 h1 {
  font-size: 48px;
 }
}
```

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="event" value="event"  /><label for="event">For screens less than or equal to 1024px wide, the `<nav>` will display inline and centered and the `<h1>` font size will become 48px.</label><br />
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">For screens greater than or equal to 1024px wide, the `<nav>` will display inline and centered and the `<h1>` font size will become 48px.</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">For screens exactly 1024px wide, the `<nav>` will display inline and centered and the `<h1>` font size will become 48px.</label><br />
  <input type="radio" name="action" id="answer4" value="answer4" /><label for="answer4">The page’s default setting is for the `<nav>` to display inline and centered and the `<h1>` font size to be 48px.</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Media Queries for Our Landing Page</h1>

Our goal is to make sure that the images don’t look _too small_ (i.e., too compressed in the grid when the screen is small) or _too big_ (i.e., too stretched out when the screen gets larger).

We can get a rough idea of image size by dividing the screen into thirds. The `max-width` for our image grid is 900px and our images are 30% of that, or about 300px wide. Because the images will never get bigger than this, we simply need to answer: _What’s the smallest possible size the images should be_?

When a screen is 600px wide, our images will be 30% of that, or about 200px wide. Let’s set the media query to kick in when the screen is 600px wide:
```css
@media only screen and (max-width: 600px) {
  #image-grid img {
    width: 100%;
  }
}
```

Once you’ve added this in the code editor, resize your browser window. See how the images pop to full width once the browser shrinks below 600px wide? Beautiful.

**Pro tip**: Make sure your media query is called _after_ the main rule for your element. You need to keep your most specific rules at the bottom of your styles so that they don’t override any earlier ones.

---

<h1 class="slide-header">Responsive Design: Pro Tips</h1>

When creating responsive designs, remember:
1. Consider your user needs. If your page is likely to be read on a smaller screen, plan accordingly from the beginning.
2. You can simulate smaller screens, like mobile or tablet devices, using web plugins or your browser’s developer tools.
3. Remember: Your HTML doesn’t need to change; CSS can perform the layout adjustment for us.

If you’re eager for more responsive design knowledge, check out the <a href="https://learn.shayhowe.com/advanced-html-css/responsive-web-design/" target="_blank" rel="noreferrer noopener">Responsive Design Primer</a>.

---


<h1 class="slide-header">Conclusion</h1>

Still curious about responsive design? Check out these sites:
* <a href="https://www.creativebloq.com/rwd/responsive-web-design-tutorials-71410085" target="_blank" rel="noreferrer noopener">Additional responsive design tutorials</a>.
* An overview of <a href="http://cssmediaqueries.com/overview.html" target="_blank" rel="noreferrer noopener">how to write media queries</a> for the most common screen sizes.
* Tips for <a href="https://www.bitdegree.org/learn/css-max-width" target="_blank" rel="noreferrer noopener">using the `max-width` property</a>.

</textarea>