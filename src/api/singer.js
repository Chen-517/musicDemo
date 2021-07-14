import {request} from './http'

export function singerGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
