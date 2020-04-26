<script>
  import Router from 'svelte-spa-router';

  export let version;
</script>

<div>
    <h1>Hello svelte</h1>
    <p class="version">svelte v{version}</p>
</div>

<style>
  h1 {
    color: purple;
  }
  .version {
    font-size: .8em;
    color: #666;
  }
</style>