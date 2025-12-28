# web-ext TypeScript template

A template for creating Web Extensions using TypeScript

## What's included

- TypeScript (obviously) with [@types/firefox-webext-browser](https://www.npmjs.com/package/@types/firefox-webext-browser) for typings.
- [Rollup](https://rollupjs.org/) for bundling.
- [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) for running, building and signing.
- [Vitest](https://vitest.dev/) with [jsdom](https://www.npmjs.com/package/jsdom) for testing.
- [ESLint](https://eslint.org), [typescript-eslint](https://www.npmjs.com/package/typescript-eslint),
  [Prettier](https://prettier.io/) and [lint-staged](https://www.npmjs.com/package/lint-staged) for linting.
- A [continuous integration workflow](.github/workflows/ci.yml) that runs linting and tests.
- A [workflow for publishing to addons.mozilla.org](.github/workflows/publish.yml) (AMO).
- A [Renovate](https://docs.renovatebot.com/) config for staying up-to-date.

## Getting started

1. [Create a repository from this template](https://github.com/new?template_name=web-ext-typescript-template&template_owner=axeleroy).
2. Clone your copy of the repository.
3. If you have [mise](https://mise.jdx.dev), run `mise install`. If not, install [Node.js](https://nodejs.org/downloads)
and [pnpm](https://pnpm.io/installation).
4. Install the dependencies:
   ```shell
   pnpm install   
   ```
5. If you are planning on supporting Chromium-based browsers, now is a good time to install [webextension-polyfill](https://www.npmjs.com/package/webextension-polyfill)
   and [@types/webextension-polyfill](https://www.npmjs.com/package/@types/webextension-polyfill).    
6. Update [manifest.json](src/manifest.json) and [rollup.config.js](rollup.config.js) according to your needs.
7. Happy coding!

## Developing

### Running in a browser with live-reload

The `dev` script (executed with `pnpm dev`) watches for code changes and automatically re-compiles and reloads the
extension. To specify a profile, a specific version of Firefox or to debug on Android, follow the
[documentation on `web-ext run`](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run).

### Building 

> [!TIP]
> If you have `mise` installed, executing `mise run build` will run every task described bellow.

> [!WARNING]
> Keep in mind that if you plan on publishing your web extension to addons.mozilla.org (AMO), you will be asked to 
> provide source code and instructions to reproduce the build!

1. Install dependencies:
    ```shell
    pnpm install --frozen-lockfile
    ```
2. Compile the TypeScript files and bundle them:
    ```shell
    pnpm bundle
    ```
3. Build the extension using `web-ext`:
    ```shell
   pnpm build
    ```

### Running tests

```shell
pnpm test
```

## Publishing on addons.mozilla.org

This template comes with [a GitHub Action workflow](.github/workflows/publish.yml) for publishing on addons.mozilla.org
(AMO). It also automatically creates a GitHub release based on information from [manifest.json](src/manifest.json) and
[metadata.json](metadata.json).

Beforehand, you must [create API keys](https://addons.mozilla.org/developers/addon/api/key/) and add them as 
GitHub Action environment variables: `AMO_API_KEY` for the JWT issuer, and `AMO_API_SECRET` for the JWT secret.

Then, publishing takes the following steps:
1. Update the `version` number in [manifest.json](src/manifest.json).
2. Update [metadata.json](metadata.json) following the [documentation](https://mozilla.github.io/addons-server/topics/api/addons.html#create).
In the case of add-on updates, the only fields you have to fill are the ones already present in the base template, plus
`version.release_notes`.
   > [!INFO]
   > By default, the workflow is expecting a key for "en-GB" under `version.release_notes` to fill the GitHub release.
   > Make sure to update the workflow step "Get release notes" accordingly.
3. Once set, manually run [the workflow](actions/workflows/publish.yml).
