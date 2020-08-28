<script>
  export let darkMode = false;
</script>

<div class="sv-viewport"
     class:theme-dark={darkMode}>
  <slot />
</div>

<style>
.sv-viewport {
  transition: var(--transition-delay);
  background-color: var(--viewport-color);
  color: var(--viewport-text-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>