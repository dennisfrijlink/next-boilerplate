
## ✨ Quick start
1.  **Create new project**
    Run the following command to start a project:
	```
	npx create next-app --example=https://github.com/dennisfrijlink/next-boilerplate
	```
2. **Install dependencies**
	We use Yarn as package manager. Call `yarn` inside the project directory to install the packages listed in the `package.json`

3. **Run dev server**
	Use the command `yarn dev` to run the project in dev server running on port `3000`

## 🧐 What's inside
- [Commands](#user-content--commands)
- [Directory structure](#user-content--directory-structure)
- [Pages](#user-content--pages)
- [Components](#user-content--components)
- [Testing](#user-content--testing)
- [Styling](#user-content--styling)
- [Localisation](#user-content--localisation)
- [SVG generation](#user-content--svg-generation)
- [Included libraries](#user-content--included-libraries)
- [Default headers](#user-content--default-headers)

## ⚙️ Commands

The following commands are included:

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `yarn dev`          | Start development server                  |
| `yarn build`        | Make production build                     |
| `yarn start`        | Run production build                      |
| `yarn lint`         | Lint code w/ ESLint 					  |
| `yarn pretty`       | Format code w/ Prettier                   |
| `yarn format`       | Format and lint code w/ Prettier & ESLint |
| `yarn generate:svg` | Generate SVG components                   |
| `yarn test:e2e`     | Run end-to-end tests                      |

## 🗂 Directory structure

```
...
├── ...
├── svg				// .svg files for generating SVG components
├── e2e				// End-to-end test files
├── public			// Publicly hosted assets (i.e. favicon)
├── src
│   ├── assets			// Compiled assets
│   ├── components		// React components
│   ├── css			// global css files
│   ├── hooks			// Project hooks
│   ├── lib			// Helper functions
│   ├── locales			// Localisation files
│   ├── pages			// Next JS Pages
├── ...
```
### Pages

In Next.js, a **page** is a [React Component](https://react.dev/learn/your-first-component) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory. Each page is associated with a route based on its file name.

We use pages with the `.page.tsx` extension & API routes and middleware with `.api.ts`.

_**Note**: These page extensions also apply to `_app`, `_document` and `middleware` files._

Using page extensions allows us to keep certain components close to the pages they're used on.

### Components
React components that are used only on a few pages and/or are very specific to those pages, should be placed in a
`/component` directory near their page.

For example:

```
...
├── ...
├── src
│   ├── pages
│   │   ├── about-us
│   │   │   ├── components
│   │   │   │   └── AboutCard.tsx  👈 The component
│   │   │   └── index.page.tsx  👈 The page component
├── ...
```

#### Base components

Components that can be used throughout the app are called base components. These live in the `/src/components`
directory.

Some examples of base components are: `<Input />`, `<Checkbox />`, `<TextArea />`, `<Button />`, etc.

## 🧪 Testing

### End-to-end testing

End-to-end tests are set up with [Playwright](https://playwright.dev/) and located in `/e2e`.

On CI, a clean backend instance is spun up to make sure the environment is always the same.

## 💎 Styling

[TailwindCSS](https://tailwindcss.com/) is used for styling. Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing, typography, shadows, and more to create a completely custom component design — without leaving your HTML/JSX or writing a single line of custom CSS.

## 🌎 Localisation

For multiple languages we use [next-i18next](https://github.com/i18next/next-i18next). `next-i18next` provides the remaining functionality – management of translation content, and components/hooks to translate your React components – while fully supporting SSG/SSR, multiple [namespaces](https://www.i18next.com/principles/namespaces), codesplitting, etc.

Localisation files are located in `src/locales`. Every file within this folder is a namespace, that can be loaded in a page by passing the namespaces parameter to `serverSideTranslations`. By default, the `common` namespace is included.

## ⚡ SVG generation

`.svg` files can be automatically optimized using SVGO and turned into React components by using the `yarn generate:svg` command.

SVG files can be placed in `/svg`, the generated output is placed in `src/assets/svg`.

`yarn generate:svg` will not overwrite existing files in the `src/assets/svg` directory to accommodate changes. To re-generate an existing file, simply delete it and run `yarn generate:svg`.

## 📚 Included libraries

### @tanstack/react-query

We use @tanstack/react-query for fetching and manipulating server-side data. During development we use the `<ReactQueryDevtools/>` component for visualize all of the inner workings of React Query and will likely save you hours of debugging.

### react-hook-form

React Hook Form is a lightweight library that aims to provide a powerful and flexible solution for form validation and management. We use [react-hook-form](https://react-hook-form.com/) instead of [Formik](https://github.com/jaredpalmer/formik) because of the flexibility and lightweight setup.

## ✅ Default headers

These headers are configured by default, because they're considered good security practice. You can overwrite
these headers by
[setting the header yourself in `next.config.js`](https://nextjs.org/docs/api-reference/next.config.js/headers).

| Header                                                                                                             | Value                |
| ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| [`X-Frame-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)                     | `deny`               |
| [`X-Content-Type-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)       | `nosniff`            |
| [`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)                     | `same-origin`        |
| [`Strict-Transport-Security`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) | `max-age=31536000`   |
| [`Permissions-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)                   | `interest-cohort=()` |
