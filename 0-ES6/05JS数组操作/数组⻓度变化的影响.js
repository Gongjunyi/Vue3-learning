let players = ['curry', 'james', 'kobe']
//原始⻓度是3，将数组⻓度修改为2，相当于删除了末尾的⼀项。因此可以使⽤该属性完成数组末尾数据删除功能
players.length = 2
console.log(players[2]) //数组下标是2（第三项，0开始），打印结果是undefined
//如果，将数组的length设置⼤于当前数组的项⽬，新加的每⼀项也都是undefined

//超过数组⻓度赋值的影响
//let players = ['curry', 'james', 'kobe']
//players[7] = 'jordan'
//console.log(players.length)
//console.log(players[5])

//如何检测⼀个数组的类型
console.log(Array.isArray(players)) //推荐使用
console.log(players instanceof Array)

//数组转字符串
//创建带有三个初始化项的数组
//let players = ['curry', 'james', 'kobe']
console.log(players.toString()) //curry,james,kobe。默认使⽤逗号分隔
console.log(players.toLocaleString()) //curry,james,kobe
console.log(players.join('&')) //curry&james&kobe,如果想⾃定义分隔符号使⽤
