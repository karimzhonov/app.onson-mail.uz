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
    
    root.style.setProperty('--tg-safe-top', "70px")
}