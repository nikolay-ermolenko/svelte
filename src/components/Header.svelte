<script>
  import Ripple from './Ripple.svelte';

  export let ripple = false;
</script>

<div class="sv-header {ripple ? 'sv-ripple-el' : ''}">
  {#if ripple}
    <Ripple />
  {/if}
  <slot />
</div>

<style>
.sv-header {
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  padding: .8rem;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>