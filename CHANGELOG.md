# Changelog

All notable changes to this project will be documented in this file.

## [0.6.0] - 2026-04-27

### 🚀 Features

- Integrate Vercel Analytics with environment-based conditional rendering ([29d42b4](29d42b46db276cd1206d46a59e0982482b4a852b)) by @chitrank2050
- Integrate Changesets for automated versioning and npm release workflow ([07435f0](07435f087303dfaa50ad6f72f40652455f035e22)) by @chitrank2050
- Add dependabot configuration for npm and github-actions with dependency grouping ([d4c4e79](d4c4e7957790fc39faae407967c59e20bb1c0b50)) by @chitrank2050
- Introduce unified logger utility & apply to build/install/deploy scripts ([062a22b](062a22b5ac59aeeac22946fa84e2f8dc5d0b4c30)) by @chitrank2050
- Implement automated CI/CD for labeling, maintenance & desc generation ([66c81f7](66c81f750ba83be6d5a65190febdb681354dea39)) by @chitrank2050
- Add automated documentation workflow & remove Storybook deployment from release ([9a3cbc6](9a3cbc670adab28d68e9fd51d717480b1bb66fd2)) by @chitrank2050
- Add JSR configuration and GitHub Actions workflow for automated package publication ([b29ccee](b29ccee48dff9562cafc60fe872381d5bd99c06a)) by @chitrank2050
- Automate API reference generation by integrating react-docgen-typescript into Vitepress ([19b90b4](19b90b4da8193e4a3de80bae98024b7b170f7a14)) by @chitrank2050
- Implement session persistence cleanup, add comprehensive hook testing and configure CI coverag ([b3ea089](b3ea089a9cc4d08352736afb7e320dc83d324a0d)) by @chitrank2050

### 🚜 Refactor

- Update installation and cleanup scripts to improve path handling and execution flow ([511ff20](511ff206699e346212d0c05558886d4ccacddd8c)) by @chitrank2050
- Wrap chat widget styles in a CSS @layer for better encapsulation ([a9b8150](a9b81502193c423a63a277da304a82470b90572b)) by @chitrank2050

### 📚 Documentation

- Update changelog for v0.5.3 ([5cc6262](5cc6262e7e9706d548832c9a0a127ab67edf8351)) by @chitrank2050
- Update demo URL in README ([63a4740](63a4740f3c0f701c3a677524b115166866d03834)) by @chitrank2050
- Add project branding assets and revamp README layout ([b0e571f](b0e571f9814aa4b7dcca56f15574797fdae6d09e)) by @chitrank2050
- Add padding to README badge section ([b7d71c2](b7d71c2dde1a7b4f1887d2b86d3a1693a455b943)) by @chitrank2050

### 🎨 Styling

- Apply consistent single-quote formatting and trailing commas in VitePress configuration ([36fdb7d](36fdb7d029864c47500cdaefe772ced161cf24ce)) by @chitrank2050

### 🧪 Testing

