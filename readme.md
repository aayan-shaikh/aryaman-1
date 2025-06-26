# ASK Designs - Portfolio Website 
Made by Kolibri Web Designs.

## Overview

This is the professional portfolio website for Aryaman Kaushik (ASK Designs), a graphic designer specializing in brand identity, digital marketing, and print design. The site showcases his projects, design philosophy, and contact information.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern Tech Stack**: Built with Astro for optimal performance
- **Project Showcase**: Dedicated pages for each design project
- **SEO Optimized**: Comprehensive SEO implementation
- **Performance Focus**: Fast loading with optimized assets
- **Interactive Elements**: Smooth navigation and mobile menu

## Technical Specifications

### Built With

- [Astro](https://astro.build/) - Modern static site generator
- [Sass/SCSS](https://sass-lang.com/) - CSS preprocessor for styling
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - For interactive elements
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Semantic markup

### File Structure

```
src/
├── assets/              # All static assets
│   ├── favicon/         # Favicon files
│   ├── images/          # Project images
│   └── images-avif/     # Optimized AVIF images
├── components/          # Reusable components
├── layouts/             # Page layouts
├── pages/               # Website pages
│   ├── projects/        # Individual project pages
│   ├── about.astro      # About page
│   ├── contact.astro    # Contact page
│   └── index.astro      # Homepage
└── scss/                # All SCSS files
    ├── base/            # Reset and typography
    ├── components/      # Component styles
    ├── pages/           # Page-specific styles
    └── variables/       # SCSS variables and mixins
```

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ask-designs.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to:
   ```
   http://localhost:3000
   ```

## Build Commands

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally before deploying |

## SEO Implementation

The site includes:

- Comprehensive meta tags
- Open Graph and Twitter Card meta
- Semantic HTML5 markup
- Optimized favicons
- Canonical URLs

## Performance Optimization

- AVIF image format for better compression
- Critical CSS loading
- Preloaded important resources
- Optimized JavaScript
- Responsive image sizing

## Customization

To customize content:

1. Update project details in `/pages/projects/`
2. Modify the default SEO values in `BaseLayout.astro`
3. Add new images to `/assets/images/`
4. Update SCSS variables in `/scss/variables/`

## Deployment

The site is configured for static deployment. You can deploy to:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- Any static hosting service

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contact

For inquiries, please contact:
Aryaman Kaushik  
Email: [aryamanskaushik@gmail.com](mailto:aryamanskaushik@gmail.com)  
Phone: +91 98225 73334

---
