<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let rippleCounter = [];
  let lastTime = null;
  let bufferMs = 1000;

  export let center = false;
  export let disabled = false;

  /**
   * 
   * @param {Event} e
   */
  function onRippleMouseDown(e) {
    if (disabled) return;

    const { pageX, pageY, path, currentTarget } = e;
    let target = currentTarget;

    if (currentTarget.classList.contains('sv-ripple-bubble')) {
      target = currentTarget.parentNode;
    }

    const { 
      top, 
      left, 
      width:targetWidth, 
      height:targetHeight 
    } = target.getBoundingClientRect();
    const { 
      color, 
      width, 
      height, 
      display 
    } = getComputedStyle(target.parentNode);
    const bubbleDim = display.indexOf('inline') > -1
      ? Math.min(parseInt(width), parseInt(height)) * 3
      : Math.max(parseInt(width), parseInt(height));

    dispatch('click');

    rippleCounter = rippleCounter.concat([{ 
      left: center
        ? targetWidth *.5 - bubbleDim * .5
        : pageX - left - bubbleDim * .5, 
      top: center
        ? targetHeight *.5 - bubbleDim * .5
        : pageY - top - bubbleDim * .5, 
      color, 
      bubbleDim
    }]);
    lastTime = +new Date();
    setTimeout(() => {
      const date = +new Date();

      if (date - lastTime > bufferMs) {
        rippleCounter = [];
      }
    }, bufferMs * 1.1);
  }
</script>

<div class="sv-ripple" 
     on:mousedown={onRippleMouseDown}>
  {#each rippleCounter as { color, left, top, bubbleDim }}
    <div class="sv-ripple sv-ripple-bubble"
         style="background-color:{color};
                left:{left}px;
                top:{top}px;
                width:{bubbleDim}px;
                height:{bubbleDim}px;">
    </div>
  {/each}
</div>


<style>

.sv-ripple {
  transition: background 0.8s;
  border-radius: inherit;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.sv-ripple.sv-ripple-bubble{
  border-radius: 50%;
  transform: scale(0);
  opacity: 1;
  position: absolute;
  animation: ripple .9s;
}

@keyframes ripple {
  from {
    opacity: .4;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
</style>