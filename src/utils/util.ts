interface FindOneArr<T> {
  value: T;
  [propName: string]: any;
}
export function findOne<V, T extends FindOneArr<V>>(arr: T[], value: V): T|undefined {
  return arr.find(item => item.value === value);
}


export function getBaseURL(): string {
  if (/127|localhost/.test(window.location.host)) {
    return 'http://127.0.0.1:9090';
  } else {
    return window.location.host + '/api/';
  }
}
