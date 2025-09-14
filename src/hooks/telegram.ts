import WebApp from '@twa-dev/sdk'

export function useTelegram() {
    const tg = WebApp

    return {
        tg,
        isFullscreen: tg.isFullscreen,
        platform: tg.platform,
        version: tg.version,
        close: tg.close,
        expand: tg.expand,
    }
}

const fakeInitData = 'query_id=AAHqff0mAAAAAOp9_Sb3KDvs&user=%7B%22id%22%3A654147050%2C%22first_name%22%3A%22Khusniddin%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22khtkarimzhonov%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FF7kHI8wEZKsWU9KzqtVh69LYTeGWI-A-JZIRtH30WBg.svg%22%7D&auth_date=1757832498&signature=TIPco4UER610va7Dl5nZL6yNm5nVmhRtHwLR65Zzw0oytrG_tyyJErUQef6rZez97UaD8TTNQhiVarh_3sh1Ag&hash=475c2c97ea3d61d9711c3d3c2d246521b82af19a7ec066bf6e9110d449b79aaa'

export const useTelegramUser = () => {
    const tg = WebApp
    const initData = tg.initDataUnsafe
    return {
        id: initData.user?.id ?? '1',
        username: initData.user?.username ?? 'testuser',
        first_name: initData.user?.first_name ?? 'First',
        last_name: initData.user?.last_name ?? 'Last',
        photo_url: initData.user?.photo_url ?? '/logo.png',
        initData: tg.initData || fakeInitData,
    }
}

export const isTMA = () => {
    return WebApp.platform !== 'unknown'
}