function $() {
  let elements = [];
  for (let i = 0, len = arguments.length; i < len; i++) {
    element = arguments[i];
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (arguments.length === 1) {
      return element;
    }
    elements.push(element);
  }
  return elements;
}

const demo1 = $("#box1", "#box2");

console.log(demo1);
