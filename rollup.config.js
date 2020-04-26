import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'docs/build/bundle.js'
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('docs/build/bundle.css');
      }
    }),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' ||
        importee.startsWith('svelte/')
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('docs'),
    production && terser()
  ],
  watch: {
    include: 'src/**',
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}
