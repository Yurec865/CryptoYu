# CryptoYu - Cryptocurrency Tracker with AI Assistant

CryptoYu is a modern web application for tracking cryptocurrencies, built with React, TypeScript, and OpenAI. The app provides users with real-time cryptocurrency information and an intelligent assistant for answering cryptocurrency-related questions.

## Features

- 📊 Real-time cryptocurrency price tracking via CoinMarketCap API
- 🤖 AI assistant powered by OpenAI for cryptocurrency-related queries
- 💻 Modern interface with dark theme
- 📱 Responsive design for all devices
- 🔒 Secure API key storage

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - CSS Modules

- **Backend:**
  - Node.js
  - Express
  - OpenAI API
  - CoinMarketCap API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Yurec865/CryptoYu.git
cd cryptoyu
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
VITE_OPENAI_API_KEY=your-openai-api-key
```

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. In a separate terminal, start the backend server:
```bash
node server.js
```

The application will be available at `http://localhost:5173`

## Project Structure

```
cryptoyu/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Application pages
│   ├── services/      # API services
│   └── styles/        # CSS styles
├── public/            # Static files
├── server.js         # Backend server
└── .env              # Environment variables
```

## API Keys

The application requires the following API keys:
- CoinMarketCap API: [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)
- OpenAI API: [https://platform.openai.com/](https://platform.openai.com/)

## License

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
