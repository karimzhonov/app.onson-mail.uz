import WebApp from '@twa-dev/sdk'


export default () => {
    WebApp.ready()
    if (!WebApp.isFullscreen && ['android', 'android_x', 'ios'].includes(WebApp.platform)) {
        try {
            WebApp.requestFullscreen()
        } catch {
            WebApp.expand()
        }
    }
    WebApp.enableClosingConfirmation()

    const root = document.documentElement
    console.log(WebApp.safeAreaInset.top);
    
    root.style.setProperty('--tg-safe-top', WebApp.safeAreaInset.top + 'px')
    root.style.setProperty('--tg-safe-bottom', WebApp.safeAreaInset.bottom + 'px')
}