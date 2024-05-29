Perpetual dApp on https://perp.coolwallet.io

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Deployment Repos

This repository only saved souce code, the deployments are in the following repositories:

1. Production: https://github.com/coolwallet-team/web-coolwallet-orderly which deployed on https://perp.coolwallet.io
2. Dev: https://github.com/coolwallet-team/dev-web-coolwallet-orderly which deployed on https://dev-perp.coolwallet.io

When you push to the `main` branch of deployment repositories, the deployment will be triggered automatically.

# Prerequisites

```bash
❯ node -v
v18.18.0
❯ npm -v
9.8.1
❯ yarn -v
1.22.22
```

You can use `nvm` to set correct node version.

```
nvm use $(.nvmrc)
```

# Install dependencies

```
yarn install
```

# Develop

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
