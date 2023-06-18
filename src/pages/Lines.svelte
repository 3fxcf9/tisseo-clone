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
		<li style="--color: {line.bgXmlColor}">{line.shortName}</li>
	{/each}
</ul>
