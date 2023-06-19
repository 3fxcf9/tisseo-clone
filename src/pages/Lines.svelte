<script>
	import { CapacitorHttp } from "@capacitor/core";
	import getEndpointUrl from "../config/endpoints";

	let lines = [];

	getEndpointUrl("lines").then((url) => {
		if (!url) return;
		CapacitorHttp.get({ url }).then((response) => {
			lines = response.data.lines.line;
		});
	});
</script>

<h1>Lines</h1>
<ul>
	{#each lines as line}
		<li style="--line-color: {line.bgXmlColor}">
			<span class="line__shortName">{line.shortName}</span>
			<span class="line__destinations">{line.name}</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}
	li {
		border-left: 5px solid var(--line-color);
		padding: 0.5rem 1rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5rem;
	}
	li:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	.line__shortName {
		font-size: 1.6rem;
		font-weight: 600;
	}

	.line__destinations {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		text-transform: uppercase;
		color: var(--on-background-dark);
	}
</style>
