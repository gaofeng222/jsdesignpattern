Function.prototype.method = function (name, fn) {
  this.prototype[name] = fn;
  return this;
};

const Anim = function (name) {
  this.name = name;
};

Anim.method("play", function () {
  console.log("play 222" + this.name);
})
  .method("start", function () {
    console.log("start 2222");
  })
  .method("stop", function () {
    console.log("stop 2222");
  });

const anim = new Anim("dog");
anim.play(); // play dog
anim.stop(); // stop
anim.start(); // start

// 原始类型的数据按值传递，引用类型的数据按引用传递
// 函数也是对象，所以可以作为参数传递
// 函数是一等对象
