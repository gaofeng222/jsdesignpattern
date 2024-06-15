//封装单体模式

const SingtoneObject = (function () {
  let instance;
  const Book = function (name, price) {
    this.name = name;
    this.price = price;
    this.author = [];
  };
  Book.prototype = {
    getName() {
      return this.name;
    },
    getPrice() {
      return this.price;
    },
    getAuthor() {
      return this.author;
    },
  };

  return {
    getInstance(name, price) {
      if (!instance) {
        instance = new Book(name, price);
        return instance;
      } else {
        return instance;
      }
    },
  };
})();

const demo1 = SingtoneObject.getInstance("西游记", 10);
demo1.author.push("吴承恩");
console.log(demo1.getName());
console.log(demo1.getAuthor());

const demo2 = SingtoneObject.getInstance("红楼梦", 10);
demo2.author.push("曹雪芹");
console.log(demo2.getName());
console.log(demo2.getAuthor());
