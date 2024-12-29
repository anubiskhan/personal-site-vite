# Project Title

This project is a React application built with TypeScript and Vite. It provides a minimal setup with Hot Module Replacement (HMR) and some ESLint rules.

## Project Status

- [x] Configure GitHub Actions to deploy to S3 and invalidate distribution when pull request is merged into master
- [x] Fix styling for mobile
- [x] Set favicon to use custom icon instead of Vite default
- [x] Setup router with navigation bar
- [ ] Create a second page with YouTube randomizer

## Getting Started with React + TypeScript + Vite

This template uses two official plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): This plugin uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): This plugin uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, consider updating the configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
