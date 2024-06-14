var Book = function (newIsbn, newTitle, newAuthor) {
  var title, isbn, author;
  function checkIsbn(isbn) {
    if (typeof isbn !== "string") {
      throw new Error("ISBN must be a string");
    }
    return true;
  }
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

  //Constructor code
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
};

Book.prototype = {
  display() {
    console.log("Title: " + this.getTitle());
    console.log("Author: " + this.getAuthor());
    console.log("ISBN: " + this.getIsbn());
  },
};

const book = new Book("1234567890", "JavaScript Design Patterns", "GoF");

book.setTitle("JavaScript data structures and algorithms");
book.display();
