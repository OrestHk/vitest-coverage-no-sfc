import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: { target: "esnext" },
    server: { port: 9090 },
    resolve: {
        alias: {
            "@/tests": path.resolve(__dirname, "./tests"),
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        environment: "jsdom",
        clearMocks: true,
        globals: true,
        // Waiting for https://github.com/vuejs/vue-test-utils/issues/1982
        alias: {
            vue: "vue/dist/vue.runtime.mjs",
        },
        coverage: {
            include: ["src/**"],
            extension: [".ts", ".vue"],
        },
    },
})
