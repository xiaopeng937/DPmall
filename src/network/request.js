import axios from 'axios'  //导入axios

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        template: 5000
    })
    //导出
    return instance(config)
}