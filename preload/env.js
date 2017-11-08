/**
 * Created by devo on 10/25/2017.
 */
import load from 'src-loader'
import extend from 'extend'
let env = load('env.json')

const loadEnv = async (ctx) => {
    AppLogger.info('    [ENV] Loading ENV...')
    let remoteEnv = {}
    extend(true, remoteEnv, env)
    env = remoteEnv
    ENV = extend(true, ENV, env)
    AppLogger.info('    [ENV] ENV loaded...')
}

export default loadEnv
