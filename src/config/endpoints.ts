import { Preferences } from "@capacitor/preferences";

const endpoints = {
	lines: "https://api.tisseo.fr/v2/lines.json?key={KEY}",
	messages: "https://api.tisseo.fr/v2/messages.json?key={KEY}",
};

const getEndpointUrl = async (name: string & keyof typeof endpoints) => {
	const key = (await Preferences.get({ key: "key" })).value;

	if (!key) return false;

	return endpoints[name].replace("{KEY}", key);
};

export default getEndpointUrl;