- Add unit tests for useSSEStream, migrate to react-swc, and fix CI coverage path ([e3880e6](e3880e60ce6388509a43583773f13f93236ea2f4)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Add changeset for release process improvement ([1a442d0](1a442d0c21b4ae8ca71078af9252957ac70b553f)) by @chitrank2050
- Migrate project repository and package namespace to chitranklabs ([a83613f](a83613f3f0cbd4b54c2ebb542aa1c3411723ee35)) by @chitrank2050
- Rename package scope to @chitranklabs/ask-widget and update documentation references ([2f5ecc6](2f5ecc6522486d76d773c34c8a54afcb26b3496b)) by @chitrank2050
- Rename package scope from @chitranklabs to @chitrank2050 ([56891a0](56891a01b3cee320b16fe3488046a14aab08c3de)) by @chitrank2050
- Update Node.js to v24, add workflow path ignores, and correct demo URL ([812ff19](812ff19da0e440a67dcd4544290c7c48eaf23d70)) by @chitrank2050
- Update dependabot configuration to group dependency updates and adjust PR limits ([9d709c6](9d709c654b2bccc85169c1cdf624bcd6a41f7fc2)) by @chitrank2050
- Add picomatch override to pnpm lockfile ([45a2d20](45a2d2069ee559a1e88e70ffd280056f568384b0)) by @chitrank2050
- Replace em-dashes with hyphens throughout documentation and comments ([2102dc5](2102dc51696cee96a980043230530561e66b96a9)) by @chitrank2050
- Update lockfile dependencies ([998b407](998b407604ff77a6bd8f5a51761786b22d6ce35a)) by @chitrank2050
- Harden CI/CD workflows, add security automation, and configure dependency management ([d427843](d4278433e4e2311ae02e20fe13c96770e52eaa89)) by @chitrank2050
- Replace changesets with git-hygiene release workflow and add CI security/hygiene checks ([3a225a0](3a225a00ab7aa916497dc2a4b2014a4f698539e7)) by @chitrank2050
- Refactor lefthook config to use scoped git-hygiene package and refine linting workflows ([8db5b9a](8db5b9a19d5ff6bc46cf5f357841abd3910a437b)) by @chitrank2050
- Standardise project infra, replace YAML issue templates with MD & format doc and types ([99105db](99105db11c8ff3c7fb08165ed6bb186e3aae7660)) by @chitrank2050
- Remove redundant baseUrls from tsconfig and update release workflow versioning logic ([3bcb923](3bcb923fbf51c3009fc9bcfbb071538ab0a9520f)) by @chitrank2050
- Update dependencies, add OSV-scanner audit, and optimize CI release pipeline ([2d626f3](2d626f36f6f7c18ffe211381ee219f2b3b1ce164)) by @chitrank2050
- Configure authenticated git remote, sync transient docs, and update deployment bot identity ([1f3a1c5](1f3a1c51e7b077485479fde2f454d69f3f60c50d)) by @chitrank2050
- Remove vite override from package.json and update lockfile ([c95f91e](c95f91e3fa339e693485d43ed39161923e53a56b)) by @chitrank2050
- Update pnpm-lock.yaml dependencies ([bf30284](bf3028450405a634b56081dee5f620d6b5f36c6a)) by @chitrank2050
- Simplify gh-pages deployment command and override vite version in package.json ([f5b85a9](f5b85a99079b695b03d1b63c8bb18c46b681480c)) by @chitrank2050
- Update pnpm-lock.yaml dependencies ([cbbd1fa](cbbd1fa709212cd4f97842beaf54f0f578e46b40)) by @chitrank2050
- Remove storybook link from navigation menu ([b291cdf](b291cdf95d8e526d86f6eb56342a64c492fa22c3)) by @chitrank2050
- Optimize build configuration and update release provenance attestations ([8e72e70](8e72e702258b5adca044de19312ca51a57287cea)) by @chitrank2050
- Update project documentation, clean up LICENSE terms, and improve test formatting ([23df90a](23df90abc49450f5710db10f18f582bf3f65daf9)) by @chitrank2050

### Build

- **deps:** Bump the npm_and_yarn group across 1 directory with 2 updates ([b0946fb](b0946fb4fe8b500edd4c9a79b712f9a24e3b2537)) by [dependabot[bot]](https://github.com/apps/dependabot)
- **deps-dev:** Bump the patch-and-minor group with 5 updates ([e31364c](e31364c1d2ec8eb8b7458711982a15942158eaa2)) by [dependabot[bot]](https://github.com/apps/dependabot)
- Add CJS support to library build and update package entry points ([919c3b3](919c3b3568d5bd091755fe65c8a43caf033daca7)) by @chitrank2050

## [0.5.3] - 2026-03-21

### 🚀 Features

- Dynamically display the application version from package.json in the UI. ([4155ccb](4155ccb5cba002eb08929def5da2c8cf641b31b6)) by @chitrank2050

### 🐛 Bug Fixes

- Address SSR hydration mismatches by moving `useSession` localStorage loading to `useEffect` and updating build configuration and documentation. ([e4e36e2](e4e36e217951a93980d2d580d29b4961d6d39b67)) by @chitrank2050

### 🚜 Refactor

- Replace Ko-fi widget script with an image link and update version to 0.5.2. ([f19c611](f19c6111d151ca7888b0d5bdd34f6c7e65693b85)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Add pnpm peer dependency rules for ignoring missing and allowing specific versions. ([d98ee1b](d98ee1b34a99d8e0f42c96ce60c85407cd791ee7)) by @chitrank2050

## [0.5.2] - 2026-03-20

### 📚 Documentation

- Update changelog for v0.5.1 ([a80ad1f](a80ad1f05cedae84e645218de312a105f816ea96)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Bump version to 0.5.2 ([0692a1c](0692a1ccc1edd08d4ebfccdcf6b95acb09a7800c)) by @chitrank2050

## [0.5.1] - 2026-03-20

### 🚀 Features

- Add `docs` and `npm:publish` scripts, and remove `docs-deploy`. ([e8e41f3](e8e41f388e43af6f56085c9cc6862d20af5c66c0)) by @chitrank2050
- Deploy Storybook alongside VitePress documentation and configure the base path for GitHub Pages. ([d9223db](d9223db642f071d5f52cbf77baf71cea8e247346)) by @chitrank2050
- Redesign the local development and demo preview page with a new header, hero section, and interactive elements. ([64c2bde](64c2bde5683064c6bb5dd4d66893795969e2bb0f)) by @chitrank2050
- Enhance chat launcher button with customizable label, theme, and pill-shaped design. ([b6e0ecd](b6e0ecd3480629e9eb72ea4e638a7877ba5b57bd)) by @chitrank2050
- Separate Vite build configurations for application and library, updating package scripts and README for distribution. ([2e9cd04](2e9cd04b7185511a4c912ac328b218ec4b3dca41)) by @chitrank2050
- Integrate Ko-fi support badge and widget. ([2d7a29f](2d7a29fe38c0d1258360654e0e882ef5def7e2dd)) by @chitrank2050
- Configure Vitest for testing, update ChatButton test props, and add Ko-fi funding details. ([8cd4528](8cd4528c750f82073355fa68fcd2a93571bfd14f)) by @chitrank2050
- Add custom funding link to Ko-fi page. ([470316a](470316ac53f960f5524d8427a737840f07168f12)) by @chitrank2050

### 📚 Documentation

- Update project descriptions to emphasize streaming AI and add navigation links to the README. ([8cdb4c8](8cdb4c842843665e5bec94d5230ab7cf875f390d)) by @chitrank2050
- Update custom funding link to PayPal. ([f09db59](f09db5997be2914bd7ee3448f6b8ef9091e64988)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Finalize build before publishing v0.4.2 ([63425d1](63425d1f66fe3d29233513ab79ce8f3159fe945a)) by @chitrank2050
- Bump version to 0.5.0 ([1ac70a8](1ac70a8db9fc6c6837d5554fa8ca9473028f74d4)) by @chitrank2050
- Bump version to 0.5.1 ([48604b6](48604b6a84728b9011c184dd0d818da383fbe532)) by @chitrank2050
- Update Storybook dependencies to 8.6.17 ([9bd451f](9bd451f2c3c8e5304da887699c7a858c4c953ea5)) by @chitrank2050
- Esbuild enables any website to send any requests to the development server and read the response ([a287813](a28781391c3d855a519e9944642fa4fe51f53fe8)) by @chitrank2050
- Security patches and project upkeep (v0.5.1) ([3cce467](3cce467e392a4e2719c19ddd7424a178dfbaeb71)) by @chitrank2050
- 🔐 CI: Added explicit `contents: read` permissions to ci.yml following the Principle of Least Privilege. ([8ee94d9](8ee94d945439b8281097a861acc21716ef7017fc)) by @chitrank2050

### Build

- Update CI Node.js version to 20 and push specific git tags. ([bd84d9f](bd84d9fb4f4f526c34eef07c8c633fb7b1997391)) by @chitrank2050

## [0.4.1] - 2026-03-20

### 📚 Documentation

- Update changelog for v0.4.0 ([6de5024](6de50242719fbc1f843dfdca3ce585c1dbfd665c)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Bump version to 0.4.1 ([461f8f5](461f8f5228983f5f61a94e80b0794890ac92b73a)) by @chitrank2050

## [0.4.0] - 2026-03-20

### 🚀 Features

- Add a new CI workflow and update the README with CI and install size badges. ([595aafd](595aafd4128df1d9de02daf1d252639da312c90f)) by @chitrank2050

### 📚 Documentation

- Update changelog for v0.3.0 ([33d6c30](33d6c30309f701a0b0b58b3d564ed3dd4cd89321)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Prepare for package publishing by setting `private` to false, updating documentation links, and configuring the dts plugin. ([a55e53d](a55e53dbef4c5f997c1b7e2295e7b536230ad854)) by @chitrank2050
- Bump version to 0.4.0 ([910ac67](910ac670d8b5655dc7e1b3c0ae2b84051234239b)) by @chitrank2050

## [0.3.0] - 2026-03-20

### ⚙️ Miscellaneous Tasks

- Bump version to 0.3.0 ([256ef3b](256ef3b97caa194d26ab5fa776f1ed2e35b790a1)) by @chitrank2050

## [0.2.0] - 2026-03-20

### 🚀 Features

- Update git scripts. ([395664e](395664e872434ece43693b7ab629c0da48e4ab7e)) by @chitrank2050
- Introduce interactive menu script and integrate it with obliviate and other dev commands. ([b4768f9](b4768f929bc2f8e3dca172d1738d791a5f5eaf5b)) by @chitrank2050
- Configure project as a publishable React component library with Vite, including build settings, type generation, and Vitest testing. ([1253ad3](1253ad3901e5f993fc294dae2ce27ab846daf201)) by @chitrank2050
- Implement a new chat widget including core components, styling, and a local development preview. ([61be556](61be5569f378b0fd7deeaed35e7641c5b43f8f7d)) by @chitrank2050
- Add a loading animation for streaming messages and update the application's visual theme and typography. ([98015d9](98015d9e664c1b78b451e21f81cbbf3b7c49f995)) by @chitrank2050
- Implement a loading animation for streaming responses, adjust initial streaming delay, and correct main entry point casing. ([c1e2fbb](c1e2fbb480d522cf418bf89106d0338c0fef37a6)) by @chitrank2050
- Implement chat session and SSE streaming hooks, integrate Storybook, and establish Vitest for component testing. ([6b31eeb](6b31eeb3fe11bf8a611ecec0066c325281a795ff)) by @chitrank2050
- Implement flexible streaming response with configurable SSE, custom stream prop, and built-in demo. ([a1be05b](a1be05be8df9057e6695de637707a80a1e59bd19)) by @chitrank2050
- Implement header and footer components with responsive styling. ([bf092b0](bf092b02126f383a706fc1fff09703c082d3ed20)) by @chitrank2050
- Introduce UI customization with `colors` and `labels` props, add chat history persistence, and include a new docs deployment script. ([8204cbd](8204cbdbbfc276e666c94c454ca30e879b245d0f)) by @chitrank2050

### 📚 Documentation

- Update changelog for v0.1.0 ([5694a53](5694a53cf1add1026e1124adf51c115c7dd9070b)) by @chitrank2050
- Add VitePress documentation site with initial content for the ask-widget. ([adb7d04](adb7d04f52a8df4409358a26a653e525f87e7e5c)) by @chitrank2050
- Update changelog for v0.2.0 ([22ad68c](22ad68ca6a2b93b79413746cc788012214fcd2dc)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Cleaned git cache ([b8acc5a](b8acc5ae04f3bb1194fc5bfb02f533dfd5300d06)) by @chitrank2050
- Bump version to 0.2.0 ([4f700bb](4f700bb77bca4fe1ffb653462ddec53b85beb56f)) by @chitrank2050

## [0.1.0] - 2026-03-19

### 🚀 Features

- Initialize a new React application using Vite and TypeScript. ([3c05b76](3c05b7660ffa0ce2f80c9d36665977a7e819283b)) by @chitrank2050
- Establish foundational project infrastructure, development scripts, code quality tools, and community guidelines. ([adcb5d3](adcb5d3b2750239cfdc23d5e43b5113180a526f8)) by @chitrank2050
- Add a dedicated script for Git tagging and refactor the release script to generate changelogs and manage GitHub releases. ([5f907fa](5f907fa83dd7932325a89f0d6f2c2f844bf1bd2a)) by @chitrank2050

### 📚 Documentation

- Update README example and bug report template to reflect Vite environment variables and framework. ([610afb4](610afb40c442d4060a0f5d3fa909db7ce78436f2)) by @chitrank2050

### ⚙️ Miscellaneous Tasks

- Bump version to 0.1.0 ([90c779b](90c779be0d5fcf11f909fd8f2f7bc7972101b78e)) by @chitrank2050

<!-- generated by git-cliff -->
