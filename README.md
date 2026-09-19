# Tiny Hub Energy

Landing page for Tiny Hub, covering consumers, prosumers, partners, and investors.

Built with React, TypeScript, Vite, Tailwind CSS, and a small Express server that handles the contact form (sent via [Resend](https://resend.com)).

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` and set `RESEND_API_KEY` to your Resend API key.
3. Run the app:
   `npm run dev`

The app runs at `http://localhost:3000`.

## Build & Deploy

1. Build the client and server bundles:
   `npm run build`
2. Start the production server:
   `npm run start`

Set `RESEND_API_KEY` as an environment variable on whatever host you deploy to.
