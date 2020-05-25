export function debounce(fun, time=200) {
  //防抖
  let Time = null
  return function (...args) {
    //Time不为null  清空Time
    if(Time){clearTimeout(Time)} 
    Time = setTimeout(() => {
      fun.apply(this, args)
    },time)
  }
}
//时间格式化
export function formatDate(date, fmt) {
  //获取年份
  //y+ => 一个或者多个
  //y* => 零个或者多个
  // y? => 0个或者1个
  if (/(y+)/.test(fmt)) {
    // substr 截取
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
//不足两位数时补齐两位  04:04:04
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}