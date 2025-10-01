import { useStorage } from "@vueuse/core";

export const passport = useStorage<boolean>('passport_biometric', () => false)