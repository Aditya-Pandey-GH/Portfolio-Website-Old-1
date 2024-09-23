import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 1609,
		proxy: {
			"/api": {
				// target: import.meta.env.VITE_PROXY_TARGET,
				// target: "https://pandey-ji-portfolio-bkapi.onrender.com",
				// target: "http://127.0.0.1:16091",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "/api"),
			},
		},
	},
});
