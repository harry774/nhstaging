# Images Folder Guide
## NH Home Staging & Renovations Website

---

## Folder Structure & Usage

### `images/logos/`
Your brand logo files.
- `logo-white.png` — White version (for dark nav/footer backgrounds)
- `logo-dark.png`  — Dark version (for light backgrounds, if needed)
- `favicon.ico`    — Browser tab icon (32×32px)
- `og-image.jpg`   — Social share preview image (1200×630px)

**Recommended format:** PNG with transparent background, or SVG

---

### `images/hero/`
Large hero/banner images shown at the top of the page.
- `hero-bg.jpg`         — Main hero background (min 1920×1080px)
- `hero-living-room.jpg` — Optional lifestyle photo overlay

**Recommended:** JPEG, compressed to ~200KB, or WebP for best performance

---

### `images/portfolio/`
All project photos, organized by type.

#### `images/portfolio/before-after/`
Before & after comparison photos.
- `living-room-before.jpg` / `living-room-after.jpg`
- `bedroom-before.jpg`     / `bedroom-after.jpg`
- `kitchen-before.jpg`     / `kitchen-after.jpg`
- *(add as many as needed)*

#### `images/portfolio/home-staging/`
Full home staging project photos (after shots).
- `project-01.jpg`, `project-02.jpg`, etc.

#### `images/portfolio/virtual-staging/`
Virtual staging before/after renders.
- `vs-living-01.jpg`, `vs-bedroom-01.jpg`, etc.

#### `images/portfolio/interior-design/`
Interior design / small renovation photos.
- `id-livingroom-01.jpg`, `id-bedroom-01.jpg`, etc.

**Recommended:** JPEG, 1200×900px, compressed to ~150KB each

---

### `images/moodboards/`
Mood board images and theme swatches shown in the Mood Boards section.
- `moodboard-modern.jpg`
- `moodboard-scandinavian.jpg`
- `moodboard-earthy.jpg`
- `moodboard-luxe.jpg`
- *(or any theme names you use)*

**Recommended:** JPEG or PNG, 800×800px square works best

---

### `images/blog/`
Thumbnail images for each blog article.
- `blog-staging-trends-2025.jpg`
- `blog-virtual-staging.jpg`
- `blog-renovation-no-demolition.jpg`
- `blog-realtor-guide.jpg`
- `blog-airbnb-staging.jpg`

**Recommended:** JPEG, 800×500px (16:9 ratio), compressed to ~80KB

---

### `images/team/`
Team or founder photos (for About / Testimonials section).
- `founder.jpg`
- `team-01.jpg`, `team-02.jpg`, etc.

**Recommended:** JPEG, 400×400px square, compressed

---

## Best Practices (Industry Standard)

| Rule | Details |
|------|---------|
| **Format** | Use WebP for best compression, JPEG as fallback |
| **Hero images** | Max 200KB after compression |
| **Portfolio photos** | Max 150KB each |
| **Blog thumbnails** | Max 80KB each |
| **Always add alt text** | Every `<img>` needs a descriptive `alt=""` |
| **Naming** | Use lowercase, hyphens only — no spaces or uppercase |
| **Tools** | Compress at squoosh.app or tinypng.com before uploading |

---

## How to Add Images to the Website

Once you drop photos into the correct folders, update the `index.html` like this:

**Portfolio item example:**
```html
<!-- Replace the grey gradient div with a real image -->
<img src="images/portfolio/home-staging/project-01.jpg"
     alt="Staged living room in North York Toronto"
     class="w-full h-full object-cover"
     loading="lazy"
     width="600" height="600">
```

**Blog thumbnail example:**
```html
<img src="images/blog/blog-staging-trends-2025.jpg"
     alt="Home staging trends Toronto 2025"
     class="w-full h-full object-cover"
     loading="lazy"
     width="800" height="450">
```
