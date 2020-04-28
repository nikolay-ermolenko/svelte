<script>
  import Router from 'svelte-spa-router';
  import Viewport from './components/Viewport.svelte';
  import Container from './components/Container.svelte';
  import Header from './components/Header.svelte';

  export let version;

  $: versionText = `svelte v${version}`;
</script>

<Viewport>
  <Container header="Hello Svelte :: {version} :: qweertyyiuo">
    <div slot="body">
      <h1>Hello svelte</h1>
      <p class="version">{versionText}</p>
    </div>
  </Container>
</Viewport>

<style>
h1 {
  color: purple;
}
  .version {
    font-size: .8rem;
    color: var(--text-regular-color);
  }
</style>