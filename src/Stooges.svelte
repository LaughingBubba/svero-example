<script>
  export let router = {}

  import { onDestroy } from 'svelte'
  import { navigate } from 'svelte-routing'
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
  <button on:click={()=>navigate('/stooges/add')}>Add a Stooge</button>
  <button on:click={()=>navigate('/')}>Home</button>
  <ul>
    {#each stooges as {name}, i}
      <li id={i}>{name}</li>
    {/each}
  </ul>
</section>