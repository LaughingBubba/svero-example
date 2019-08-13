# Problem with exact prop on <Route/>

I don't think exact pathing is working as expected.

Given the following routes from `App.svelte`, I would expect `/stooges` to render the `<Stooges/>` component and `/stooges/add` to *only* render the `<AddStooges/>` component. Instead it renders both `<Stooges/>` *and* `<AddStooges/>`.

Further more, I would expect that `/stooges/non-existent` would only render `<h1>404 - Not Found</h1>` but it also renders `<Stooges/>`.

```html
<Router>

	<!-- <Route exact path='/stooges/add' component={AddStooge}/> -->
	<Route exact path='/stooges' component={Stooges}/>
	<Route exact path='/stooges/add' component={AddStooge}/>
	
	<Route fallback path='*'>
		<h1>404 - Not Found</h1>
	</Route>

</Router>
```

## setup
```bash
git clone https://github.com/LaughingBubba/svero-example.git
cd svero-example
npm install
npm run dev
```