/**
 * Created by devo on 10/24/2017.
 */
const loader = (url) => {
    try {
        return require(url)
    } catch (e) {
        if (e.code === 'MODULE_NOT_FOUND') {
            return require(process.env.PWD + '/' + url)
        }
        throw e
    }
}

module.exports = loader
