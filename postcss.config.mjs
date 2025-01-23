import tailwindcss from 'tailwindcss';
import nested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Postcss} */
const config = {
  plugins: [tailwindcss, nested, autoprefixer],
};

export default config;
