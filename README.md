# go-budget front

This is a front-end application for the go-budget backend, built with vite + react.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jairogloz/go-budget-front
   cd go-budget-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up Environment Variables

1. Copy the `example.env` file to `.env`:

   ```bash
   cp example.env .env
   ```

2. Open the `.env` file and provide the necessary environment variables. For example:
   ```env
   VITE_GO_BUDGET_BACKEND_URL=http://localhost:8080
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

### Building for Production

To create a production build, run:

```bash
npm run build
```

### Previewing the Production Bild

To preview the production build locally, run:

```bash
npm run serve
```

### Linting

To lint your code, run:

```bash
npm run lint
```
