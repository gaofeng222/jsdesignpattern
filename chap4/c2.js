//extend 函数

function extend(subClass, superClass) {
  var F = function () {};
  F.prototype = superClass.prototype;
  // 重新定义构造函数指向自己
  subClass.prototype.constructor = subClass;
  subClass.prototype = new F();
}

// 定义父类
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
// 定义子类
function Student(name, score) {
  // 继承父类所有的实例属性
  Person.call(this, name);
  this.score = score;
}
//继承父类所有的原型上的方法
extend(Student, Person);
var student = new Student("Tom", 100);
console.log(student.getName()); // Tom

//改进版本，不用在子类的构造中引入父类的回调

function extend1(subClass, superClass) {
  var F = function () {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superClass = superClass.prototype;

  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

function Author1(name, book) {
  Author1.superClass.constructor.call(this, name);
  this.book = book;
}

extend1(Author1, Person);

Author1.prototype.getBook = function () {
  return this.book;
};
Author1.prototype.getName = function () {
  const name = Author1.superClass.getName.call(this);
  return name + " is a book author";
};

const test1 = new Author1("Tom222222", "JavaScript");
console.log(test1.getName()); // Tom is a book author
