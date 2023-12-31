import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.app.tclone",
	appName: "tisseo-clone",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
	},
};

export default config;
