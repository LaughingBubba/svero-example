<script>
	import {Router, Route, Link, navigateTo} from 'svero'
	import Stooges from './Stooges.svelte'
	import AddStooge from './AddStooge.svelte'

	let name = 'world'

</script>

<h1>Hello {name}!</h1>

<button on:click={()=>navigateTo('/stooges')}>Show Stooges</button>

<Router>
	<Route exact path='/'>
		<h1>Home</h1>
	</Route>
	<!-- <Route exact path='/stooges/add' component={AddStooge}/> -->
	<Route exact path='/stooges' component={Stooges}/>
	<Route exact path='/stooges/add' component={AddStooge}/>
	
	<Route fallback path='*'>
		<h1>404 - Not Found</h1>
	</Route>

</Router>