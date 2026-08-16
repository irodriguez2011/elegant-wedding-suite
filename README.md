# Krissie & Cory — Wedding Website

A wedding invitation website created for a friend to celebrate the marriage of **Krissie (Shornakay) & Cory**. The site is designed to feel elegant, romantic, and personal — with a soft blue, lilac, and ivory color palette, velvet envelope intro, and smooth scroll animations.

https://shornakayandcoryallen.netlify.app/wedding.html 

- **Date:** June 19, 2027
- **Location:** Queens, New York

> ⚠️ **Work in Progress** — This wedding website is still being developed and refined. Some details, images, copy, and links may change as the big day approaches.

---


## About This Project

This repository contains the frontend for a wedding website that shares the couple's story, event details, dress code, schedule, and RSVP form with guests. It was built to be beautiful, easy to navigate, and fully responsive across devices.

The main experience lives in a single static HTML page at `public/wedding.html`, while the TanStack Start setup handles the root redirect and serves the app.

---

## Features

### 🎟 Envelope Invitation Intro
- A full-screen blue velvet envelope that opens with a 3D flap animation.
- Champagne-gold embossed wax seal with the couple's initials.
- Drifting light orbs and floating gold flecks for a magical first impression.
- Reveals a "Cordially Invited" card before entering the site.

### 👰 Hero Section
- Editorial-style hero with a large couple's photo.
- Full-bleed venue backdrop band.
- Live countdown timer counting down to **June 19, 2027**.
- Quick-access RSVP button.

### 💕 Our Story
- A narrative timeline of how the couple met, fell in love, and got engaged.
- Featured photo with a quote-style centerpiece.

### 📸 Photo Gallery
- Infinite auto-scrolling marquee of gallery images, side by side.
- Seamless loop with no visible gaps.

### 📋 Wedding Details
- Venue, ceremony time, and reception information.
- Elegant icon-driven cards for quick scanning.

### 👗 Style Edit
- Dress code: **Cocktail Attire**.
- Guidelines for ladies and gentlemen, including what to avoid.

### 📅 Weekend Agenda
- Friday: Welcome Drinks.
- Saturday: The Wedding Day.
- Sunday: Farewell Brunch.

### 👰🤵 Wedding Party
- A grid of wedding party cards with names and roles.

### ⏰ Day-of Schedule
- Timeline from guest arrival through dancing and celebration.
- Location badges for each event.

### ✉️ RSVP Form
- Guest submission form collecting names, contact info, guest count, attendance, and dietary requirements.
- Formspree integration for email handling.
- Success confirmation after submission.

### 🎁 Honeymoon Fund
- A registry-style section for honeymoon contributions.

### ✈️ Travel & Accommodations
- Getting-here info, hotel block details, shuttle times, and local recommendations.

### ✨ Ambient Animations
- Floating gold flecks across the page.
- Scroll-triggered reveal animations for sections and cards.
- Reduced-motion support for accessibility.

---

## Tech Stack

- **Framework:** TanStack Start
- **UI Layer:** React + Vite
- **Styling:** Tailwind CSS v4 + custom CSS in the main page
- **Main Page:** `public/wedding.html` (single-page static HTML experience)
- **Routing:** Root route (`/`) redirects to `/wedding.html`
- **Package Manager:** Bun

---

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed

### Install dependencies
```bash
bun install
```

### Run the development server
```bash
bun dev
```

The site will be available at the local Vite preview URL (usually `http://localhost:8080`).

### Build for production
```bash
bun build
```

---

## Assets & Customization

- Photos and gallery images are stored in the `public/` folder.
- The main couple's photo is referenced as `hero.png` with a fallback to `krissie-and-corey.jpeg`.
- Gallery images are located in `public/gallery/` (`g1.jpg`, `g2.jpg`, `g3.jpg`).
- The venue background image is `public/venue-bg.jpg`.
- To update the RSVP destination, replace the Formspree endpoint in `public/wedding.html` with your own form ID.

---

## Built With Love

This site was crafted to celebrate Krissie & Cory's next chapter. Here's to love, laughter, and happily ever after! ✦
