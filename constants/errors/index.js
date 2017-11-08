import load from 'src-loader'

const errors = {
    HTTP: load('constants/errors/http'), // xxx
    AUTHENTICATION: load('constants/errors/authentication'), // 1xxx
    // "AUTHORIZATION":load('constants/errors/authorization'), //2xxx
    USER: load('constants/errors/user'), // 4xxx,
    USERPROFILE: load('constants/errors/user'), // 5xxx,
    SERVICES: load('constants/errors/authentication'), // 10xxx
    DEPENDENCY: load('constants/errors/authentication') // 99xxx
}

export default errors
