import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"


export default defineConfig({
    integrations: [
        tailwind({
            config: {path: "./tailwind.config.js"}
        })
    ],
    vite: {
        ssr: {
            external: ["svgo"]
        }
    }
})
