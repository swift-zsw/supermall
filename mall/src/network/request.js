import axios from 'axios'

export function request(config){
    //1、创建axios的实例
    const instance1 = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2、axios的拦截器
    instance1.interceptors.request.use(config=>{
        //2.1请求拦截的作用
        //1、比如config中的一些信息不符合服务器的要求
        //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标，等到请求成功的时候再
        //在响应成功那边把图标隐藏起来
        //3、某些网络请求（比如登录（token）），必须携带一些特殊的信息。如果这次请求没有携带这个信息，
        //就要提示用户登录，把这次请求拦截，然后跳转到某个地方，让用户先登录

        // console.log(config)
        //拦截完要return出去
        return config
    },err=>{
        console.log(err)
    })
    instance1.interceptors.response.use(res=>{
        //console.log(res)
        return res.data
    },err=>{
        console.log(err)
    })
    //3、发送真正的网络请求
    return instance1(config)//返回一个promise
}