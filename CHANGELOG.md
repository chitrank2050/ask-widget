# Changelog

All notable changes to Ask Widget.

## [0.5.1] - 2026-03-20

### Build

- Update CI Node.js version to 20 and push specific git tags.

### Documentation

- Update project descriptions to emphasize streaming AI and add navigation links to the README.
- Update custom funding link to PayPal.

### Features

- Add `docs` and `npm:publish` scripts, and remove `docs-deploy`.
- Deploy Storybook alongside VitePress documentation and configure the base path for GitHub Pages.
- Redesign the local development and demo preview page with a new header, hero section, and interactive elements.
- Enhance chat launcher button with customizable label, theme, and pill-shaped design.
- Separate Vite build configurations for application and library, updating package scripts and README for distribution.
- Integrate Ko-fi support badge and widget.
- Configure Vitest for testing, update ChatButton test props, and add Ko-fi funding details.
- Add custom funding link to Ko-fi page.

### Maintenance

- Finalize build before publishing v0.4.2
- Update Storybook dependencies to 8.6.17
- Esbuild enables any website to send any requests to the development server and read the response
- Security patches and project upkeep (v0.5.1)
- 🔐 CI: Added explicit `contents: read` permissions to ci.yml following the Principle of Least Privilege.

## [0.4.0] - 2026-03-20

### Features

- Add a new CI workflow and update the README with CI and install size badges.

### Maintenance

- Prepare for package publishing by setting `private` to false, updating documentation links, and configuring the dts plugin.

## [0.2.0] - 2026-03-20

### Documentation

- Add VitePress documentation site with initial content for the ask-widget.

### Features

- Update git scripts.
- Introduce interactive menu script and integrate it with obliviate and other dev commands.
- Configure project as a publishable React component library with Vite, including build settings, type generation, and Vitest testing.
- Implement a new chat widget including core components, styling, and a local development preview.
- Add a loading animation for streaming messages and update the application's visual theme and typography.
- Implement a loading animation for streaming responses, adjust initial streaming delay, and correct main entry point casing.
- Implement chat session and SSE streaming hooks, integrate Storybook, and establish Vitest for component testing.
- Implement flexible streaming response with configurable SSE, custom stream prop, and built-in demo.
- Implement header and footer components with responsive styling.
- Introduce UI customization with `colors` and `labels` props, add chat history persistence, and include a new docs deployment script.

### Maintenance

- Cleaned git cache

## [0.1.0] - 2026-03-19

### Documentation

- Update README example and bug report template to reflect Vite environment variables and framework.

### Features

- Initialize a new React application using Vite and TypeScript.
- Establish foundational project infrastructure, development scripts, code quality tools, and community guidelines.
- Add a dedicated script for Git tagging and refactor the release script to generate changelogs and manage GitHub releases.


