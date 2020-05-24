import babel from 'rollup-plugin-babel';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';

const production = !process.env.ROLLUP_WATCH;

export default {
  external: ['overlayscrollbars'],
  input: 'src/main.js',
  output: [{
    sourcemap: true,
    format: 'cjs',
    name: 'app',
    file: 'docs/build/bundle.js'
  }, {
    file: 'docs/build/umd.js',
    name: 'app',
    format: 'umd',
  }],
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('docs/build/bundle.css');
      }
    }),
    resolve({
      jsnext: true,
      browser: true,
      dedupe: importee =>
        importee === 'svelte' ||
        importee.startsWith('svelte/')
    }),
    commonJS({
      sourceMap: false
    }),
    progress(),
    babel({
      exclude: 'node_modules/**',
    }),
    filesize({
      showGzippedSize: false,
    }),
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
