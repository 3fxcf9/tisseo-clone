<script lang="ts">
	import { CapacitorHttp } from "@capacitor/core";
	import getEndpointUrl from "../config/endpoints";

	export let name = "";

	type Details = {
		id: string;
		name: string;
		shortName: string;
		bgXmlColor: string;
		transportMode: {
			name: string;
			[more: string]: string;
		};
		[more: string]: string | { [more: string]: string };
	};
	type Stops = {
		id: string;
		name: string;
		cityName: string;
	}[];

	async function getInfos(): Promise<{ details: Details; stops: Stops }> {
		// Details
		let details_url = await getEndpointUrl("lineDetails");
		if (!details_url) throw "Endpoint unknown";
		details_url = details_url.replace("{LINE}", name.toUpperCase());

		const details_response = await CapacitorHttp.get({ url: details_url });
		const details = details_response.data.lines?.line[0];
		if (details_response.status != 200 || !details) throw "Invalid response";

		// Stops
		let stops_url = await getEndpointUrl("lineStops");
		if (!stops_url) throw "Endpoint unknown";
		stops_url = stops_url.replace("{LINEID}", details.id);

		const stops_response = await CapacitorHttp.get({ url: stops_url });
		const stops = stops_response.data.stopAreas?.stopArea;
		if (stops_response.status != 200 || !stops) throw "Invalid response";

		return {
			details,
			stops,
		};
	}

	const getter = getInfos();
</script>

{#await getter}
	Chargement...
{:then infos}
	<h1>{infos.details.transportMode.name} {infos.details.shortName}</h1>
	<ul>
		{#each infos.stops as stop}
			<li>{stop.name}</li>
		{/each}
	</ul>
{:catch error}
	Une erreur est survenue: {error}
{/await}

<style>
	h1 {
		text-transform: capitalize;
	}
	ul {
		list-style-type: none;
	}
	li {
		padding: 0.5rem;
	}
	li:not(:last-of-type) {
		border-bottom: 1px solid var(--on-background-dark);
	}
</style>
