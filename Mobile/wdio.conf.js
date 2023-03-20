const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.spec.js'
    ],

}