<script>
  import Ripple from './Ripple.svelte';

  export let ripple = false;
</script>

<div class="sv-header"
     class:sv-ripple-el={ripple}>
  {#if ripple}
    <Ripple />
  {/if}
  <slot />
</div>

<style>
.sv-header {
  transition: var(--transition-delay);
  background-color: var(--header-color);
  color: var(--header-text-color);
  padding: .4rem;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>