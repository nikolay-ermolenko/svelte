<script>
  import Router from 'svelte-spa-router';
  import Viewport from './components/Viewport.svelte';
  import Container from './components/Container.svelte';
  import Header from './components/Header.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';

  export let version;

  let btnDisabled = true;

  $: versionText = `svelte v${version}`;

  // header="Hello Svelte :: {version} :: qweertyyiuo"
</script>

<Viewport>
  <div class="aaaa">
    <Container>
      <div slot="header">
        <Header>
          <span>{versionText}</span>
          <Button text="info" rippleCenter />
        </Header>      
      </div>
      <div slot="body">
        <h1>Hello svelte</h1>
        <p class="version">{versionText}</p>
        <Button text="check bill" on:click={(z,x,c)=>console.log(z.detail,x,c)} />
        <Button text="check disabled" disabled={btnDisabled}/>
        <Checkbox>Item 1</Checkbox>
        <Checkbox text="Item 2" labelBefore />
      </div>
    </Container>
  </div>
</Viewport>

<style>
h1 {
  color: purple;
}
.version {
  font-size: .8rem;
  color: var(--text-regular-color);
}
.aaaa {
  width: 60%;
  height: 70%;
  max-width: 500px;
  max-height: 400px;
  margin: auto;
}
</style>