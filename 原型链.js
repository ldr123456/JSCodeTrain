// 定义一个构造函数
function Animal(name) {
  this.name = name;
}

// 为构造函数的原型添加方法
Animal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
};

// 创建一个实例对象
const animal1 = new Animal('Cat');

// 输出实例对象的属性和方法
console.log(animal1.name); // 输出：Cat
animal1.sleep(); // 输出：Cat is sleeping.

// 检查对象的原型
console.log(Object.getPrototypeOf(animal1) === Animal.prototype); // 输出：true

// 检查构造函数的原型
console.log(Animal.prototype); // 输出：Animal { sleep: [Function] }

// 检查原型链
console.log(animal1.__proto__ === Animal.prototype); // 输出：true
console.log(Animal.prototype.__proto__ === Object.prototype); // 输出：true
console.log(Object.prototype.__proto__ === null); // 输出：true

// 创建另一个构造函数
function Dog(name, breed) {
  Animal.call(this, name); // 调用父类构造函数，继承父类属性
  this.breed = breed;
}

// 设置 Dog 的原型为 Animal 的实例，实现继承
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // 修复 constructor 指向

// 为 Dog 的原型添加方法
Dog.prototype.bark = function() {
  console.log(`${this.name} is barking.`);
};

// 创建一个 Dog 实例
const dog1 = new Dog('Buddy', 'Golden Retriever');

// 输出 Dog 实例的属性和方法
console.log(dog1.name); // 输出：Buddy
console.log(dog1.breed); // 输出：Golden Retriever
dog1.sleep(); // 输出：Buddy is sleeping.
dog1.bark(); // 输出：Buddy is barking.

// 检查 Dog 对象的原型
console.log(Object.getPrototypeOf(dog1) === Dog.prototype); // 输出：true

// 检查 Dog 构造函数的原型
console.log(Dog.prototype); // 输出：Dog { constructor: [Function: Dog], bark: [Function] }

// 检查 Dog 的原型链
console.log(dog1.__proto__ === Dog.prototype); // 输出：true
console.log(Dog.prototype.__proto__ === Animal.prototype); // 输出：true
console.log(Animal.prototype.__proto__ === Object.prototype); // 输出：true
console.log(Object.prototype.__proto__ === null); // 输出：true

// 检查 instanceof 操作符
console.log(dog1 instanceof Dog); // 输出：true
console.log(dog1 instanceof Animal); // 输出：true
console.log(dog1 instanceof Object); // 输出：true

// 问题：请解释原型链是什么？
// 回答：原型链是 JavaScript 中对象之间继承关系的一种表现形式。每个对象都有一个指向其原型的链接，而原型本身也是一个对象，因此形成了一条链式结构，称为原型链。

// 问题：如何实现继承？
// 回答：JavaScript 中可以通过原型链来实现继承。子类的原型指向父类的实例，从而继承了父类的属性和方法。同时，子类可以在其原型上添加新的方法，实现功能扩展。

// 问题：什么是原型继承和经典继承的区别？
// 回答：原型继承是 JavaScript 中的一种特殊继承方式，它是基于原型链的，子类的原型直接指向父类的实例。而经典继承（如基于类的继承）是在其他编程语言中常见的一种继承方式，它是基于类和对象的，通过类的继承来实现子类对父类的继承。
