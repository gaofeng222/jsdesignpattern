(function () {
  function _$(els) {
    this.elements = [];
    for (let i = 0, len = els.length; i < len; i++) {
      element = els[i];
      if (typeof element === "string") {
        element = document.querySelector(element);
      }
      if (els.length === 1) {
        return element;
      }
      this.elements.push(element);
    }
  }
  _$.prototype = {
    each(fn) {
      for (let i = 0, len = this.elements.length; i < len; i++) {
        fn.call(this, this.elements[i], i);
      }
      return this;
    },
    setStyle(prop, val) {
      this.each((el) => {
        el.style[prop] = val;
      });
      return this;
    },
    show() {
      const that = this;
      this.setStyle("display", "block");
      return this;
    },
    hide() {
      this.setStyle("display", "none");
      return this;
    },
    addEvent(type, fn) {
      const add = function (el) {
        if (window.addEventListener) {
          el.addEventListener(type, fn);
        } else if (window.attachEvent) {
          el.attachEvent("on" + type, fn);
        }
      };
      this.each((el) => {
        add(el);
      });
      return this;
    },
  };
  window.$ = function () {
    return new _$(arguments);
  };
})();

const demo1 = $("#box1", "#box2");
demo1
  .each((el, i) => {
    el.style.color = "red";
  })
  .setStyle("font-size", "20px")
  .hide()
  .show()
  .addEvent("click", () => {
    console.log("ok");
  });
