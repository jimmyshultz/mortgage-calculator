# TheMortgageEstimator.com

A powerful mortgage calculator that helps users estimate their monthly payments, total interest, and make informed decisions about their home financing options.

## Features

- Home loan calculator with adjustable parameters
- Preapproval calculator to estimate how much you can borrow
- Educational resources about mortgages
- Blog with helpful articles for homebuyers
- Responsive design for all devices
- Accessibility features for all users

## Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/mortgage-calculator.git
cd mortgage-calculator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit http://localhost:3000

## Deployment with Vercel and GitHub Actions

This project is configured to automatically deploy to Vercel using GitHub Actions whenever changes are pushed to the main branch.

### Setting up Vercel Deployment

1. Create a Vercel account at https://vercel.com if you don't have one already

2. Install Vercel CLI locally
```bash
npm install -g vercel
```

3. Link your project to Vercel
```bash
vercel login
vercel link
```

4. Get the required Vercel tokens and IDs
```bash
vercel env pull .env.local
```
The Vercel project will generate values for `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

5. In your GitHub repository, go to Settings → Secrets → Actions and add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel personal token (create one at https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

6. Push changes to the main branch or manually trigger the workflow in GitHub Actions

### How It Works

The GitHub Actions workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Runs linting checks
5. Installs Vercel CLI
6. Pulls environment information from Vercel
7. Builds the project
8. Deploys to Vercel

## License

This project is licensed under the MIT License - see the LICENSE file for details.
