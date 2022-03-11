let values = [1, 2, 5, 10, 19]
values.reverse() //倒序
console.log(values.toString())
values.sort() //数组正向排序
console.log(values.toString())

function compare(value1, value2) {
  //定义比较规则的函数
  return value1 - value2 //返回值三种可能，0，大于0，小于0
}
values.sort(compare) //使用比较规则
console.log(values.toString())
