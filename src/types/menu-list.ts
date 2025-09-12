import {LucideIcon} from "lucide-vue-next";

interface ItemData {
    label?: string
    icon?: LucideIcon
    link?: string
    value?: string | number
    badge?: string | number
    tag?: string
    chevron?: boolean
}

export interface MenuData extends ItemData {
    items: ItemData[]
}
