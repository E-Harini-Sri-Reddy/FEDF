**Date: 31st July 2025**

## Semantic Tags

Semantic tags are HTML elements that tell you (and the browser) what kind of content they contain. They make your code easier to read and give structure to your webpage.

> **Note:** Semantic tags were introduced in **HTML5**, so you won’t see them in older HTML versions.

### Common Semantic Tags:

- `<header>` – The top section of a page (like a title or logo area).
- `<nav>` – Holds your navigation links (menus, etc.).
- `<main>` – The main content of the page (the important stuff).
- `<section>` – Groups related content (like chapters or topics).
- `<article>` – Self-contained content (like blog posts or news articles).
- `<aside>` – Contains content related to the main content but separate (like sidebars, pull quotes, or ads).
- `<footer>` – The bottom part of the webpage (usually contact info, links, etc.).

### Why Semantic Tags are Important:

- **Better accessibility** – Screen readers can understand your page layout.
- **Helps with SEO** – Search engines know what’s important on your page.
- **Cleaner code** – Makes it easier for you and others to read and maintain.

In short: **Semantic tags give meaning to your HTML**. Instead of just using a bunch of `<div>`s, you’re telling the browser what each part of the page actually is.

---

**Date: 4th August 2025**

## Classwork Activity: Semantic Tags, CSS, and Selectors

In today’s class, we practiced using **HTML semantic tags** and styling with **CSS** and **CSS Selector** based on parts of the KL University Aziz Nagar Campus website.

### What we did:

- Used tags like `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>` to organize the page.
- Styled the page using CSS.
- Tried different CSS selectors to target and style elements.

### What I learned:

- Semantic tags help make the page easier to understand.
- CSS selectors let you style exactly what you want.
- Using semantic HTML with CSS makes webpages look good and organized.

---

**Date: 5th August 2025**

## Learning about HTML Forms and Input Types

Today, I learned about creating a simple HTML form to explore various input types and how forms work in HTML.

### What I did:

- Built a form using the `<form>` tag.
- Used multiple input fields to collect different kinds of user data:
  - **Text input** (`type="text"`) for names.
  - **Password input** (`type="password"`) for sensitive data.
  - **Telephone input** (`type="tel"`) to accept phone numbers.
  - **Number input** (`type="number"`) for numeric values like age or quantity.
  - **Email input** (`type="email"`) that validates email format.
  - Buttons like **submit**, **reset**, and a normal **button**.
  - **Radio buttons** for selecting gender — only one option can be chosen.
  - **Checkboxes** for selecting multiple languages known.
  - **Date input** (`type="date"`) to pick a date.
  - **Color input** (`type="color"`) to choose a color.
  - **URL input** (`type="url"`) to enter website links.
  - **File input** (`type="file"`) to upload files.
  - **Range input** (`type="range"`) for selecting a value within a range (slider).

### What I learned:

- HTML forms are tools for gathering user input.
- Different input types make it easier to collect specific data and improve user experience.
- Some inputs provide built-in validation, like email and URL.
- Radio buttons and checkboxes serve different purposes: radio for single choice, checkboxes for multiple choices.
- Forms can be submitted using the submit button, which sends data to a specified URL or backend.

---

**Date: 5th August 2025**

## Application: Registration Form with HTML and CSS

I applied the concepts I learned about HTML forms by creating a complete registration form with styling support.

### Features of the form:

- Used semantic and organized structure with `<section>`, `<header>`, and `<form>`.
- Included various input fields with placeholders and `required` attributes for validation:
  - Full Name (`type="text"`)
  - Email Address (`type="text"`)
  - Phone Number (`type="tel"`)
  - Birth Date (`type="date"`)
- Grouped related fields inside divs and columns for better layout.
- Created a gender selection using **radio buttons**, with one option pre-selected.
- Designed a detailed address section with multiple text inputs and a dropdown (`<select>`) for country selection.
- Used a **submit button** to send the form data.
- Linked an external CSS file (`style.css`) to style the form layout and elements.

### What I learned from this project:

- How to organize complex forms with multiple input types.
- Using grouping (`div`, columns) to control layout and user experience.
- Adding form validation with the `required` attribute.
- Implementing radio buttons properly with labels and default selection.
- Linking external CSS for styling forms cleanly.
- Structuring an HTML document for a real-world form application.

This project helped me understand how to build user-friendly, visually appealing, and functional forms using HTML and CSS.

---

**Date: 7th August 2025**

## Media Tags in HTML: `<audio>` & `<video>`

Today I learned how to use the `<audio>` and `<video>` tags to add sound and video files to a webpage. Both are part of HTML5 and come with helpful attributes.

### `<audio>` Tag

Used to embed sound files.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
</audio>
```

### Audio Format Support

| Browser | MP3 | WAV | OGG |
| ------- | --- | --- | --- |
| Edge/IE | ✅  | ❌  | ❌  |
| Chrome  | ✅  | ✅  | ✅  |
| Firefox | ✅  | ✅  | ✅  |
| Safari  | ✅  | ✅  | ✅  |
| Opera   | ✅  | ✅  | ✅  |

---

### `<video>` Tag

Used to embed video files.

```html
<video controls width="640" height="360" poster="thumb.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
</video>
```

### Video Format Support

| Browser | MP4 (H.264) | WebM | OGG |
| ------- | ----------- | ---- | --- |
| Edge/IE | ✅          | ❌   | ❌  |
| Chrome  | ✅          | ✅   | ✅  |
| Firefox | ✅          | ✅   | ✅  |
| Safari  | ✅          | ❌   | ❌  |
| Opera   | ✅          | ✅   | ✅  |

---

### Common Attributes

| Attribute          | Use                                  |
| ------------------ | ------------------------------------ |
| `controls`         | Shows play/pause/volume buttons      |
| `autoplay`         | Plays media automatically            |
| `loop`             | Repeats the media                    |
| `muted`            | Starts the media with no sound       |
| `preload`          | Tells browser what to load early     |
| `poster`           | (video only) Image shown before play |
| `width` / `height` | (video only) Set player size         |

### What I Learned:

- Use `<source>` to add multiple formats for browser support.
- MP3 and MP4 are the most supported formats.
- Use `controls` for user-friendly playback.
- Videos can have posters and dimensions.

These tags help make web pages more interactive and fun!

---
