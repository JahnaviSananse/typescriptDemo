import request from './request';

export async function signup(req: object) {
  return request.authCall({
    url: '/login',
    method: 'POST',
    data: req,
  });
}