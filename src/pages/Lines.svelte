<script lang="ts">
	import { CapacitorHttp } from "@capacitor/core";
	import getEndpointUrl from "../config/endpoints";
	import { link } from "svelte-routing";

	type Lines = {
		id: string;
		name: string;
		shortName: string;
		bgXmlColor: string;
		transportMode: {
			name: string;
			[more: string]: string;
		};
		[more: string]: string | { [more: string]: string };
	}[];

	async function getLines(): Promise<Lines> {
		const url = await getEndpointUrl("lines");
		if (!url) throw "Endpoint unknown";

		const response = await CapacitorHttp.get({ url });
		if (response.status != 200 || !response.data.lines?.line) throw "Invalid response";

		return response.data.lines.line;
	}

	const getter = getLines();
</script>

<h1>Lignes</h1>

{#await getter}
	Chargement...
{:then lines}
	<ul>
		{#each lines as line}
			<a href="lines/{line.shortName.toLowerCase()}" use:link>
				<li style="--line-color: {line.bgXmlColor}">
					<span class="line__shortName">{line.shortName}</span>
					<span class="line__destinations">{line.name}</span>
				</li>
			</a>
		{/each}
	</ul>
{:catch error}
	Une erreur est survenue: {error}
{/await}

<style lang="scss">
	ul {
		list-style-type: none;
	}

	a {
		display: block;
		color: var(--on-background);
		&:not(:last-of-type) {
			margin-bottom: 1rem;
		}
	}

	li {
		border-left: 5px solid var(--line-color);
		padding: 0.5rem 1rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5rem;
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
