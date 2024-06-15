var BicycleShop = function () {};
BicycleShop.prototype = {
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

function RoadBicycle() {
  this.numOfGears = 18;
  this.numOfWheels = 2;
}
RoadBicycle.prototype.getNumOfGears = function () {
  return this.numOfGears;
};
function MountainBicycle() {}

const bikeShop = new BicycleShop();
const roadBike = bikeShop.sellBicycle("road");
const nums = roadBike.getNumOfGears();
console.log("🚀 ~ nums:", nums); //🚀 ~ nums: 18
