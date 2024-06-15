var computedObject = {
  string1: "default value",
  childObject: {
    bool: true,
    num: 10,
  },
};
function clone(object) {
  function F() {}
  F.prototype = object;
  //返回的是一个以给定对象为原型的空对象
  return new F();
}

var computedObjectClone = clone(computedObject);
//bad
computedObjectClone.childObject.num = 100;

//better 但是这个方法必须知道源对象的结构，还有默认属性值，与源对象紧耦合了
computedObjectCloned.childObject = {
  bool: true,
  num: 100,
};

//best approach

var computedObject1 = {};
computedObject1.string1 = "default value";

computedObject1.createChildObject = function () {
  return {
    bool: true,
    num: 10,
  };
};
computedObject1.childObject = computedObject1.createChildObject();
var computedObjectCloned1 = clone(computedObject1);
computedObjectCloned1.childObject = computedObject1.createChildObject();
computedObjectCloned1.childObject.num = 300;

//这个方法适合用来做vue/react项目里面的数据重置
