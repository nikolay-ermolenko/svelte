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
  <div class="sv-container-body"
       class:sv-ripple-el={!ripple}>
    {#if ripple}
      <Ripple />
    {/if}
    <slot name="body"></slot>
  </div>
</div>

<style>

.sv-container {
  transition: var(--transition-delay);
  width: 100%;
  height: 100%;
  flex: 1;
  box-shadow: 0 0 .9rem -0.4rem var(--shadow-color), 0 .87rem 2rem -1.4rem var(--shadow-color);
  background-color: var(--container-color);
  color: var(--container-text-color);
  display: flex;
  flex-direction: column;
}
.sv-container-body {  
  overflow: auto;
  padding: 1rem;
  flex: 1;
}
</style>