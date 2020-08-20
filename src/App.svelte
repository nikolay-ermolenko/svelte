<script>
  import Router from 'svelte-spa-router';
  import Viewport from './components/Viewport.svelte';
  import Container from './components/Container.svelte';
  import Header from './components/Header.svelte';
  import Button from './components/Button.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import Radio from './components/Radio.svelte';

  export let version;

  let htmlFontSize = 16;
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
  let radioResult = null;
  let checkOptions2 = {
    varA: true,
    varB: false,
    varC: null
  };

  $: versionText = `svelte v${version}`;

  function fontScaleUp() {
    const tag = document.getElementsByTagName('html');

    htmlFontSize += 1;
    tag[0].style.setProperty('font-size', `${htmlFontSize}px`);
  }

  function fontScaleDown() {
    const tag = document.getElementsByTagName('html');

    if (htmlFontSize === 0) return;

    htmlFontSize -= 1;
    tag[0].style.setProperty('font-size', `${htmlFontSize}px`);
  }

  function fontScaleReset() {
    const tag = document.getElementsByTagName('html');

    htmlFontSize = 16;
    tag[0].style.setProperty('font-size', `${htmlFontSize}px`);
  }


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
        <Button text="button" 
                on:click={(z,x,c)=>console.log(z.detail,x,c)} />
        <Button disabled={btnDisabled} 
                on:click={(z,x,c)=>btnDisabled=true} >Set disabled</Button>
        <Button disabled={checkNull === null}
                on:click={()=>checkNull=null} >Set null</Button>
        <Checkbox bind:checked={btnDisabled}>Disabled</Checkbox>

        <br>
        <Button on:click={fontScaleUp} >ScaleUp</Button>
        <Button on:click={fontScaleReset} >Reset</Button>
        <Button on:click={fontScaleDown} >ScaleDwn</Button>
  
        <p class="version">Check null value:</p>
        <pre>{JSON.stringify(checkNull)}</pre>
        <Checkbox disabled={btnDisabled}
                  bind:checked={checkNull} >Null value</Checkbox>
        <Checkbox disabled={btnDisabled}>Inline checkbox</Checkbox>
        {#each checkOptions as {id, name}}
          <Radio value={id}
                 disabled={btnDisabled}
                 bind:group={radioResult}>{name}</Radio>
        {/each}
        <p class="version">Check group:</p>
        <pre>{JSON.stringify(checkOptions)}</pre>
        <pre>{JSON.stringify(checkResult)}</pre>
        {#each checkOptions as {id, name}}
          <div style="padding: .5rem 0;">
            <Checkbox value={id}
                      disabled={btnDisabled}
                      bind:group={checkResult}  
                      labelBefore>{name}</Checkbox>
          </div>
        {/each}
        <pre>{JSON.stringify(radioResult)}</pre>
        {#each checkOptions as {id, name}}
          <div style="padding: .5rem 0;">
            <Radio value={id}
                   disabled={btnDisabled}
                   bind:group={radioResult}>{name}</Radio>
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
  max-width: 800px;
  max-height: 800px;
  margin: auto;
}
</style>