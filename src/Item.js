var Item = function (name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
};

var ItemWrapper = (function () {
  var maxQuality = 50, minQuality = 0;
  var hasReachedMaxQuality = function (item) {
    return item.quality >= maxQuality;
  };
  var hasReachedMinQuality = function (item) {
    return item.quality <= minQuality;
  };
  return function (item) {
    this.item = item;
    this.name = item.name;
    this.increaseQuality = function () {
      if (!hasReachedMaxQuality(item))
        item.quality++;
    };
    this.decreaseQuality = function () {
      if (!hasReachedMinQuality(item))
        item.quality--;
    };
  };
}());