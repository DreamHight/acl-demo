import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/prose')
}
export async function add(reqData: any): Promise<any> {
  return request('/complaint/complaint-info/create', {
    method: 'POST',
    data: reqData,
  })
}
export async function query(reqData: any): Promise<any> {
  return request('/complaint/complaint-info/get', {
    method: 'POST',
    data: reqData,
  })
}

export async function getCaptcha(token: any): Promise<any> {
  return request(`/complaint/complaint-info/captcha?token=${token}`, {
    method: 'get',
  })
}
