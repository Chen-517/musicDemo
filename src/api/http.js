import axios from "axios"

export function request(config) {
    //封装axios 创建一个新的axios叫instance
    let instance = axios.create({
        baseURL: "/api", //模拟请求地址
        timeout: 5000
    })
// 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    return instance(config)
}

