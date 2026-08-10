import { withCustomConfig } from 'react-docgen-typescript';
import { resolve } from 'path';

/**
 * docs/api/props.data.ts
 *
 * This data loader runs at build time and extracts prop information
 * directly from the React component source code.
 */

const componentPath = resolve(import.meta.dirname, '../../src/components/ChatWidget.tsx');
const tsconfigPath = resolve(import.meta.dirname, '../../tsconfig.app.json');

export default {
  load() {
    const docs = withCustomConfig(tsconfigPath, {
      savePropValueAsString: true,
      propFilter: prop => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('@types/react');
        }
        return true;
      },
    }).parse(componentPath);

    // Return the first component found (ChatWidget)
    return docs[0]?.props || {};
  },
};
