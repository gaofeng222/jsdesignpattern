Function.prototype.method = function (name, fn) {
  this.prototype[name] = fn;
};

const Anim = function (name) {
  this.name = name;
};

Anim.method("play", function () {
  console.log("play " + this.name);
});

Anim.method("start", function () {
  console.log("start ");
});

Anim.method("stop", function () {
  console.log("stop ");
});

const anim = new Anim("dog");
anim.play(); // play dog
anim.stop(); // stop
anim.start(); // start
