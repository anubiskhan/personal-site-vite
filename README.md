# Personal Website

A modern, responsive personal website built with React and TypeScript, deployed on AWS CloudFront.

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling and development server
- Docker for development environment
- AWS S3 for static hosting
- AWS CloudFront for content delivery
- GitHub Actions for CI/CD

## Development

### Prerequisites
- Docker and Docker Compose
- Node.js 20+ (for local development without Docker)

### Launch Development Environment

1. Clone the repository:
```bash
git clone git@github.com:anubiskhan/personal-site-vite.git
cd personal-site-vite
```

2. Start the Docker development environment:
```bash
docker-compose up
```

The development server will be available at `http://localhost:3000` with hot reload enabled.

## Deployment

### Manual Deployment

1. Configure AWS credentials:
```bash
aws configure
# Set AWS Access Key ID
# Set AWS Secret Access Key
# Set default region to us-west-2
```

2. Build and deploy:
```bash
npm run build
npm run deploy
npm run invalidate
```

### Automated Deployment

The repository is configured with GitHub Actions for automated deployment. On merge to the `master` branch:
1. The application is built
2. Built assets are synced to S3
3. CloudFront distribution is invalidated

Required repository secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Local Development Without Docker

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```
