import {request} from "./http"

//get
export function classification(url, params) {
    return request({
        url,
        method: "get",  //请求方式
        params
    })
}

export function classificationList(url, params) {
    return request({
        url,
        method: "get",  //请求方式
        params
    })
}
