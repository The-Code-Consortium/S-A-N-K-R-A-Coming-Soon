# SANKĀRA Coming Soon Page: Update Plan

**Purpose of the page:** This is the *official website* coming-soon page, not a "hotel opening soon" page. The hotel is taking reservations now by phone and WhatsApp. Every change below supports that one message.

**Primary goal:** Get visitors to call or WhatsApp **+94 77 758 5872**.

---

## 1. Quick Summary

| Type | Count | Items |
|---|---|---|
| 🔁 Replace | 7 | Eyebrow text, hero subtitle, "Privately Held" card, "Official Domain" card, WhatsApp green, notify input, "4x4" character |
| ➕ Add | 11 | Top-of-page reservation message, mobile header fix, prefilled WhatsApp link, tap-to-call links, directions link, form states, privacy note, meta/OG tags, favicon, JSON-LD, alt text |
| ➖ Remove | 3 | Duplicate "Built on years of patience..." line from hero, company size / LinkedIn-style wording, "Under development" label |
| ✏️ Change | 6 | Layout order, image height, text contrast, footer logo, About length, body font check |

---

## 2. Content Changes

### 2.1 Replace: Hero eyebrow

| | |
|---|---|
| **Current** | `COMING SOON · SANCTUARY IN KANDY` |
| **Problem** | Reads like the *hotel* is opening soon |
| **Replace with** | `OFFICIAL WEBSITE COMING SOON` |

### 2.2 Replace: Hero subtitle (and remove the duplicate)

| | |
|---|---|
| **Current** | *Built on years of patience, architectural precision, and uncompromising craftsmanship.* |
| **Problem** | The same sentence appears again in the About section |
| **Replace with** | *Our official website is on its way. Reservations are open by phone and WhatsApp.* |
| **Keep** | The original sentence stays in the About section only |

### 2.3 Replace: "Property Type" card

| | |
|---|---|
| **Current** | `Privately Held Boutique Hotel` / `Exclusive & Intimate Stay` |
| **Problem** | "Privately Held" is LinkedIn company-profile language, not guest language |
| **Replace with** | `Boutique Hotel` / `Exclusive & Intimate Stay` |

### 2.4 Replace: "Official Domain" card

| | |
|---|---|
| **Current** | `sankarakandy.com` / `Under development` |
| **Problem** | It tells guests nothing useful and highlights that the site is unfinished |
| **Replace with** | **Label:** `DIRECTIONS` / **Value:** `Open in Google Maps` (link) / **Sub-text:** `Minutes from Kandy Lake` |
| **Alternative** | If the client has a public email, use `EMAIL` / `info@sankarakandy.com` (confirm with the client first) |

### 2.5 Remove: Company-only data

Do **not** show these anywhere on the page, even though they are in the client brief:

- Company size (2–10 employees)
- Industry: Hospitality / Hotel
- "Privately Held" wording

These are internal or LinkedIn details. Guests don't need them.

### 2.6 Change: About section length

- Trim to **two paragraphs** (a coming-soon page should stay light).
- Suggested structure:
  1. Who/where: SANKĀRA, Ampitiya Road, Kandy, built on patience and craftsmanship.
  2. Atmosphere: minimalist architecture, 4×4 checkered wood, walnut, brushed brass, linen, Sri Lankan art, unhurried calm, minutes from Kandy Lake.

---

## 3. Layout Changes

### 3.1 Change: Move the contact buttons higher

**Current order:**
1. Header
2. Headline
3. Large hero image
4. Call / WhatsApp card
5. Info row
6. About
7. Notify form
8. Footer

**New order:**
1. Header
2. Eyebrow + headline + short subtitle
3. **Call / WhatsApp / Copy Number buttons (directly under the subtitle)**
4. Hero image (shorter)
5. Info row (Location · Directions · Property Type)
6. About (two paragraphs)
7. Notify form
8. Footer

### 3.2 Change: Reduce hero image height

- Desktop: cap at about `55–60vh` (or `max-height: 480px`).
- Mobile: about `260–300px`.
- Use `object-fit: cover` and `object-position: center` so the brass-framed wood panel stays visible.

