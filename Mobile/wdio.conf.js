const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    // user: "gabrielroquim_j2H5F4",
    // key: "ZV6tSgzyw2ytsxvpUyRF",
    // services: ['appium'],
    //services: ['browsertack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            "platformName": "Android",
            "platformVersion": "12.0",
            "deviceName": "EBAC-SHOP",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/lojaebac.apk'),
            "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"

        }],

    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,
            videoSlowdownMultiplier: 50,
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
        driver.takeScreenshot();

    }
}