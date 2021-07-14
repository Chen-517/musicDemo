import {request} from "./http"


export function listGet(url, params) {
    return request({
        url,
        method: "get",  //请求方式
        params
    })
}

export function ListGetId(url, params) {
    return request({
        url,
        method: "get",  //请求方式
        params
    })
}

export function DetailSongGet(url, params) {
    return request({
        url,
        method: "get",  //请求方式
        params
    })
}
