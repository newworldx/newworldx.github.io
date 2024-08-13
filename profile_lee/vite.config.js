import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import legacy from "@vitejs/plugin-legacy"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		legacy({
			targets: ["ie >= 11"],
			additionalModernPolyfills: ["regenerator-runtime/runtime"],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},

	server: {
		proxy: {
			"/api": {
				target: "http://localhost:7070/",
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					"^/api": "/api",
				},
			},
		},
	},
})
