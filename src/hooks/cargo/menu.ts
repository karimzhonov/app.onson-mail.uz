import {Box, IdCard} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";
import { useI18n } from "vue-i18n";


export const useMenu = (): MenuData[] => {
    const {t} = useI18n()
    return [
        {
            items: [
                {
                    label: t('Паспорта'),
                    icon: IdCard,
                    link: '/cargo/passport',
                    badge: 2,
                    chevron: true,
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
