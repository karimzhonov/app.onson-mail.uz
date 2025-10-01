import WebApp from '@twa-dev/sdk'


export default () => {
    WebApp.ready()
    WebApp.BiometricManager.init()
    if (!WebApp.isFullscreen && ['android', 'android_x', 'ios'].includes(WebApp.platform)) {
        try {
            WebApp.requestFullscreen()
        } catch {
            WebApp.expand()
        }
    }
    WebApp.enableClosingConfirmation()
}