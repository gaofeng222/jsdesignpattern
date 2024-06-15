//最简单的单例模式就是一个对象

/*basic singleton*/
var Singleton = {
  name: "张三",
  age: 20,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  },
};

// 严格来说ta又不是单例模式，因为每次调用Singleton都会创建一个新的对象，这个不能实例化
let MyNamspace = (function () {
  let instance;
  const constructor = function () {
    var name = "张三";
    var age = 20;

    function getName() {
      return name;
    }
    function getAge() {
      return age;
    }
    return {
      sex: "male",
      address: "北京",
      getSex() {
        return this.sex;
      },
      getAddress() {
        return this.address;
      },
    };
  };

  return {
    getInstance() {
      if (!instance) {
        instance = constructor();
        return instance;
      }else {
        return instance;
      }
    },
  };
})();

MyNamspace.getInstance().getSex();

/**
 * 真正的单例模式
 */
var Singleton = (function () {
  let instance;
  const constructor = function () {
    var name = "张三";
    var age = 20;

    function getName() {
      return name;
    }
    function getAge() {
      return age;
    }
    return {
      sex: "male",
      address: "北京",
      getSex() {
        return this.sex;
      },
      getAddress() {
        return this.address;
      },
    };
  };

  return {
    getInstance() {
      if (!instance) {
        instance = constructor();
        return instance;
      } else {
        return instance;
      }
    },
  };
}()



