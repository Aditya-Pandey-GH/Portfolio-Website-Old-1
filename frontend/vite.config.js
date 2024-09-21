import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 1609,
		proxy: {
			"/api": {
				target: "https://aditya-pandey.onrender.com",
				// target: "http://127.0.0.1:16091",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "/api"),
			},
		},
	},
});
