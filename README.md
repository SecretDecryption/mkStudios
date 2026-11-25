# MK Studio Aesthetics — Website update

Includes the grand-opening invitation and regular IPL pricing. The launch prices have been removed.

## Update the existing site

1. Unzip this file. Upload the **contents** of the package to the existing MK Studio GitHub repository. Put `app`, `public`, and `package.json` at the same level as the existing `package.json`; do not upload the ZIP or add an extra `mk-studio` folder.
2. Commit to a new branch first if you want a Vercel preview. When ready for the live site, merge into the production branch (usually `main`).
3. In the existing MK Studio Vercel project, check the new deployment. No new Vercel project or domain changes are needed if the repository is already connected. See [Vercel’s GitHub deployment guide](https://vercel.com/docs/git/vercel-for-github).

## Turn on RSVPs

The RSVP button is hidden until a responder link is configured. The flyer and regular prices work either way.

1. In Google Forms, publish **MK Studio Grand Opening RSVP** with **Anyone with the link** as the responder audience. Copy the responder link (not the edit or spreadsheet link) and check it in a private browser window.
2. In Vercel, open the existing MK Studio project. Go to **Settings → Environment Variables** and add `MK_STUDIO_RSVP_URL`. Paste the responder link as the value and select **Production**. Select **Preview** as well only if you want it available there. [Vercel’s environment-variable guide](https://vercel.com/docs/environment-variables/managing-environment-variables).
3. Deploy or redeploy so the RSVP button picks up the setting. Keep the response sheet private and share it directly with MK when ready.

## Local preview

Install the packages and start the development server:

```bash
pnpm install
pnpm dev
```
