import {Box, IdCard} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";


export const useMenu = (): MenuData[] => {
    return [
        {
            items: [
                {
                    label: 'Паспорта',
                    icon: IdCard,
                    link: '/cargo/passport',
                    badge: 2,
                    chevron: true,
                },
                {
                    label: 'Заказы',
                    icon: Box,
                    link: '/cargo/order',
                    badge: 4,
                    tag: 'new',
                    chevron: true,
                }
            ]
        }]
    }
