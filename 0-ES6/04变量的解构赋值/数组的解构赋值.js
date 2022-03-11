//等号左侧赋值变量数组和等号右侧被解构的数组，能够在模式上正确匹配
式上正确匹配
let [player1, player2, player3] = ['curry', 'james', 'kobe']
console.log(player2)
//规则模式匹配，嵌套数组解构赋值
let [player4, player5, player6] = ['curry', 'james', 'kobe']
console.log(player5)
//非规则模式匹配，嵌套数组解构赋值
let [player7, [[player8], player9]] = ['curry', [['james', 'emm'], 'kobe']]
console.log(player7)
console.log(player8)
console.log(player9)
//数组解构数组赋值
let [player10, ...other] = ['curry', 'james', 'kobe']
console.log(player10)
console.log(other)
//数组解构，默认值设置
let [player11, player12 = 'me'] = ['curry']
console.log(player11)
console.log(player12)
