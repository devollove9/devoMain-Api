/**
 * Created by devo on 10/24/2017.
 */
import co from 'co'
import logger from './logger'
import preload from './preload'
import src from './src'
import server from './server'

global.ENV = {}

// Main Flow
co(async function () {
    // let context = {};

    // Logger
    await logger(global)

    // Load preload functions & variables
    await preload(global)

    // Load app source
    await src(global)

    // Load app server
    let app = server(global)

    // Start app
    app.listen(ENV.SERVER_PORT)
}).catch(function (err) {
    console.error(err)
    console.error(err.stack || '')
    // NR.noticeError(err);
})
