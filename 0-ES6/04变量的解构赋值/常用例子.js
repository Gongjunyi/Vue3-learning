function add([{ name: name1, age: age1 }, { name: name2, age: age2 }]) {
  return age1 + age2
}
console.log(
  add([
    { name: 'james', age: 35 },
    { name: 'curry', age: 20 },
  ])
)

//利用变量解构进行，数据交换
let a = 2
let b = 3
;[a, b] = [b, a]
console.log(a + '----' + b)

//ES6的一种新数据类型map
let map1 = new Map()
map1.set('p1', 'curry')
map1.set('p2', 'james')
//遍历map数据结构的key和value
for (let [key, value] of map1) {
  console.log(`${key}----${value}`) //es6模板字符串
  console.log(key + '-----' + value) //相同效果
}
