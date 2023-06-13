import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/schedule",
			name: "schedule",
			component: () => import("../views/ScheduleView.vue"),
		},
		{
			path: "/journey",
			name: "journey",
			component: () => import("../views/JourneyView.vue"),
		},
		{
			path: "/lines",
			name: "lines",
			component: () => import("../views/LinesView.vue"),
		},
	],
});

export default router;
