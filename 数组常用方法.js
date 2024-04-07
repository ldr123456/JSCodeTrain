/**
 * 增删改查
 */

// push 方法 向数组末尾添加一个或多个元素，并返回新数组的长度
let fruits = ['apple', 'banana'];
fruits.push('orange', 'pear');
console.log(fruits); // 输出: ["apple", "banana", "orange", "pear"]
console.log(fruits.length); // 输出: 4

// pop 方法 删除并返回数组最后一个元素
let numbers = [1, 2, 3, 4];
let lastNumber = numbers.pop();
console.log(numbers); // 输出: [1, 2, 3]
console.log(lastNumber); // 输出: 4

// shift 方法 删除并返回数组的第一个元素
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];
let firstDay = daysOfWeek.shift();
console.log(daysOfWeek); // 输出: ["Tuesday", "Wednesday"]
console.log(firstDay); // 输出: "Monday"

// unshift 方法 向数组开头添加一个或多个元素，并返回新数组的长度
let colors = ['red', 'green'];
colors.unshift('blue', 'yellow');
console.log(colors); // 输出: ["blue", "yellow", "red", "green"]
console.log(colors.length); // 输出: 4

// splice 方法 删除、替换或添加数组元素
let hobbies = ['reading', 'painting', 'gaming', 'cooking'];
hobbies.splice(2, 0, 'programming'); // 在索引2处插入'programming'
console.log(hobbies); // 输出: ["reading", "painting", "programming", "gaming", "cooking"]
hobbies.splice(1, 1); // 删除索引为1的一个元素
console.log(hobbies); // 输出: ["reading", "programming", "gaming", "cooking"]

// indexOf/lastIndexOf 方法 返回给定元素在数组中首次出现/最后一次出现的索引，如果不存在则返回-1
let letters = ['a', 'b', 'c', 'a', 'd'];
console.log(letters.indexOf('a')); // 输出: 0
console.log(letters.lastIndexOf('a')); // 输出: 3
console.log(letters.indexOf('e')); // 输出: -1

// includes 方法 检查数组是否包含指定的元素，返回布尔值
let number = [1, 3, 5, 7, 9];
console.log(number.includes(3)); // 输出: true
console.log(number.includes(4)); // 输出: false

/**
 * 截取合并
 */

// slice 方法 提取数组的一部分并返回一个新的数组，原数组不变
let months = ['January', 'February', 'March', 'April', 'May'];
let springMonths = months.slice(2, 4);
console.log(springMonths); // 输出: ["March", "April"]
console.log(months); // 输出: ["January", "February", "March", "April", "May"]

// concat 方法 将两个或多个数组合并为一个新数组，原数组不变
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2, [7, 8, 9]);
console.log(mergedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array1); // 输出: [1, 2, 3]

/**
 * 变化
 */

// join 方法 将数组的所有元素连接成一个字符串，可指定分隔符
let names = ['Alice', 'Bob', 'Charlie'];
let joinedNames = names.join(', ');
console.log(joinedNames); // 输出: "Alice, Bob, Charlie"

/**
 * 遍历
 */

// forEach 方法 对数组中的每个元素执行一次提供的函数，原数组不变
let forEach = [1, 2, 3, 4, 5];
forEach.forEach(n => console.log(n));

// map 方法 对数组中的每个元素应用一个函数，返回新数组，原数组不变
let nums = [1, 2, 3, 4, 5];
let squaredNums = nums.map(n => n * n);
console.log(squaredNums); // 输出: [1, 4, 9, 16, 25]

// filter 方法 根据提供的函数测试条件，创建一个包含所有通过测试元素的新数组，原数组不变
let scores = [75, 90, 80, 95, 85];
let passingScores = scores.filter(score => score >= 80);
console.log(passingScores); // 输出: [90, 80, 95, 85]

// reduce 方法 对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值
let sum = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 输出: 15

/**
 * 排序
 */

// reverse 方法 反转数组中元素的顺序，即改变数组中原有的从头到尾的顺序，使其变为从尾到头的顺序
let fruit = ['apple', 'banana', 'orange', 'pear'];
fruit.reverse();
console.log(fruit); // 输出: ['pear', 'orange', 'banana', 'apple']

// sort 方法 对数组中的元素进行排序，默认按照字符串升序排序，可指定排序规则
let sort = [40, 100, 1, 5, 25, 10];
sort.sort();
console.log(sort); // 输出: [1, 10, 25, 40, 5, 100] （注意，数字被当作字符串进行排序）
sort.sort((a, b) => a - b); // 升序排列
console.log(sort); // 输出: [1, 5, 10, 25, 40, 100]
sort.sort((a, b) => b - a); // 降序排列
console.log(sort); // 输出: [100, 40, 25, 10, 5, 1]


