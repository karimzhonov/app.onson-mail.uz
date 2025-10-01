import {LucideIcon} from "lucide-vue-next";
import { Ref } from "vue";

interface ItemData {
    label?: string
    icon?: LucideIcon
    link?: string
    value?: string | number
    badge?: string | number
    tag?: string
    chevron?: boolean
    toggle?: boolean
    toggleValue?: any
    command?: () => void
}

export interface MenuData extends ItemData {
    items: ItemData[]
}
