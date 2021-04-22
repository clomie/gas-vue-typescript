export function loadGapi(name: string): Promise<any> {
    if (typeof gapi === 'undefined') {
        return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
        gapi.load(name, {
            callback() {
                resolve(true)
            },
            onerror() {
                reject(new Error(`${name} failed to load.`))
            },
            timeout: 10000,
            ontimeout() {
                reject(new Error(`${name} could not load in 10000ms.`))
            },
        })
    })
}
