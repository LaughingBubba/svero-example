<script>
  export let router = {}
  import { navigateTo } from 'svero'
  import store from './stooge-store.js'

  let text = '' 

  $: disabled = (text.length > 0) ? false : true

  function add() {
    store.update(stooges => {
      const newStooge = {name: text}
      return [...stooges, newStooge]
    })
    navigateTo('/stooges')
  }
</script>

<section>

  <h1>Add a Stooge</h1>
  <input bind:value={text}>
  <button on:click={()=>navigateTo('/stooges')}>Cancel</button>
  <button on:click={()=>add()} {disabled}>Add</button>

</section>