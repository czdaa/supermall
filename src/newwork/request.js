//网络请求的封装

import axios from "axios";

export function request(config) {
  const instance = axios.create({
    //创建axios实例对象
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 2000,
  });

  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config); //发送网络请求并返回一个promise对象
}


// request({
//   url: "/home/multidata",
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })