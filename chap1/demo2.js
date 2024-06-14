//面向过程的写法
function startAnimation() {}
function stopAnimation() {}

//面向对象的写法
var Anim = function () {};

Anim.prototype = {
  start: function () {},
  stop: function () {},
};
const myAnim = new Anim();

myAnim.start();
myAnim.stop();
