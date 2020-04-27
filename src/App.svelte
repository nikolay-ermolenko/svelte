<script>
  import Router from 'svelte-spa-router';
  import Viewport from './components/Viewport.svelte';

  export let version;

  $: versionText = `svelte v${version}`;
</script>

<Viewport>
  <div class="sv-layout-center">
    <h1>Hello svelte</h1>
    <p class="version">{versionText}</p>
  </div>
</Viewport>



<style>
.sv-layout-center{
  width: 60%;
  height: 60%;
  max-width: 20rem;
  margin: auto;
  padding: 1rem;
  overflow: auto;
  box-shadow: 0 0px 7px 0px var(--shadow-color), 0 14px 32px -18px var(--shadow-color);
  background-color: var(--container-background-color);

}
h1 {
  color: purple;
}
  .version {
    font-size: .8rem;
    color: var(--text-regular-color);
  }
</style>