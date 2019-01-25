import http from './http';

export const test = (params: any) => {
  return http.get('/', params);
};
