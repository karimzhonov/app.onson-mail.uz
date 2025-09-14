import { token } from "@/composables/token";
import { useApi } from "@/plugins/axios";
import { useMutation, useQuery } from "@tanstack/vue-query"


export const useAuth = () => {
    const api = useApi()

    return useMutation({
        mutationKey: ['auth'],
        mutationFn: async (data: any) => await api.post('/oauth/telegram/webapp/', data),
        onSuccess(response) {
            token.value = response.data
            return response.data
        },
    })
}