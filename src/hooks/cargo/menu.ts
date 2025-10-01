import {Box, IdCard, MapPin} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";
import { useI18n } from "vue-i18n";
import { useTelegram } from "../telegram";
import { passport } from "@/composables/biometric";
import { useRouter } from "vue-router";


export const useMenu = (): MenuData[] => {
    const {t} = useI18n()
    const {BiometricManager} = useTelegram()
    const router = useRouter()
    return [
        {
            items: [
                {
                    label: t('Филиали'),
                    icon: MapPin,
                    link: '/cargo/filial',
                    chevron: true,
                },
                {
                    label: t('Паспорта'),
                    icon: IdCard,
                    badge: 2,
                    chevron: true,
                    command: () => {
                        if (!passport.value) {
                            return router.push('/cargo/passport')
                        }
                        BiometricManager.authenticate({ reason: "Подтвердите вход через биометрию" }, (isAuth) => {
                            if (isAuth) {
                                return router.push('/cargo/passport')
                            }
                        });
                    }
                },
                {
                    label: t('Заказы'),
                    icon: Box,
                    link: '/cargo/order',
                    badge: 4,
                    tag: 'new',
                    chevron: true,
                }
            ]
        }]
    }
