import Axios from 'axios'

export const Get = (url, params) => {
    return new Promise((resolve, reject) => {
        const data = new URLSearchParams(params)
        Axios.get(`${url}?${data}`)
            .then(result => { resolve(result.data) })
            .catch(err => {
                console.error(err)
                reject('Server timeout!')
            })
    })
}

export const Post = (url, body) => {
    return new Promise((resolve, reject) => {
        Axios.post(url, body)
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                console.error(err)
                reject('Server timeout!')
            })
    })
}

export const Put = (url, body) => {
    return new Promise((resolve, reject) => {
        Axios.put(url, body)
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                console.error(err)
                reject('Server timeout!')
            })
    })
}

export const Delete = (url, body) => {
    return new Promise((resolve, reject) => {
        Axios.delete(url, {}, body)
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                console.error(err)
                reject('Server timeout!')
            })
    })
}