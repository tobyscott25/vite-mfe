# Vite micro-frontend demo

A modern micro-frontend architecture demo in TypeScript using Vite's [Module Federatin plugin](https://github.com/originjs/vite-plugin-federation).

Features in this demo:

- Lazy-loading of microfrontend
- Microfrontend has its own isolated development playground
- Routing and sub-routing with [React Router](https://reactrouter.com/) in the parent app and microfrontend
- Microfrontend has its own 404 page
- Micro-frontend takes props and has a type definition defined in the parent app
- Shared component library ([Chakra UI](https://chakra-ui.com/)) between parent app and microfrontends for UI consistency
- Error Boundary in parent app to catch errors in microfrontend and display a fallback UI
- Microfrontend has it's own [environment variables](https://vitejs.dev/guide/env-and-mode)

Features to add:

- Support for multiple [environments](https://vitejs.dev/guide/env-and-mode) (development and production)
- Live demo

## Getting started

### Pre-requisites

```sh
# Install dependencies in both apps
cd parent && npm install && cd ../mfe1 && npm install && cd ../mfe2 && npm install
```

### Running the parent and micro-frontend locally

```sh
# Serve the micro-frontends at http://localhost:5001 and http://localhost:5002
cd mfe1
npm run mfe-preview
cd ../mfe2
npm run mfe-preview

# Run the parent app at http://localhost:5000/
cd ../parent
npm run dev
```

Visit: http://localhost:5000/ and http://localhost:5001/assets/remoteEntry.js

### Running micro-frontends in an isolated dev playground

```sh
# Run the micro-frontend playground at http://localhost:5501/
cd mfe1
npm run dev
```

Visit: http://localhost:5501/

The `remoteEntry.js` file is not available in this mode because Vite's dev mode is "bundle-less". [More info here](https://github.com/originjs/vite-plugin-federation?tab=readme-ov-file#vite-dev-mode)
