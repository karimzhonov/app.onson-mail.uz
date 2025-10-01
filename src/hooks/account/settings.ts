import {Coins, Languages, Link, MessageCircleMore, Fingerprint} from "lucide-vue-next";
import {MenuData} from "@/types/menu-list";
import { locales } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { passport } from "@/composables/biometric";
import { useTelegram } from "../telegram";


export const useSettings = (): MenuData[] => {
    const {locale, t} = useI18n()

    const {BiometricManager} = useTelegram()

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
                    label: t('Баланс'),
                    icon: Coins,
                    value: '10 $',
                    link: '/account/balance',
                    chevron: true
                },
                {
                    label: t('Реферальная система'),
                    icon: Link,
                    link: '/account/referral',
                    chevron: true
                },
            ]
        },
        {
            items: [
                {
                    label: t('Безопасность'),
                    icon: Fingerprint,
                    toggle: true,
                    toggleValue: passport,
                    command() {
                        if (BiometricManager.isAccessGranted) {
                            passport.value = !passport.value
                            return
                        }
                        BiometricManager.requestAccess({ reason: "Подтвердите доступ с помощью биометрии" }, (isAccess) => {
                            passport.value = isAccess
                        });
                    }
                }
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