<script>
  import Ripple from './Ripple.svelte';

  const id = `radio-${parseInt(Math.random()*Math.pow(10, 15))}`;

  export let ripple = true;
  export let disabled = false;
  export let text = '';
	export let group = null;
  export let value = null;
  
  $: classDisabled = disabled ? 'disabled' : '';
  $: classCheckedValue = group === value ? 'sv-radio-checked' : '';
</script>


<div class="sv-radio {classDisabled} {classCheckedValue}">
  <label class="sv-radio-layout" for={id}>
    <div class="sv-radio-inner-container">
      <div class="sv-radio-outer-circle" />
      <div class="sv-radio-inner-circle" />
      <input id={id}
             type="radio" 
             {disabled}
             bind:group 
             value={value}
             class="sv-radio-input" />
      {#if !disabled && ripple}
        <div class="sv-radio-ripple">
          <Ripple center />
        </div>
      {/if}
    </div>
    <span class="sv-radio-label">
      <slot>
        {#if text}
          {text}
        {/if}
      </slot>
    </span>
  </label>
</div>

<style>
.sv-radio {
  display: inline-block;
  margin: .6rem .1rem;
}
.sv-radio:not(.disabled) {
  cursor: pointer;
}
.sv-radio-ripple {
  position: absolute;
  top: -.7rem;
  left: -.7rem;
  right: -.7rem;
  bottom: -.7rem;
  border-radius: 50%;
}
.sv-radio-layout {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: inherit;
  display: inline-flex;
  white-space: nowrap;
  vertical-align: middle;
  width: 100%;
  align-items: baseline;
}
.sv-radio-inner-container {
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
.sv-radio-input {
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
.sv-radio-outer-circle {
  border-color: var(--form-checkbox-background-color);
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: border-color ease 280ms;
  width: 100%;
  border-width: .1rem;
  border-style: solid;
  border-radius: 50%;
}
.sv-radio-checked .sv-radio-inner-circle {
  transform: scale(0.5);
}
.sv-radio-inner-circle {
  background-color: var(--form-checkbox-background-color);
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform ease 280ms,background-color ease 280ms;
  width: 100%;
  transform: scale(0.001);
}
.sv-radio-label-content {
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  display: inline-block;
  order: 0;
  line-height: inherit;
  padding-left: 8px;
  padding-right: 0;
}
.disabled .sv-radio-inner-circle {
  background-color: #eee;
}
.disabled .sv-radio-outer-circle {
  border-color: #eee;
}
.disabled .sv-radio-label {
  color: #999;
}
</style>