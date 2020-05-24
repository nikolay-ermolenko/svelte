<script>
  let rippleCounter = [];

  function onRippleMouseDown(e) {
    const { pageX, pageY, currentTarget } = e;
    const { top, left } = currentTarget.getBoundingClientRect();
    const { color } = currentTarget.ownerDocument.defaultView.getComputedStyle(currentTarget.parentNode);
    rippleCounter = rippleCounter.concat([{ left: pageX - left -5, top: pageY - top -5, color}]);
    setTimeout(() => (rippleCounter.shift(),rippleCounter = [].concat(rippleCounter)), 400);
  }
</script>

<div class="sv-ripple" on:mousedown={onRippleMouseDown}>
  {#each rippleCounter as { color, left, top }}
    <div class="sv-ripple sv-ripple-bubble" style="background-color:{color};left:{left}px;top:{top}px"></div>
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: scale(0);
  opacity: .4;
  position: absolute;
  background-color: #888;
  animation: ripple .4s;
}

@keyframes ripple {
  from {
    opacity: .4;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(80);
  }
}
</style>