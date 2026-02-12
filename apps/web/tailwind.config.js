const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const tailwinds = require('mada-design-system/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../node_modules/mada-design-system/*.{html,js,ts,jsx,tsx}',
  ],
  theme: tailwinds.theme,
  plugins: tailwinds.plugins,
};
