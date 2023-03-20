const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "12.0",
        "deviceName": "ebac",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/lojaebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'

        // 'app': 'bs://007e11c759fd16b0a2085e604ef65d16ff58ece4',
        // 'device': 'Samsung Galaxy Note 20',
        // 'os_version': '10.0',
        // 'project': 'Meu primeiro Device Farm',
        // 'build': 'browserstack-build-1',
        // 'name': 'teste_ebac'

    }],

}