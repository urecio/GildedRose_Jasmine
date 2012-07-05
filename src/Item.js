var Item = function (name, sellIn, quality) {
  var maxQuality = 50, minQuality = 0;
  this.quality = quality;
  this.sellIn = sellIn;
  this.name = name;

  this.increaseQuality = function () {
    this.quality++;
  };
  this.decreaseQuality = function () {
    this.quality--;
  };
  this.hasReachedMaxQuality = function () {
    return this.quality >= maxQuality;
  };
  this.hasReachedMinQuality = function () {
    return this.quality <= minQuality;
  };
};