<script lang="ts">
	import { Link } from "svelte-routing";

	// Icons
	import HomeIcon from "./icons/home.svelte";
	import LinesIcon from "./icons/lines.svelte";
</script>

<nav>
	<Link to="/" class="tab-link">
		<HomeIcon />
	</Link>
	<Link to="lines" class="tab-link">
		<LinesIcon />
	</Link>
</nav>

<style lang="scss">
	nav {
		border-top: 1px solid var(--on-background);
		height: 4.5rem;
		padding: 1.2rem 0;
		display: flex;
		align-items: stretch;
		justify-content: space-around;
		box-shadow: 0 0 10px 8px var(--background);
	}
	:global(.tab-link) {
		font-size: 1rem;
		color: var(--on-background);
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		:global(svg) {
			height: 100%;
		}
	}
	:global(.tab-link[aria-current="page"]) {
		color: var(--background);
		&:hover {
			color: var(--background);
		}
		&::after {
			content: "";
			position: absolute;
			background-color: var(--on-background);
			padding: 1rem 2rem;
			border-radius: 1rem;
			z-index: -1;
		}
	}
</style>
