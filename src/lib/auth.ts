function getHeaders(withAuth: Boolean, withMnemonic: Boolean, isTeam: Boolean = false): Headers {
    const headers = new Headers()

    headers.append('content-type', 'application/json; charset=utf-8')
    headers.append('internxt-version', '1.0.0')
    headers.append('internxt-client', 'x-cloud-web')

    if (isTeam) {
        if (withAuth) {
            headers.append('Authorization', `Bearer ${localStorage.getItem("xToken")}`)
        }

        if (withMnemonic) {
            headers.append('internxt-mnemonic', `${JSON.parse(localStorage.getItem("xTeam") || "{}").mnemonic}`)
        }
    } else {
        if (withAuth) {
            headers.append('Authorization', `Bearer ${localStorage.getItem("xToken")}`)
        }

        if (withMnemonic) {
            headers.append('internxt-mnemonic', `${localStorage.getItem("xMnemonic")}`)
        }
    }

    return headers;
}

export {
    getHeaders
}