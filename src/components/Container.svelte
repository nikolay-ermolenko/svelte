<script>
  import Ripple from './Ripple.svelte';
  import Header from './Header.svelte';

  export let header = '';
  export let ripple = false;
</script>



<div class="sv-container">
  <slot name="header">
    {#if header}
      <Header>{header}</Header>
    {/if}
  </slot>
  <div class="sv-container-body {ripple ? 'sv-ripple-el' : ''}">
    {#if ripple}
      <Ripple />
    {/if}
    <slot name="body"></slot>
  </div>
</div>

<style>

.sv-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 0px 7px 0px var(--shadow-color), 0 14px 32px -18px var(--shadow-color);
  background-color: var(--container-background-color);
  display: flex;
  flex-direction: column;
}
.sv-container-body {  
  overflow: auto;
  padding: 1rem;
  flex: 1;
}
</style>