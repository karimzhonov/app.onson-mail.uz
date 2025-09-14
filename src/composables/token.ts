import { Token } from "@/types/account";
import { useStorage } from "@vueuse/core";

export const token = useStorage<Token>('token', () => ({ access: '', refresh: '' }))
