<script lang="ts">
	import { Router, Route, Link } from "svelte-routing";
	import TabBar from "./lib/TabBar.svelte";
	export let url = "";

	import APIKeyModal from "./lib/APIKeyModal.svelte";

	// Pages
	import Home from "./pages/Home.svelte";
	import Lines from "./pages/Lines.svelte";
</script>

<Router {url}>
	<main>
		<Route path="lines" component={Lines} />
		<Route path="/"><Home /></Route>
	</main>

	<APIKeyModal />

	<TabBar />
</Router>

<style scoped>
	main {
		padding: 2rem;
		flex: 1;
		overflow-y: auto;
	}
</style>
