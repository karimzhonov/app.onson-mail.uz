import {
  VueQueryPluginOptions,
  VueQueryPlugin,
  QueryClient,
} from "@tanstack/vue-query";

import { App } from "vue";


export default (app: App) => {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
      mutations: {
        onSuccess: () => {
          const toast = app.config.globalProperties.$toast
          const t = app.config.globalProperties.$t

          toast.add({
            severity: "success",
            summary: t("Успешно"),
            detail: t("Действие выполнено успешно"),
            life: 3000,
          });
        },
        onError: (error) => {
          const toast = app.config.globalProperties.$toast
          const t = app.config.globalProperties.$t

          toast.add({
            severity: "error",
            summary: t("Ошибка"),
            detail: `${t("Действие не выполнено, повторите позже")}: ${error.message}`,
            life: 3000,
          });
        },
      },
    },
  });
  const options: VueQueryPluginOptions = { queryClient };

  app.use(VueQueryPlugin, options);
}
