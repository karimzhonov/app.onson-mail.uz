import {Coins, Languages, Link, MessageCircleMore} from "lucide-vue-next";
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
                    label: t('Бонусные баллы'),
                    icon: Coins,
                    value: '10 $',
                    link: '/account/bonus',
                    chevron: true
                },
                {
                    label: t('Реферальная система'),
                    icon: Link,
                    link: '/account/link',
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