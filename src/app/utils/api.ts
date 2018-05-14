import axios, {  AxiosResponse } from 'axios';
import { switchMap, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { of } from 'rxjs/internal/observable/of';
import { message } from 'antd';
export const API_URL = process.env.API

const errorCodeMessage:any = {
	100001: '相关单据已被关联！',
	300001: '找不到相关数据!',
	3001: '库存不足！',
	3002: '供应商不存在',
	100003: '重复数据,请确认后重新输入',
	100002: '下游单据已审登，单据不可反登！'
}

const codeMessage:any = {
	// 200: '服务器成功返回请求的数据',
	// 201: '新建或修改数据成功。',
	// 202: '一个请求已经进入后台排队（异步任务）',
	// 204: '删除数据成功。',
	400: '错误请求,请求参数有误!',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '请求错误,未找到该资源',
	405: '请求方法未允许',
	406: '请求的格式不可得。',
	408: '请求超时',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器',
	502: '网关错误',
	501: '网络未实现',
	503: '服务不可用，服务器暂时过载或维护',
	504: '网关超时',
	505: 'http版本不支持该请求'
}

const showError = (error:any) => {
	const { code } = error
	const content = error.msg || errorCodeMessage[code]
	return message.error(content);
}

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 1000 * 60; // 请求超时


// 请求成功
const handleSuccess = (res: AxiosResponse<any>) => {
  return of(res.data);
}
// 请求失败
const handleError = (error:any): Observable<any> => {
  message.error(error.message,2);
  return of(error);
}

// get请求
export const get = (url:string, params = {}) => {
  return fromPromise(axios({
    method: "get",
    url,
    params,
  }))
    .pipe(
      switchMap((res:AxiosResponse<any>) => handleSuccess(res)),
      retry(3),
      catchError((error) => handleError(error))
    )
}


