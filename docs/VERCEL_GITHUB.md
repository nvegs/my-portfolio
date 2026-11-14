# Auto-deploy when `master` updates

Every push to **`master`** (including PR merges) triggers a production deploy via GitHub Actions.

## One-time setup

1. Create a Vercel token: [vercel.com/account/tokens](https://vercel.com/account/tokens) (scope: full access or deploy for team **victory-nnabugwus-projects**).
2. In GitHub: **nvegs/my-portfolio** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
   - Name: `VERCEL_TOKEN`
   - Value: your token

3. Push or merge to `master` — check **Actions** tab for **Deploy to Vercel (production)**.

Production URL: [my-portfolio-kappa-swart-75.vercel.app](https://my-portfolio-kappa-swart-75.vercel.app)

## Optional: native Vercel ↔ GitHub link

If you also connect the repo in [Vercel Git settings](https://vercel.com/victory-nnabugwus-projects/my-portfolio/settings/git), **disable one** of the two deploy paths (either disconnect Git in Vercel or remove this workflow) to avoid duplicate production deploys.