### 3.3 Add: Reservation message near the top

Add one line just above or below the buttons:

> **Reservations are open now. Call or message us on WhatsApp.**

This repeats the strongest message from the footer ("Direct reservations currently open") in a visible spot.

### 3.4 Change: Mobile header

- Hide the word `RESERVATIONS:` on small screens.
- Show only a phone icon + number.

```css
@media (max-width: 640px) {
  .header-contact .label { display: none; }
}
```

### 3.5 Change: Footer logo

- Add the **checkered logo mark** next to the SANKĀRA wordmark in the footer, to match the header.

---

## 4. Visual / Design Changes

### 4.1 Change: Text contrast (accessibility)

Target **WCAG AA, at least 4.5:1** for normal text.

| Element | Problem | Fix |
|---|---|---|
| Body paragraphs (light grey) | Too faint on cream | Darken to a warm dark grey / near-forest (e.g. `#3F4A45`) |
| Tiny letter-spaced labels (LOCATION, PROPERTY TYPE, etc.) | Terracotta on cream is low contrast | Use a darker terracotta, or increase size to at least 11–12px with heavier weight |
| Sub-text under info cards ("Minutes from Kandy Lake") | Very light | Darken one step |
| Footer small text | Grey on dark green is hard to read | Lighten the text, or use cream at about 80% opacity |

Check every pair with a contrast checker (WebAIM or Chrome DevTools) before delivery.

### 4.2 Replace: WhatsApp button color

| | |
|---|---|
| **Current** | Bright WhatsApp green (`#25D366`-style) |
| **Problem** | Clashes with the forest green + terracotta + cream palette |
| **Replace with** | A deeper, muted green, e.g. `#1F8F55` (hover: `#187544`) |
| **Keep** | The WhatsApp icon so it stays recognizable |

### 4.3 Change: Typography check

- The brief provides a serif (headlines), a spaced-caps sans (labels/headings), and a body font.
- Confirm that the **body text** font matches the client's typography brief. It currently looks like a third typeface.
- Use no more than **3 families** in total.

### 4.4 Replace: "4x4" character

- Caption: `SIGNATURE 4X4 CHECKERED WOOD...` → `SIGNATURE 4×4 CHECKERED WOOD...`
- About text: `4x4` → `4×4`
- Use the multiplication sign `×`, not the letter x.

---

## 5. Functionality Changes

### 5.1 Add: Tap-to-call links

```html
<a href="tel:+94777585872">Call: +94 77 758 5872</a>
```

Apply to: header number, the Call button, and the footer number.

### 5.2 Replace: WhatsApp link with a prefilled message

```html
<a href="https://wa.me/94777585872?text=Hello%20SANK%C4%80RA%2C%20I%27d%20like%20to%20inquire%20about%20a%20reservation"
   target="_blank" rel="noopener">WhatsApp Us</a>
```

### 5.3 Keep: Copy Number button

- Add a short confirmation: button text changes to `Copied ✓` for about 2 seconds.
- Use `aria-live="polite"` so screen readers announce it.

### 5.4 Add: Directions link

```html
<a href="https://www.google.com/maps/search/?api=1&query=SANKARA+107+Ampitiya+Road+Kandy+Sri+Lanka"
   target="_blank" rel="noopener">Open in Google Maps</a>
```

Better: ask the client for the exact Google Maps share link and use that.

### 5.5 Replace + Add: "Be notified" form

**Current problem:** A single field, `Email or WhatsApp number`, is ambiguous and hard to validate.

**Do this:**

- **Replace** with a clear choice: either **email only**, or two options (an Email / WhatsApp toggle).
- **Add** these states:
  - Loading (button disabled, "Sending...")
  - Success: *"Thank you. We'll contact you when the website launches."*
  - Error: *"Something went wrong. Please try again or call us."*
  - Validation message for invalid input
- **Add** a one-line privacy note: *"We'll only use your details to share the launch announcement."*
- **Decide where submissions go** (Formspree, Google Sheets, Netlify Forms, or a small backend).
- **Ask the client:** who will check the submissions? If nobody will, **remove the form entirely**. A dead form hurts trust more than having none.

