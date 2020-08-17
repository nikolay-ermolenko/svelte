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

<button class="sv-button {!disabled && ripple ? 'sv-ripple-el' : ''}" {disabled} on:click|stopPropagation={handleClick}>
  {#if !disabled && ripple}
    <Ripple center="{rippleCenter}"/>
  {/if}
  <div class="sv-button-content">{text}</div>
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
  box-shadow: 
    0 3px 1px -2px var(--shadow-color),
    0 2px 2px 0 var(--shadow-color),
    0 1px 5px 0 var(--shadow-color);
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

.mat-button {
    min-width: 48px;
    height: 36px;
    margin: 6px 8px;
    user-select: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    outline: none;
    border: 0;
    border-radius: 0;
    transition: 0.4s cubic-bezier(0.4,0,0.2,1);
    font-family: inherit;
    line-height: normal;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
}

.mat-button .md-button-content {
    padding: 0 8px;
    color: #2196f3;
    color: var(--base-color);
}

.mat-button:hover {
    background-color: #bbdefb;
    background-color: var(--base-light-color);
}

.mat-button:active {
    background-color: #6ab8f7;
    background-color: var(--base-pressed-color);
}

</style>