//面向过程的写法
function startAnimation() {}
function stopAnimation() {}

//面向对象的写法
var Anim = function () {};

Anim.prototype.start = function () {
  console.log("start");
};

Anim.prototype.stop = function () {
  console.log("stop");
};
const myAnim = new Anim();

myAnim.start();
myAnim.stop();
