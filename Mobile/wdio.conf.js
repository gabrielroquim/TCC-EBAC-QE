const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

exports.config = {
    hostname: 'localhost',
    port: 4753,
    path: '/wd/hub',
    services: ['appium'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    maxInstances: 1,
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "12.0",
        "deviceName": "ebac",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), ('./app/lojaebac.apk')),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        // "appPackage": "com.woocommerce.android",
        // "appActivity": ".ui.main.MainActivity",       
        // "automationName": "UiAutomator2",
        //   "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        //"appium:appPackage": "com.woocommerce.android",
        //"appWaitActivity": ".ui.login.LoginActivity"

        // 'app': 'bs://007e11c759fd16b0a2085e604ef65d16ff58ece4',
        // 'device': 'Samsung Galaxy Note 20',
        // 'os_version': '10.0',
        // 'project': 'Meu primeiro Device Farm',
        // 'build': 'browserstack-build-1',
        // 'name': 'teste_ebac'

    }],

    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        if (error) {
            driver.takeScreenshot()
        }
    }
}

}