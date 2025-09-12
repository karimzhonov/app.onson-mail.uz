import {Languages, MessageCircleMore} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";


export const useSettings = (): MenuData[] => {
    return [
        {
            label: 'Основные настройки',
            items: [
                {
                    label: 'Язык',
                    icon: Languages,
                    value: 'Русский',
                    link: '#',
                    chevron: true
                },
            ]
        },
        {
            items: [
                {
                    label: 'Обратиться в поддержку',
                    icon: MessageCircleMore,
                    link: '#',
                    tag: 'soon',
                    chevron: true,
                }
            ]
        },
        {
            items: [
                {
                    label: 'Пользовательское соглашение',
                    link: '#',
                },
                {
                    label: 'Политика конфиденциальности',
                    link: '#',
                }
            ]
        }
    ]
}