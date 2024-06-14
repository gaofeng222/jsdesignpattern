/**
 * 
封装是面向对象的基石
 
封装与信息隐藏，信息隐藏是目的，封装是手段，是达到这个目的的技术

 js中创建对象的基本模式有三种，

 门户大开型，也是最简单的一种
 
 第二种做法对第一种做了改进，使用下划线来表示方法或属性的私有性

 使用闭包来创建真正的私用成员，这些成员只能通过特权方法来访问

 * 
 */

//门户大开型的对象设计

var Book = function (isbn, title, author) {
  if (!this.checkIsbn(isb)) {
    throw new Error("Book Constructor isbn is required");
  }
  this.isbn = isbn;
  this.title = title || "No Title";
  this.author = author || "No Author";
};

Book.prototype = {
  checkIsbn(isbn) {
    if (isbn == undefined || typeof isbn != "string") {
      return false;
    }
    isbn = isbn.replace(/[\s\-]/g, "");
    if (isbn.length != 13 && isbn.length != 10) {
      return false;
    }

    return true;

    //一系列对isbn的校验
  },
};

// var theHobbit = new Book(); Book Constructor isbn is required
// theHobbit.display();

var theHobbit = new Book("0-123-987653-4", "the hobbit", "J.R.R. ROSE");
theHobbit.display();
