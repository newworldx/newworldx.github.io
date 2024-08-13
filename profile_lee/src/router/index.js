import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/page",
			name: "page",
			component: () => import("@/views/PageView.vue"),
		},
		{
			path: "/danshuixiaozhen",
			name: "danshuixiaozhen",
			component: () => import("@/views/DanshuixiaozhenView.vue"),
		},
		{
			path: "/wananmuqin",
			name: "wananmuqin",
			component: () => import("@/views/WananmuqinView.vue"),
		},
		{
			path: "/zhentouren",
			name: "zhentouren",
			component: () => import("@/views/ZhentourenView.vue"),
		},
	],
})

export default router
