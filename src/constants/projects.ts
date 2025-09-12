import {Truck, PlaneTakeoff, ShoppingCart, type LucideIcon} from "lucide-vue-next";

interface Projects {
    label: string;
    icon: LucideIcon;
    link: string;
}

export const projects: Projects[] = [
    {
        label: "Карго",
        icon: Truck,
        link: '/cargo'
    },
    {
        label: "Тиризм",
        icon: PlaneTakeoff,
        link: '/tourism'
    },
    {
        label: "Маркет",
        icon: ShoppingCart,
        link: '/market'
    },
]