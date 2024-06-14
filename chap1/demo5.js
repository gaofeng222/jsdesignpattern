// 匿名函数
(function () {
  var foo = 1;
  var bar = 2;
  console.log(foo + bar);
})();

// 立即执行函数
(function (foo, bar) {
  console.log(foo + bar);
})(10, 20);

const baz = (function (a, b) {
  return a * b;
})(10, 20);

console.log("🚀 ~ baz ~ baz:", baz);

var baz1;

(function () {
  var foo = 10;
  var bar = 20;
  baz1 = function () {
    return foo + bar;
  };
})();

const res = baz1();
const res2 = baz1();
console.log("🚀 ~ res:", res);
console.log("🚀 ~ res:", res2);
