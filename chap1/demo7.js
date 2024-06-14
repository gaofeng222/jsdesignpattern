function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  constructor: Person,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  },
};
// 对象的易变性

var person = new Person("Bill", 20);
var person2 = new Person("Tom", 30);
console.log(person === person2); //false

Person.prototype.greeting = function () {
  return "Hello, my name is " + this.name;
};

person.displayGreetings = function () {
  return this.greeting();
};

const res = person.displayGreetings(); //Hello, my name is Bill
console.log("🚀 ~ res:", res);

// 内省与反射
// 可以在运行时检查对象所具有的属性和方法
// 还可以使用这种信息动态实例化类和执行其方法，甚至不需要在开发时知道他们的名字

// 设计模式的概念
// 面向对象编程的三大支柱：继承、封装和多态
// 继承：子类继承父类的属性和方法，子类可以重写父类的方法
// 封装：将数据和方法包装到对象中，对外提供访问接口
// 多态：一个接口多种实现
// 1995年，GoF合作出版了一本名为《设计模式》的图书，该书详细介绍了23种设计模式
// 这本书整理记录了对象之间相互作用的各种方式，并给出了每种模式的使用场景，并针对不同类型
//的对象创造了一套通用术语。用以创建这些不同类型的对象的套路就被称为设计模式

// js中使用设计模式的主要原因有以下3点
// 1.可维护性。模块解耦
// 2.沟通。
// 3.性能

// 缺点
// 复杂性
// 性能
