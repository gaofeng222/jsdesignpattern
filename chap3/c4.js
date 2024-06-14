//常量

var Class = (function () {
  var UPPER_BOUND = 100;
  var ctor = function () {};
  ctor.getUpperBound = function () {
    return UPPER_BOUND;
  };
  return ctor;
})();

console.log(Class.getUpperBound()); //100

var Class1 = (function () {
  var CONSTANTS = {
    UPPER_BOUND: 100,
    LOWER_BOUND: 0,
  };
  var ctor = function () {};
  ctor.getUpperBound = function (name) {
    return CONSTANTS[name];
  };
  return ctor;
})();

console.log(Class1.getUpperBound("LOWER_BOUND")); //0
console.log(Class1.getUpperBound("UPPER_BOUND")); //100
