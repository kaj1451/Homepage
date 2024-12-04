# CDW MetricVision

A modern React application for monitoring CDW metrics.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd cdw-metricvision
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── CustomerLinks/
│   │   └── CustomerLinks.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   ├── Header/
│   │   └── Header.tsx
│   ├── Logo/
│   │   └── Logo.tsx
│   └── ui/
│       └── Image.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite