const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          marine: '#02295a',
          purplish: '#473dff',
          pastel: '#adbeff',
          lightblue: '#bfe2fd',
          strawberry: '#ed3548',
          alt: {
            marine: '#174a8b',
            purplish: '#938cfe',
          },
        },
        neutral: {
          cool: '#9699ab',
          light: '#d6d9e6',
          magnolia: '#f0f6ff',
          alabaster: '#fafbff',
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
