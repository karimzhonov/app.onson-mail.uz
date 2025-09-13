import { useI18n } from "vue-i18n"


export const useNews = () => {
    const {t} = useI18n()
    return [
        {
            text: t('Пригласите друзей и получите подарок'),
            image: '/logo.png',
            link: '#',
            button: t('Пригласить')
        },
        {
            text: t('Ищите туры вместе с нами'),
            image: '/logo.png',
            link: '/tourism',
            button: t('Искать')
        }
    ]
}