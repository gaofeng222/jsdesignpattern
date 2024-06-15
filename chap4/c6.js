//demo1 类式继承

function addEvent(el, type, fn) {
  var addEvent;
  if (window.addEventListener) {
    addEvent = el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    addEvent = el.attachEvent("on" + type, fn);
  }
  return addEvent;
}

function EditInPlaceField(id, parent, value) {
  this.id = id;
  this.value = value;
  this.parentElement = parent;
  //初始化
  this.createElement(this.id);
  this.attachEvents();
}

EditInPlaceField.prototype = {
  createElement: function (id) {
    this.containerElement = document.createElement("div");
    this.parentElement.appendChild(this.containerElement);

    this.staticElement = document.createElement("span");
    this.containerElement.appendChild(this.staticElement);
    this.staticElement.innerHTML = this.value;

    this.fieldElement = document.createElement("input");
    this.fieldElement.type = "text";
    this.fieldElement.value = this.value;
    this.containerElement.appendChild(this.fieldElement);

    //创建一个提交button
    this.submitButtonElement = document.createElement("input");
    this.submitButtonElement.type = "button";
    this.submitButtonElement.value = "OK";
    this.containerElement.appendChild(this.submitButtonElement);

    //创建一个取消按钮
    this.cancelButtonElement = document.createElement("input");
    this.cancelButtonElement.type = "button";
    this.cancelButtonElement.value = "Cancel";
    this.containerElement.appendChild(this.cancelButtonElement);

    //设置控件的显示隐藏
    this.convertToText();
  },
  //绑定事件
  attachEvents() {
    addEvent(this.submitButtonElement, "click", this.saveEdit.bind(this));
    addEvent(this.staticElement, "click", this.convertToEditable.bind(this));
    addEvent(this.cancelButtonElement, "click", this.cancelEdit.bind(this));
  },
  cancelEdit() {},
  convertToText() {
    this.fieldElement.style.display = "none";
    this.staticElement.style.display = "inline";
    this.cancelButtonElement.style.display = "none";
    this.submitButtonElement.style.display = "none";
  },
  convertToEditable() {
    this.fieldElement.style.display = "inline";
    this.staticElement.style.display = "none";
    this.cancelButtonElement.style.display = "inline";
    this.submitButtonElement.style.display = "inline";
    this.setValue(this.value);
  },
  saveEdit() {
    this.value = this.getValue();
    this.staticElement.innerHTML = this.value;
    this.convertToText();
    // 发送数据请求ajax

    console.log(`${this.id} : ${this.value}`);
  },
  cancelEdit() {
    this.convertToText();
  },
  getValue() {
    return this.fieldElement.value;
  },
  setValue(value) {
    this.fieldElement.value = value;
    this.staticElement.innerHTML = value;
  },
};

var titleClassical = new EditInPlaceField(
  "title",
  document.getElementById("doc"),
  "This is a title"
);
const value = titleClassical.getValue();
console.log("🚀 ~ value:", value);

//实现继承
function extend(subClass, superClass) {
  var F = function () {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superClass = superClass.prototype;

  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

function EditInPlaceArea(id, parent, value) {
  EditInPlaceArea.superClass.constructor.call(this, id, parent, value);
}

extend(EditInPlaceArea, EditInPlaceField);

//复写父类的方法
EditInPlaceArea.prototype.createElement = function (id) {
  this.containerElement = document.createElement("div");
  this.parentElement.appendChild(this.containerElement);

  this.staticElement = document.createElement("span");
  this.staticElement.innerHTML = this.value;
  this.containerElement.appendChild(this.staticElement);

  this.fieldElement = document.createElement("textarea");
  this.fieldElement.rows = 5;
  this.fieldElement.cols = 20;
  this.fieldElement.value = this.value;
  this.containerElement.appendChild(this.fieldElement);

  //提交按钮
  this.submitButtonElement = document.createElement("input");
  this.submitButtonElement.type = "button";
  this.submitButtonElement.value = "OK";
  this.containerElement.appendChild(this.submitButtonElement);

  //取消按钮
  this.cancelButtonElement = document.createElement("input");
  this.cancelButtonElement.type = "button";
  this.cancelButtonElement.value = "Cancel";
  this.containerElement.appendChild(this.cancelButtonElement);
  this.convertToText();
};

const 编辑文本 = new EditInPlaceArea(
  "textarea",
  document.getElementById("doc"),
  "This is a textarea"
);
