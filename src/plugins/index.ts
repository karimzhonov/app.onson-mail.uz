import { App } from "vue";

export const setupPlugins = (app: App) => {
    const modules: Record<string, any> = import.meta.glob('./*.ts', { eager: true })

    for (const path in modules) {
        if (path !== './index.ts') {
            modules[path].default(app)
        }
    }
}