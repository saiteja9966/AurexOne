# Aurex One

A Next.js App Router recreation of the supplied Aurex One reference website. The original page content, gold/black/cream palette, typography, photos, responsive layouts, and animations are preserved. Images and fonts are hosted locally.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

If port 3000 is in use, run `npm run dev -- --port 3107` and open http://localhost:3107. Set `SITE_URL` in `.env.local` to the final published domain before a deployment build.

## Production and verification

```sh
npm run build
npm run start
```

`npm run test:e2e` checks desktop and mobile pages, local images, overflow, navigation, expandable specifications, contact selection, form validation, WhatsApp preparation, and 404s. It uses an installed Google Chrome browser and starts an isolated production server on port 3107. Build first.

## Structure

- `src/app`: Next.js routes, server-rendered metadata, error handling, and global styles.
- `src/views`: reference page compositions.
- `src/components`: shared navigation, hero, cards, forms, corridor map, and animations.
- `src/data/layouts.js`: property descriptions, prices, gallery paths, and contact details.
- `public/images` and `public/fonts`: local copies of the original assets.

The reference's generated CSS is retained in `src/app/globals.css` for visual fidelity; accessibility enhancements are in `enhancements.css`.

## Enquiries

Submitting the contact form opens a prefilled WhatsApp message to the reference site's existing contact number. The visitor must press Send in WhatsApp. No enquiry is stored or reported as delivered by this app. The original site's private lead backend was not copied. Connecting a CRM or email service would require its endpoint and credentials.

## Reference

Original: https://aurex-build.preview.emergentagent.com/

The public static preview and its public source maps supplied the page components and assets. `scripts/assets.json` records original asset locations; `node scripts/download-assets.mjs` can restore missing assets on Windows. The unavailable original social preview image is replaced with the site's original homepage photograph.

Property figures and unconfirmed approval details are reproduced from the reference and remain editable in `src/data/layouts.js`.
