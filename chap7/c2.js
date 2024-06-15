//简单工厂模式
var BicycleShop = function () {};
var BicycleFactory = {
  sellBicycle(mode) {
    var bike;
    switch (mode) {
      case "road":
        bike = new RoadBicycle();
        break;
      case "mountain":
        bike = new MountainBicycle();
        break;
      default:
        bike = new RoadBicycle();
    }
    return bike;
  },
};
BicycleShop.prototype = {
  sellBicycle(mode) {
    var bike = BicycleFactory.sellBicycle(mode);
    return bike;
  },
};

function RoadBicycle() {
  this.numOfGears = 18;
  this.numOfWheels = 2;
}
RoadBicycle.prototype.getNumOfGears = function () {
  return this.numOfGears;
};
function MountainBicycle() {}
