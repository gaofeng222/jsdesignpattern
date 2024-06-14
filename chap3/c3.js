var Book = (function () {
  var numOgBooks = 0;
  function checkIsbn(isbn) {
    if (typeof isbn !== "string") return false;
    return true;
  }

  return function (newIsbn, newTitle, newAuthor) {
    var title, isbn, author;
    this.getIsbn = function () {
      return isbn;
    };
    this.setIsbn = function (newIsbn) {
      if (!checkIsbn(newIsbn)) {
        throw new Error("ISBN must be a string");
      }
      isbn = newIsbn;
    };

    this.getTitle = function () {
      return title;
    };
    this.setTitle = function (newTitle) {
      title = newTitle || "Untitled";
    };

    this.getAuthor = function () {
      return author;
    };
    this.setAuthor = function (newAuthor) {
      author = newAuthor || "Anonymous";
    };

    numOgBooks++;
    if (numOgBooks > 4) {
      throw new Error("Too many books!");
    }

    //Constructor code
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
  };
})();

Book.convertToTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    console.log("🚀 ~ txt:", txt);
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

Book.prototype = {
  display() {
    console.log(this.getIsbn());
    console.log(Book.convertToTitleCase(this.getTitle()));
    console.log(this.getAuthor());
  },
};

//测试实例化次数限制
const test1 = new Book("1234567890", "Test Title 1", "Test Author 1");
const test2 = new Book("1234567890", "Test Title 2", "Test Author 2");
const test3 = new Book("1234567890", "Test Title 3", "Test Author 3");
const test4 = new Book("1234567890", "test title 4", "Test Author 4");
test4.display();
