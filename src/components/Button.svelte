<script>
  import { createEventDispatcher } from 'svelte';
  import Ripple from './Ripple.svelte';

  const dispatch = createEventDispatcher();

  export let ripple = true;
  export let rippleCenter = false;
  export let disabled = false;
  export let text = '';
  export let raised = false;
  export let secondary = false;

  function handleClick(e) {    
    dispatch('click', { disabled, text, event:e });
  }

</script>

<button class="sv-button"
        class:sv-ripple-el={ripple}
        class:disabled={disabled}
        class:raised={raised}
        class:secondary={secondary}
        {disabled}
        on:click|stopPropagation={handleClick}>
  {#if ripple}
    <Ripple {disabled} center={rippleCenter} />
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
  background-color: var(--button-color);
  color: var(--button-text-color);
  border-radius: .15rem;
  outline: none;
  margin: .5rem;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  transition: .4s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 .3rem .1rem -.2rem var(--shadow-color), 
    0 .2rem .2rem 0 var(--shadow-color), 
    0 .1rem .5rem 0 var(--shadow-color);
}
.sv-button:not(.disabled):hover {
  /* background-color: #eee; */
}
.sv-button:not(.disabled) {
  cursor: pointer;
}
.sv-button.disabled {
  opacity: .3;
  box-shadow: none;
}
.sv-button:not(.raised) {
  box-shadow: none;
  background-color: transparent;
}
.sv-button .sv-button-content {
  font-weight: 500;
  margin: .5em;
  font-size: 1rem;
  text-transform: uppercase;
}
</style>