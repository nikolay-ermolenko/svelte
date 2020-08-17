<script>
  import { createEventDispatcher } from 'svelte';
  import Ripple from './Ripple.svelte';

  const dispatch = createEventDispatcher();
  const id = +new Date() + `${Math.random()}`.replace('.','');

  export let ripple = true;
  export let disabled = false;
  export let labelBefore = false;
  export let text = '';

</script>

<mat-checkbox class="sv-checkbox {labelBefore ? 'sv-checkbox-label-before' : ''}">
  <label class="sv-checkbox-layout" for="checkbox-{id}">
    <div class="sv-checkbox-inner-container">
      <input type="checkbox" id="checkbox-{id}" class="sv-checkbox-input" />
      {#if !disabled && ripple}
        <div class="sv-checkbox-ripple">
          <Ripple center />
        </div>
      {/if}
      <div class="sv-checkbox-frame" />
    </div>
    <span class="sv-checkbox-label">
      <slot>
        {#if text}
          {text}
        {/if}
      </slot>
    </span>
  </label>
</mat-checkbox>

<style>
.sv-checkbox {
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
  border-color: rgba(0,0,0,.54);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: .15rem;
  box-sizing: border-box;
  pointer-events: none;
}

/* class="mat-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-checkbox-7" */
/* class="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-7-input" tabindex="0" aria-checked="false" */
</style>