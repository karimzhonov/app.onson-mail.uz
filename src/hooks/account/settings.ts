import {Languages, MessageCircleMore} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";
import { locales } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";


export const useSettings = (): MenuData[] => {
    const {locale, t} = useI18n()

    return [
        {
            label: t('Основные настройки'),
            items: [
                {
                    label: t('Язык'),
                    icon: Languages,
                    value: locales[locale.value].name,
                    link: '/account/languages',
                    chevron: true
                },
            ]
        },
        {
            items: [
                {
                    label: t('Обратиться в поддержку'),
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
                    label: t('Пользовательское соглашение'),
                    link: '#',
                },
                {
                    label: t('Политика конфиденциальности'),
                    link: '#',
                }
            ]
        }
    ]
}