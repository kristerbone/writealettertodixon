# Write A Letter To Dixon

An official diplomatic transmission from the Arcturian High Council to DJ Dixon, requesting backstage VIP access at DC10 Circoloco Opening Weekend, Ibiza.

Published at **writealettertodixon.com**

## Tech Stack

- **React 19** + **Vite 6**
- Deployed via **AWS Amplify** from GitHub

## Local Development

```bash
cd app
npm install
npm run dev
```

## Production Build

```bash
cd app
npm run build
npm run preview
```

## Deploying to AWS Amplify

1. Push this repo to GitHub
2. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. **New app** → **Host web app** → connect your GitHub repo
4. Set **App root** to `app`
5. Amplify auto-detects the `amplify.yml` build config
6. Deploy
7. Add custom domain `writealettertodixon.com` under **Domain management**

## Custom Domain Setup

In the Amplify Console under **Domain management**:

1. Add domain `writealettertodixon.com`
2. Amplify provides the DNS records to add at your registrar
3. Add the CNAME / ALIAS records
4. SSL certificate is provisioned automatically

*"We came 36.7 light-years. The least you can do is put us on the list."*
