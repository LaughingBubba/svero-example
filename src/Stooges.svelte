<script>
  export let router = {}

  import { onDestroy } from 'svelte'
  import { navigateTo } from 'svero'
  import store from './stooge-store.js';
  
  let stooges
	let unsubscribe = store.subscribe(store => {
    	stooges = store
  })  
  
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe()
    }
	})
</script>

<section>
  <h1>The Stooges</h1>
  <button on:click={()=>navigateTo('/stooges/add')}>Add a Stooge</button>
  <button on:click={()=>navigateTo('/')}>Home</button>
  <ul>
    {#each stooges as {name}, i}
      <li id={i}>{name}</li>
    {/each}
  </ul>
</section>