---

## 6. Technical / SEO Additions

### 6.1 Add: Page title + meta description

```html
<title>SANKĀRA Kandy | Official Website Coming Soon</title>
<meta name="description" content="SANKĀRA is an exclusive boutique hotel on Ampitiya Road, Kandy. Our official website is coming soon. Reservations are open by phone and WhatsApp on +94 77 758 5872.">
```

### 6.2 Add: Open Graph + Twitter tags (important for WhatsApp link previews)

```html
<meta property="og:type" content="website">
<meta property="og:title" content="SANKĀRA Kandy | Official Website Coming Soon">
<meta property="og:description" content="Reservations open by phone and WhatsApp: +94 77 758 5872">
<meta property="og:image" content="https://sankarakandy.com/og-image.jpg">
<meta property="og:url" content="https://sankarakandy.com">
<meta name="twitter:card" content="summary_large_image">
```

- OG image: **1200×630**, using the wood-panel/brass hallway photo and the logo.
- Use an absolute URL, otherwise the preview will not show.

### 6.3 Add: Favicon

- Create from the checkered logo mark: `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` (180×180).

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### 6.4 Add: Hotel structured data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "SANKĀRA",
  "url": "https://sankarakandy.com",
  "telephone": "+94777585872",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "107, Ampitiya Road",
    "addressLocality": "Kandy",
    "addressCountry": "LK"
  }
}
</script>
```

### 6.5 Add: Image optimization + alt text

- Convert the hero image to **WebP** (keep a JPEG fallback if needed).
- Provide responsive sizes with `srcset` (e.g. 640 / 1024 / 1600 px wide).
- Add `loading="eager"` for the hero (it is above the fold) and `lazy` for anything below.
- Alt text example:

```html
<img src="hero.webp" alt="Hallway at SANKĀRA with a 4×4 checkered wood wall panel in a brushed brass frame and a window opening onto green hills">
```

### 6.6 Add: Basic accessibility

- Visible focus styles on buttons and inputs.
- Buttons at least 44px tall on mobile.
- `<label>` for the form input (visually hidden is fine).
- Use proper landmarks: `<header>`, `<main>`, `<section>`, `<footer>`.

---

## 7. Final Checklist

### Content
- [ ] Eyebrow changed to "Official website coming soon"
- [ ] Hero subtitle replaced; duplicate line removed
- [ ] "Privately Held" → "Boutique Hotel"
- [ ] "Official Domain / Under development" card replaced with Directions (or Email)
- [ ] No company size or industry wording anywhere
- [ ] About trimmed to two paragraphs
- [ ] "4x4" → "4×4" everywhere

### Layout
- [ ] Call / WhatsApp buttons moved directly under the headline
- [ ] Hero image height reduced
- [ ] "Reservations are open now" line added near the top
- [ ] Mobile header shows only icon + number
- [ ] Footer has the checkered logo mark

### Design
- [ ] All text meets 4.5:1 contrast
- [ ] WhatsApp button color muted to fit the palette
- [ ] Body font matches the client's typography brief

### Functionality
- [ ] `tel:` links on all phone numbers
- [ ] WhatsApp link has a prefilled message
- [ ] Copy Number shows a "Copied ✓" confirmation
- [ ] Directions link added
- [ ] Notify form fixed (single input type, states, privacy note) **or** removed
- [ ] Form submissions go somewhere the client actually checks

### Technical
- [ ] Title + meta description
- [ ] Open Graph / Twitter tags + 1200×630 share image
- [ ] Favicon set
- [ ] Hotel JSON-LD
- [ ] WebP hero + alt text
- [ ] Tested on mobile, and the WhatsApp link preview checked

---

## 8. Questions to Confirm with the Client

1. Is there a public email address to show?
2. Is there an exact Google Maps link for the hotel?
3. Who will receive the "Notify me" submissions, or should the form be removed?
4. Is the body typeface in the brief, or should one be chosen from the provided pair?
5. Can you share a high-resolution version of the logo (SVG preferred) for the favicon and share image?
