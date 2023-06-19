<script>
	import { CapacitorHttp } from "@capacitor/core";
	import getEndpointUrl from "../config/endpoints";

	export let name = "";

	let details = {};
	let stops = [];

	getEndpointUrl("lineDetails").then((url) => {
		if (!url) return;
		url = url.replace("{LINE}", name.toUpperCase());

		CapacitorHttp.get({ url }).then((response) => {
			details = response.data.lines.line[0];

			getEndpointUrl("lineStops").then((url) => {
				if (!url) return;
				url = url.replace("{LINEID}", details.id);

				CapacitorHttp.get({ url }).then((response) => {
					stops = response.data.stopAreas.stopArea;
				});
			});
		});
	});
</script>

<h1>{details.shortName}</h1>
<ul>
	{#each stops as stop}
		<li>{stop.name}</li>
	{/each}
</ul>
