<script>
  import Router from 'svelte-spa-router';
  import Viewport from './components/Viewport.svelte';
  import Container from './components/Container.svelte';
  import Header from './components/Header.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';

  export let version;

  let btnDisabled = false;
  let checkNull = null;
  let checkOptions = [{
    id: '001',
    name: 'Value A'
  },{
    id: '002',
    name: 'Value B'
  }];
  let checkResult = ['001'];
  let checkOptions2 = {
    varA: true,
    varB: false,
    varC: null
  };

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
        <Button text="check disabled" disabled={btnDisabled} on:click={(z,x,c)=>btnDisabled=true} />
        <Button on:click={()=>checkNull=null} >Set null</Button>
        <Checkbox bind:checked={btnDisabled}>Item 1</Checkbox>
        <p class="version">Check null value:</p>
         <pre>{JSON.stringify(checkNull)}</pre>
        <Checkbox bind:checked={checkNull} disabled={btnDisabled}>Null value</Checkbox>
        <p class="version">Check group:</p>
        <pre>{JSON.stringify(checkOptions)}</pre>
        <pre>{JSON.stringify(checkResult)}</pre>
        {#each checkOptions as {id, name}}
          <div style="padding: .5rem 0;">
            <Checkbox bind:group={checkResult} value={id} labelBefore>{name}</Checkbox>
          </div>
        {/each}
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
  width: 70%;
  height: 80%;
  max-width: 600px;
  max-height: 500px;
  margin: auto;
}
</style>