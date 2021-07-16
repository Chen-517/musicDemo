import {request} from './http'

//获得歌曲地址
export function songAddress(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
//获得歌曲详细
export function songDetails(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
