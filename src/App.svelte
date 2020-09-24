<script>
  import Viewport from './components/Viewport.svelte';
  import Container from './components/Container.svelte';
  import Header from './components/Header.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';

  export let version;

  $: svelteVersion = `Svelte: ${version}`;

  let darkMode = false;
  let disabled = false;
  let originHtmlFontSize = null;
  let htmlFontSize = null;

  $: helloVersion = `Hello ${version}`;
  $: disableScaleReset = originHtmlFontSize === null || originHtmlFontSize === htmlFontSize;
  $: disableScaleDown = htmlFontSize !== null && htmlFontSize < 9;
  $: disableScaleUp = htmlFontSize > 20;

  function fontScaleUp() {
    const tag = document.getElementsByTagName('html')[0];
    const { fontSize } = getComputedStyle(tag);

    htmlFontSize = parseInt(fontSize) + 1;

    if(originHtmlFontSize === null) {
      originHtmlFontSize = parseInt(fontSize);
    }

    tag.style.setProperty('font-size', `${htmlFontSize}px`);
  }

  function fontScaleDown() {
    const tag = document.getElementsByTagName('html')[0];
    const { fontSize } = getComputedStyle(tag);

    htmlFontSize = parseInt(fontSize) - 1;

    if(originHtmlFontSize === null) {
      originHtmlFontSize = parseInt(fontSize);
    }

    tag.style.setProperty('font-size', `${htmlFontSize}px`);
  }

  function fontScaleReset() {
    const tag = document.getElementsByTagName('html')[0];

    htmlFontSize = originHtmlFontSize;

    tag.style.setProperty('font-size', `${originHtmlFontSize}px`);
  }
</script>

<Viewport {darkMode}>
  <Container header="Hello header">
    <div slot="header">
      <Header>
        <span>{svelteVersion} &</span>
         <Button text="btn" raised
                {disabled} />
        <Checkbox bind:checked={darkMode}
                  {disabled}>Dark</Checkbox>
        <Checkbox bind:checked={disabled}>Disabled </Checkbox>
        <Button text="btn" rippleCenter {disabled} />
        <Button text="btn" raised secondary
                {disabled} />
        <Button text="btn" secondary
                {disabled} />
       
      </Header>      
    </div>
    <div slot="body">
      <span class="regular-text">{helloVersion}</span>
      <Checkbox bind:checked={darkMode}
                {disabled}>Dark</Checkbox>
      <Button text="raised prim" raised
                {disabled} />
      <Button text="prim" 
                {disabled} />
      <Button text="raised sec" raised secondary
                {disabled} />
      <Button text="sec" secondary
                {disabled} />
    </div>
  </Container>
  <div class="container-wrap">
    <Container header="Size control">
      <div slot="body">
        <Button on:click={fontScaleUp}
                disabled={disableScaleUp}
                raised>ScaleUp</Button>
        <Button on:click={fontScaleReset} 
                disabled={disableScaleReset}
                raised
                secondary>Reset</Button>
        <Button on:click={fontScaleDown}
                disabled={disableScaleDown}
                raised>ScaleDwn</Button>
      </div>
    </Container>
  </div>
</Viewport>

<style>
.regular-text {
  font-size: 1rem;
}
.container-wrap {
  flex: .5;
  /* width: 70%;
  height: 80%;
  max-width: 800px;
  max-height: 800px;
  margin: 1rem auto; */
}

@media (max-width: 700px) {
  .container-wrap {
    /* padding: 1rem;
    margin: inherit;
    width: 100%;
    height: 100%;
    max-width: none; */
    max-height: none;
  }
}
</style>