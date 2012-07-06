var RegularItem = function (name, sellIn, quality) {
  var minQuality = 1;
  var maxQuality = 50;

  this.decreaseQuality = function () {
    if (this.quality > minQuality)
      this.quality--;
  };

  this.increaseQuality = function () {
    if (this.quality < maxQuality)
      this.quality++;
  };

  this.updateQualitySellInNegative = function () {
    this.decreaseQuality();
  };

  this.updateQualitySellInPositive = function () {
    this.decreaseQuality();
  };

  this.updateQuality = function () {
    this.updateQualitySellInPositive();
    if (this.sellIn < 0)
      this.updateQualitySellInNegative();
  };

  this.updateSellIn = function () {
    this.sellIn--;
  };

  this.update = function () {
    this.updateSellIn();
    this.updateQuality();
  };
  return Item.call(this, name, sellIn, quality);
};
RegularItem.prototype = new Item();