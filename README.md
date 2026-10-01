# Paradise Nursery Shopping Application

A React and Redux shopping cart project for the Paradise Nursery online plant shop.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://127.0.0.1:5173).
Run `npm run build` for a production build, `npm run preview` to preview it, and `npm test` for cart and catalog checks.

## Features

- Landing page with Paradise Nursery branding, a background image, company details, and Get Started.
- 18 unique plants in three categories, six per category, with local thumbnails, descriptions, names, and USD prices.
- Category filters and Add to Cart buttons that disable while a plant is in the cart and re-enable after removal.
- Home, Plants, and Cart navigation with a live count of all units.
- Redux Toolkit cart with quantity increases/decreases, deletion, line totals, and total amount.
- Decreasing a quantity from one removes the plant.
- Checkout displays Coming Soon; Continue Shopping returns to the catalog.
- Responsive layout, accessible button labels, keyboard focus states, and status announcements.
- Cart state is held in memory and resets on page refresh.

## Assignment files

| Task | File |
| --- | --- |
| 1 | README.md |
| 2 | src/AboutUs.jsx |
| 3 | src/App.css |
| 4 | src/App.jsx |
| 5 | src/CartSlice.jsx |
| 6 | src/ProductList.jsx |
| 7 | src/CartItem.jsx |

The shared navbar is in `src/Navbar.jsx`; the Redux store is in `src/store.js`.
The product catalog is in `src/plants.js`.
Original local SVG illustrations are in `public/images`; recreate them with `node scripts/generate-assets.mjs`.
Google Fonts are optional; system fonts work without network access.

## GitHub submission

This folder has not been published to GitHub. Create a repository, upload the **contents of this folder** to its root (exclude node_modules and dist), and open each required file in GitHub. Copy the actual browser URLs into the assignment.

Use `SUBMISSION_URLS.md` as a checklist. Replace USERNAME, REPOSITORY, and BRANCH with your actual values. These placeholders are not submission-ready links. If this project is nested in another repository, include its folder path after the branch in each URL.

To host the app on GitHub Pages, build it and deploy the contents of `dist` using a Pages workflow or deployment branch. Relative asset paths and hash navigation support repository subpaths.

## Manual acceptance check

1. Click Get Started; confirm three categories containing six plants each.
2. Add two different plants; confirm disabled buttons and cart count 2.
3. Open Cart, increase one quantity, and confirm count 3 and updated line/overall totals.
4. Decrease a quantity from one; confirm removal and the Add to Cart button becomes available again.
5. Delete a remaining item and check the empty-cart state.
6. Add a plant, click Checkout, and confirm Coming Soon.
7. Follow Continue Shopping, Home, and Plants; test at a narrow screen width.
