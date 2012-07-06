var CheesyItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);

  this.updateQualitySellInNegative = function () {
    this.increaseQuality();
  };

  this.updateQualitySellInPositive = function () {
    this.increaseQuality();
  };

  this.updateQuality = function () {
    this.updateQualitySellInPositive();
    if (this.sellIn < 0)
      this.updateQualitySellInNegative();
  };
};
CheesyItem.prototype = new RegularItem();