import request from '../util/request'

export function login(data) {
  return request({
    url: '/users',
    method: 'post',
    data: data
  })
}