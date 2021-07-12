import {request} from './http'
//这里是   内容区==>个性推荐

//get
export function getName(url, params) {
    return request({
        url,    //传入的请求地址
        method: "get",  //请求方式
        params //传给后端数据 如用户名和密码，这样与后端的数据库进行匹配，然后进过一系列操作返回给前端数据
    })
}

//post
export function getObj(url, params) {
    return request({
        url,
        method: "post",
        data: params
    })
}

export function getSlidePhoto(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}

export function recommendedPlayGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}


export function ExclusiveBroadcastGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
export function NewMusicDataGet(url, params) {
    return request({
        url,
        method: "get",
        params
    })
}
