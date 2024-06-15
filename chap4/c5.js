// 掺元

/* Mixin class */

var Mixin = function () {};

Mixin.prototype = {
  serialize() {
    var output = [];
    for (var prop in this) {
      if (!this.hasOwnProperty(prop)) continue;
      output.push(
        encodeURIComponent(prop) + "=" + encodeURIComponent(this[prop])
      );
    }
    return output.join("&");
  },
  isShow() {
    return true;
  },
};
/**
 * 构造函数，用于创建Author对象
 *
 * @param name 作者姓名
 * @param books 作者所著书籍列表
 * @returns 返回创建的Author对象
 */
function Author(name, books) {
  this.name = name;
  this.books = books;
}
Author.prototype = {
  getName() {
    return this.name;
  },
  getBooks() {
    return this.books;
  },
};

function agument(target, source) {
  for (var prop in source.prototype) {
    if (!target.prototype[prop]) {
      target.prototype[prop] = source.prototype[prop];
    }
  }
}

// agument(Author, Mixin);

// var author = new Author("aaa", ["JavaScript design mode"]);
// var serializeString = author.serialize();
// console.log("🚀 ~ serializeString:", serializeString);
// var isShow = author.isShow();
// console.log("🚀 ~ isShow:", isShow);

//改进版，扩展只需要的对象

function agumentPlus(target, source) {
  if (arguments[2]) {
    for (let index = 2; index < arguments.length; index++) {
      target.prototype[arguments[index]] = source.prototype[arguments[index]];
    }
  } else {
    for (var prop in source.prototype) {
      if (!target.prototype[prop]) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  }
}

agumentPlus(Author, Mixin, "isShow");
var author = new Author("aaa", ["JavaScript design mode"]);
// var serializeString = author.serialize();
// console.log("🚀 ~ serializeString:", serializeString);
var isShow = author.isShow();
console.log("🚀 ~ isShow:", isShow);
