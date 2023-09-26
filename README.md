# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Committing to Git

This template comes with a pre-configured [Husky](https://typicode.github.io/husky/#/) hook that runs `commitlint` before committing. This ensures that all staged files are linted and formatted before they are committed to Git.

### Commitlint configuration

The `commitlint` configuration is located in the `commitlint.config.js` file. It uses the `@commitlint/config-conventional` preset.

### Commitlint rules

The following rules are enforced:

- `type-enum`: Enforces that the type of the commit message matches one of the following: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`

Example of a valid commit message:

```
feat: add support for TypeScript
```

or

```
fix(feature): add missing dependency
```

### EsLint & Prettierrc configuration

The `EsLint` & `Prettierrc` configuration is located in the `.eslintrc.js` & `.prettierrc.js` files.

### EsLint & Prettierrc rules

The following rules are enforced:

- `@typescript-eslint/no-explicit-any`: Disallows usage of the `any` type
- `@typescript-eslint/no-unused-vars`: Disallows unused variables
