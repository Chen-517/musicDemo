import {request} from './http'

export function newMusicGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
export function NewDiscGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
