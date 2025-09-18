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