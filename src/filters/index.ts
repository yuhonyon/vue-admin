export const parseDate = (date: any, fmt = 'yyyy-MM-dd HH:mm:ss'): string => {
  if (!date) {
    return date;
  }
  date = typeof date !== 'object' ? new Date(date) : date;
  const o: {[propName: string]: any} = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
  };
  const week: {[propName: string]: string} = {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'};
  if (/(y+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
}
  if (/(E+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1)
    ? (RegExp.$1.length > 2
      ? '星期'
      : '周')
    : '') + week[date.getDay() + '']);
}
  if (/(S+)/.test(fmt)) {
  const ms = date.getMilliseconds();
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
    ? (ms)
    : ((RegExp.$1.length === 2)
      ? (('00' + ms).substr(('' + ms).length))
      : (('000' + ms).substr(('' + ms).length))));
}
  for (const k in o) {
  if (new RegExp('(' + k + ')').test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
      ? (o[k])
      : (('00' + o[k]).substr(('' + o[k]).length)));
  }
}
  return fmt;
};


