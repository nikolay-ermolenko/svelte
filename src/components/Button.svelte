<script>
  import { createEventDispatcher } from 'svelte';
  import Ripple from './Ripple.svelte';

  const dispatch = createEventDispatcher();

  export let ripple = true;
  export let rippleCenter = false;
  export let disabled = false;
  export let text = '';

  function handleClick(e) {    
    dispatch('click', { disabled, text, event:e });
  }

</script>

<button class="sv-button {ripple ? 'sv-ripple-el' : ''}" {disabled} on:click|stopPropagation={handleClick}>
  {#if ripple}
    <Ripple disabled={disabled} center={rippleCenter} />
  {/if}
  <div class="sv-button-content">
    <slot>
      {#if text}
        {text}
      {/if}
    </slot>
  </div>
</button>

<style>

.sv-button {
  border: none;
  white-space: nowrap;
  background-color: var(--button-regular-background-color);
  border-radius: .15rem;
  outline: none;
  margin: .5rem;
  position: relative;
  overflow: hidden;
  transition: .4s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 .3rem .1rem -.2rem var(--shadow-color), 
    0 .2rem .2rem 0 var(--shadow-color), 
    0 .1rem .5rem 0 var(--shadow-color);
}
.sv-button:not([disabled]):hover {
  background-color: #eee;
}
.sv-button:not([disabled]) {
  cursor: pointer;
}
.sv-button[disabled] {
  background-color: #f3f3f3;
  box-shadow: none;
}
.sv-button[disabled] .sv-button-content {
  opacity: .4;
}

.sv-button .sv-button-content {
  font-weight: 500;
  margin: .5rem;
  font-size: 1rem;
  text-transform: uppercase;
}
</style>