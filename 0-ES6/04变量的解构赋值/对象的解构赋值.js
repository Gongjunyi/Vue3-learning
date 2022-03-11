let { age: age, name: name } = { name: 'james', age: 35 }
//对象的解构赋值，变量名对上就行，顺序不重要
//简写形式:let {age,name}={name:"james",age:35}
console.log(name + '----' + age)
//可以解构对象里面的属性，也可以解构对象的成员方法
//对象方法的解构
let { sqrt, sin, cos } = Math
console.log(sqrt(4))
