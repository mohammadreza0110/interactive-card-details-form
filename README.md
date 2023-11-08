# Card Details - Experience with formik + yup

This project is my first Experience with formik + yup project [Card Details](https://654bd9f5d61887337fdaf2c5--famous-faun-95a861.netlify.app/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size!
- Work with some validations
- I would update this section if new features added!

### Screenshot

![](./public/screenshot.jpg)

### Links

- Live Site URL: [Card Details](https://654bd9f5d61887337fdaf2c5--famous-faun-95a861.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TailwindCss](https://tailwindcss.com/) - For Styles
- [React](https://reactjs.org/) - JS Library
- [Formik](https://formik.org/) - Build Forms In React, Without The Tears!
- [Yup](https://www.npmjs.com/package/yup) - Validate Inputs Easy And Enjoyable

### What I learned

I proudly learned:

- How to validate forms in react using formik and yup
- New expreiences with regex

```jsx
<div>
  <BaseInput
    title="Cardholder Name"
    type="text"
    name="name"
    value={formik.values.name}
    placeholder="e.g. Jane Appleseed"
    onChange={handleName}
    onBlur={formik.handleBlur}
    errorStyle={formik.errors.name && formik.touched.name}
  />

  {formik.errors.name && formik.touched.name && (
    <div className="pt-1 pl-2 text-sm text-red-500">{formik.errors.name}</div>
  )}
</div>
```

## Author

- LinkedIn - [@mohammadreza-khorsand](https://www.linkedin.com/in/mohammadreza-khorsand)

<!-- ## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->
