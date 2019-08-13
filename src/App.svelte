<script>
	import {Router, Route, Link, navigate} from 'svelte-routing'
	import Stooges from './Stooges.svelte'
	import AddStooge from './AddStooge.svelte'

	let name = 'world'
	export let url = ""

</script>

<h1>Hello {name}!</h1>

<button on:click={()=>navigate('/stooges')}>Show Stooges</button>

<Router basepath='/'>
	<Route path='*'>
		<h1>404 - Not Found</h1>
	</Route>
	<Route path='/'>
		<h1>Home</h1>
	</Route>
	<!-- <Route exact path='/stooges/add' component={AddStooge}/> -->
	<Route path='/stooges' component={Stooges}/>
	<Route path='/stooges/add' component={AddStooge}/>
</Router>