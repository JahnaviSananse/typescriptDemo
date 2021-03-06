import request from './request';

export async function signup(req: object) {
  return request.authCall({
    url: '/login',
    method: 'POST',
    data: req,
  });
}

export async function login() {
  return request.authCall({
    url: '/login',
    method: 'GET',
  });
}

export async function postData(req: object) {
  return request.authCall({
    url: '/login',
    method: 'POST',
    data: req,
  });
}
