# Dev Stack
Dev Stack allow user to explore different web technologies, add their favourite technologies to a personal stack
## 🛠️ Technologies Used

-  React.js
-  TypeScript
-  Tailwind CSS
-  DaisyUI
-  React-Toastify
-  JSON
-  JavaScript (ES6+)
##Features:
### 1. Explore Technologies
Browse different technologies with their:
- Icon
- Name
- Description
- Category
- Difficulty
- Rating
- Badge
### 2. Build Your Stack
Click 'Add to stack' to add a technology to your personal stack.
### 3. Manage your stack
- Remove individual technologies
- Remove all technologies at once
- See the total number of selected technologies
- See an empty message when no technology is selected

==>JSX is a Javasript syntax and it is used in react because it allows HTML code inside Javasript or Typesript.

==>Props are data passed from a parent componant to child componant.
State is data managed inside a componant that can change over time.
==>useState store update data in a react componant.
==>userEffect runs code after the component renders.I used it to fetch the technology data from the JSON file when the app loads.









# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
