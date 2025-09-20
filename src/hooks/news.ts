import { useI18n } from "vue-i18n"


export const useNews = () => {
    const {t} = useI18n()
    return [
        {
            text: t('Пригласите друзей и получите подарок'),
            image: '/news/invite.png',
            link: '/account/referral',
            imageClass: 'size-[70px]',
            button: t('Пригласить'),
            class: 'bg-linear-to-r from-cyan-500 to-blue-500'
        },
        {
            text: t('Ищите туры вместе с нами'),
            image: '/news/plane.webp',
            imageClass: 'size-[120px]',
            link: '/tourism',
            button: t('Искать'),
            class: 'bg-linear-to-r from-blue-500 to-indigo-300'
        }
    ]
}