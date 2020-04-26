// import svelte from  'svelte/compiler';
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    version: '3.21.0'//svelte.VERSION
  }
});

export default app;