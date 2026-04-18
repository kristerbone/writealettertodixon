# Write A Letter To Dixon

An official diplomatic transmission from the Arcturian High Council to DJ Dixon, requesting backstage VIP access at DC10 Circoloco Opening Weekend, Ibiza.

Published at **writealettertodixon.com**

## Tech Stack

- **React 19** + **Vite 6**
- **npm workspaces** monorepo
- Deployed via **AWS Amplify** from GitHub

## Project Structure

```
├── package.json          # Root — npm workspaces config
├── amplify.yml           # Amplify build spec (runs from root)
├── app/                  # React SPA workspace
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   └── src/
└── README.md
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to AWS Amplify

1. Push this repo to GitHub
2. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. **New app** → **Host web app** → connect your GitHub repo
4. Amplify auto-detects the root `amplify.yml` which builds the `app` workspace and serves from `app/dist`
5. Deploy
6. Add custom domain `writealettertodixon.com` under **Domain management**

## Custom Domain Setup

In the Amplify Console under **Domain management**:

1. Add domain `writealettertodixon.com`
2. Amplify provides the DNS records to add at your registrar
3. Add the CNAME / ALIAS records
4. SSL certificate is provisioned automatically