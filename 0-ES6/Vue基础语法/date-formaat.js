let getCurrentDate = function () {
  let dt = new Date()
  // 获取 年 月 日
  let y = dt.getFullYear()
  let m = (dt.getMonth() + 1).toString().padStart(2, '0')
  let d = dt.getDate().toString().padStart(2, '0')

  // 时分秒
  let hh = dt.getHours().toString().padStart(2, '0')
  let mm = dt.getMinutes().toString().padStart(2, '0')
  let ss = dt.getSeconds().toString().padStart(2, '0')

  let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  return formatStr
}

/* 
    ###
    getCurrentDate()  ---------------------  日期格式 ----> 2020-11-26 星期四 11:03:21
    ###
*/
// export function getCurrentDate() {
//   var myDate = new Date()

//   var year = myDate.getFullYear() //年

//   var month = myDate.getMonth() + 1 //月

//   var day = myDate.getDate() //日

//   var hour = myDate.getHours() //时

//   var min = myDate.getMinutes() //分

//   var seconds = myDate.getSeconds() //秒

//   var days = myDate.getDay()

//   switch (days) {
//     case 1:
//       days = '星期一'

//       break

//     case 2:
//       days = '星期二'

//       break

//     case 3:
//       days = '星期三'

//       break

//     case 4:
//       days = '星期四'

//       break

//     case 5:
//       days = '星期五'

//       break

//     case 6:
//       days = '星期六'

//       break

//     case 0:
//       days = '星期日'

//       break
//   }

//   var str =
//     year +
//     '-' +
//     zeroFill(month) +
//     '-' +
//     zeroFill(day) +
//     '  ' +
//     days +
//     ' ' +
//     zeroFill(hour) +
//     ':' +
//     zeroFill(min) +
//     ':' +
//     zeroFill(seconds)

//   return str
// }

// function zeroFill(num) {
//   return Number(num) < 10 ? '0' + num : num
// }
