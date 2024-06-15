// 原型式继承与类式继承不一样，忘记类和实例的关系，只从对象的角度思考

// 对象字面量，即原型对象
var Person = {
  name: "张三",
  getName() {
    return this.name;
  },
};

function clone(object) {
  function F() {}
  F.prototype = object;
  //返回的是一个以给定对象为原型的空对象
  return new F();
}

var reader = clone(Person);
reader.books = ["JavaScript设计模式", "JavaScript权威指南"];
console.log("🚀 ~ reader:", reader);
console.log("🚀 ~ reader:", reader.getName());
reader.name = "李四";
console.log("🚀 ~ reader:", reader);
console.log("🚀 ~ reader:", reader.getName());

var authorClone = clone(reader);
console.log("🚀 ~ authorClone:", authorClone.name);
authorClone.name = "王五";
console.log("🚀 ~ authorClone:", authorClone.name);
authorClone.books.push("JavaScript高级程序设计");
console.log("🚀 ~ authorClone:", authorClone.books);
authorClone.books = [];
authorClone.books.push("css权威指南");
console.log("🚀 ~ authorClone:", authorClone.books);
