import WebApp from '@twa-dev/sdk'

export function useTelegram() {
    const tg = WebApp

    const init = () => {
        tg.ready()
        tg.expand()
    }

    return {
        tg,
        init,
        isFullscreen: tg.isFullscreen,
        platform: tg.platform,
        version: tg.version,
        close: tg.close,
        expand: tg.expand,
    }
}

export const useTelegramUser = () => {
    const tg = WebApp
    const initData = tg.initDataUnsafe
    return {
        id: initData.user?.id || '1',
        username: initData.user?.username ?? 'testuser',
        first_name: initData.user?.first_name ?? 'First',
        last_name: initData.user?.last_name ?? 'Last',
        photo_url: initData.user?.photo_url ?? '/logo.png',
    }
}

export const isTMA = () => {
    return WebApp.platform !== 'unknown'
}