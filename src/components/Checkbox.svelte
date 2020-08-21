<script>
  import { createEventDispatcher } from 'svelte';
  import Ripple from './Ripple.svelte';

  const dispatch = createEventDispatcher();
  const id = `checkbox-${parseInt(Math.random()*Math.pow(10, 15))}`;

  export let ripple = true;
  export let disabled = false;
  export let labelBefore = false;
  export let text = '';
	export let group = null;
	export let value = null;
  export let checked = null;
  
  $: updateChekbox(group);
  $: updateGroup(checked);
  $: classLabelBefore = labelBefore ? 'sv-checkbox-label-before' : '';
  $: classDisabled = disabled ? 'disabled' : '';
  $: indeterminate = checked === undefined || checked === null;

  function classCheckedValue(checked) {
    if (checked === undefined || checked === null) {
      return 'sv-checkbox-indeterminate'
    }

    return checked
      ? 'sv-checkbox-checked'
      : '';
  }

  function updateChekbox(group) {
    if (group === null) return;

    checked = group.includes(value);
  }

  function updateGroup(checked) {
    if (group === null) return;

    const index = group.indexOf(value);

    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }

</script>

<div class="sv-checkbox {classDisabled} {classLabelBefore} {classCheckedValue(checked)}">
  <label class="sv-checkbox-layout" for={id}>
    <div class="sv-checkbox-inner-container">
      <input id={id}
            type="checkbox" 
            {disabled}
            bind:checked={checked}
            bind:value={value}
            class="sv-checkbox-input" />
      {#if !disabled && ripple}
        <div class="sv-checkbox-ripple">
          <Ripple center />
        </div>
      {/if}
      <div class="sv-checkbox-frame" />
      <div class="sv-checkbox-background">
        {#if indeterminate}
          <div class="sv-checkbox-mixedmark" />
        {:else}
        <svg version="1.1" focusable="false" viewBox="0 0 24 24" xml:space="preserve" class="mat-checkbox-checkmark">
          <path fill="none" stroke="white" d="M4.1,12.7 9,17.6 20.3,6.3" class="sv-checkbox-checkmark-path"></path>
        </svg>
      {/if}
      </div>
    </div>
    <span class="sv-checkbox-label">
      <slot>
        {#if text}
          {text}
        {/if}
      </slot>
    </span>
  </label>
</div>



<style>
.sv-checkbox {
  display: inline-block;
  margin: .6rem .1rem;
}
.sv-checkbox:not(.disabled) {
  cursor: pointer;
}
.sv-checkbox-ripple {
  position: absolute;
  top: -.7rem;
  left: -.7rem;
  right: -.7rem;
  bottom: -.7rem;
  border-radius: 50%;
}
.sv-checkbox-inner-container {
  display: inline-block;
  height: 1.4rem;
  line-height: 0;
  margin: auto;
  margin-right: .5rem;
  order: 0;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  width: 1.4rem;
  flex-shrink: 0;
}
.sv-checkbox-layout {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: inherit;
  align-items: baseline;
  vertical-align: middle;
  display: inline-flex;
  white-space: nowrap;
}
.sv-checkbox-label-before .sv-checkbox-inner-container {
    order: 1;
    margin-left: .5rem;
    margin-right: auto;
}
.sv-checkbox-input {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.sv-checkbox-frame {
  background-color: transparent;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
  border-width: .1rem;
  border-style: solid;
  border-color: var(--form-checkbox-background-color);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: .15rem;
  box-sizing: border-box;
  pointer-events: none;
}
.sv-checkbox-checked .sv-checkbox-frame {
  border-color: var(--form-checkbox-background-color);
}
.sv-checkbox-checked .sv-checkbox-background, 
.sv-checkbox-indeterminate .sv-checkbox-background {
  width: 100%;
  height: 100%;
  background-color: var(--form-checkbox-background-color);
}
.sv-checkbox-indeterminate .sv-checkbox-mixedmark {
    opacity: 1;
    transform: scaleX(1) rotate(0deg);
}
.sv-checkbox-checked .sv-checkbox-mixedmark {
    transform: scaleX(1) rotate(-45deg);
}
.sv-checkbox-mixedmark {
    width: calc(100% - 6px);
    height: 2px;
    opacity: 0;
    transform: scaleX(0) rotate(0deg);
    border-radius: 2px;
    background-color: #FFF;
}
.sv-checkbox-background {
  border-radius: .15rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.sv-checkbox-background svg {
  flex: 1;
}
.disabled .sv-checkbox-frame {
  border-color: #eee;

}
.disabled .sv-checkbox-background {
  background-color: #eee;
}
.disabled .sv-checkbox-label {
  color: #999;
}
</style>

