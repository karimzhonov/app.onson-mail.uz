import {Home, Truck, PlaneTakeoff, ShoppingCart, User, type LucideIcon} from "lucide-vue-next";

interface BottomMenu {
    label: string;
    icon: LucideIcon;
    link: string;
}

export const bottomMenu: BottomMenu[] = [
    {
        label: "Главная",
        icon: Home,
        link: '/'
    },
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
    {
        label: "Профиль",
        icon: User,
        link: '/account'
    }
]