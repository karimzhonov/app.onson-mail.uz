import {Truck, PlaneTakeoff, ShoppingCart, type LucideIcon} from "lucide-vue-next";
import { useI18n } from "vue-i18n";


export const useProjects = () => {
    const {t} = useI18n()
    return  [
        {
            label: t("Карго"),
            icon: Truck,
            link: '/cargo'
        },
        {
            label: t("Тиризм"),
            icon: PlaneTakeoff,
            link: '/tourism'
        },
        {
            label: t("Маркет"),
            icon: ShoppingCart,
            link: '/market'
        },
    ]
}