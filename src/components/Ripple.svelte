<script>
  let rippleCounter = [];

  /**
   * 
   * @param {Event} e
   */
  function onRippleMouseDown(e) {;
    const { pageX, pageY, path, currentTarget } = e;
    let target = currentTarget;

    if (currentTarget.classList.contains('sv-ripple-bubble')) {
      target = currentTarget.parentNode;
    }

    const { top, left } = target.getBoundingClientRect();
    const { color, width, height } = target.ownerDocument.defaultView.getComputedStyle(target.parentNode);
    const bubbleDim = Math.max(parseInt(width), parseInt(height));

    rippleCounter = rippleCounter.concat([{ 
      left: pageX-left-0-bubbleDim*.5, 
      top: pageY - top -0-bubbleDim*.5, 
      color, 
      bubbleDim
    }]);
    setTimeout(() => (rippleCounter.shift(),rippleCounter = [].concat(rippleCounter)), 7000000);
  }
</script>

<div class="sv-ripple" on:mousedown={onRippleMouseDown}>
  {#each rippleCounter as { color, left, top, bubbleDim }}
    <div class="sv-ripple sv-ripple-bubble" style="background-color:{color};left:{left}px;top:{top}px;width:{bubbleDim}px;height:{bubbleDim}px;"></div>
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