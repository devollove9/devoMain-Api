/**
 * Created by devo on 10/24/2017.
 */
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },

    env: {
        browser: true,
        node: true,
    },
    "globals": {
        "load": true,
        "ENV": true,
        "fs": true,
        "path": true,
        "AppLogger":true,
        "Logger": true,
        "appRoot": true,
        "models": true,
        "send": true,
        "redis": true,
        "services": true,
        "templates": true,
        "resources": true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // indent
        "indent": ["error", 4],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // alllow string prototypes
        "no-extend-native": 0
    }
}
