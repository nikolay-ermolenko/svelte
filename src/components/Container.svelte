<script>
  import Header from './Header.svelte';
  export let header;
</script>

<div class="sv-container sv-layout-center">
  <slot name="header">
    {#if header}
      <Header>{header}</Header>
    {/if}
  </slot>
  <div class="sv-container-body">
    <slot name="body"></slot>
  </div>
</div>


<style>
.sv-layout-center{
  width: 60%;
  height: 60%;
  max-width: 40vmax;
  max-height: 60vmin;
  margin: auto;
  
}
.sv-container {
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