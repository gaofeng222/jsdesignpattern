// 继承相对于其他语言，js的继承要复杂的多，但是得益于语言的灵活性，既可以使用标准的基于类的继承，
//也可以使用更微妙一些的基于原型的继承。

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var render = new Person("render", 20);
const res = render.getName();
console.log("🚀 ~ res:", res);

function Author(name, book) {
  Person.call(this, name);
  this.book = book;
}
/**
 * 在使用new运算符时，系统为我们做了一系列的事情
 * 1. 创建一个空对象
 * 2. 将空对象的原型指向Author的prototype
 * 3. 将构造函数的作用域赋给新对象，这样this就指向了新对象
 * 4. 执行构造函数中的代码，为新对象添加属性
 * 5. 返回新对象
 */

Author.prototype = new Person();
Author.prototype.constructor = Author;
Author.prototype.getBook = function () {
  return this.book;
};
