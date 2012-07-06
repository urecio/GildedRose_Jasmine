var ConjuredItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);
  this.updateQualitySellInNegative = function () {
    this.decreaseQuality();
    this.decreaseQuality();
  };

  this.updateQualitySellInPositive = function () {
    this.decreaseQuality();
    this.decreaseQuality();
  };

  this.updateQuality = function () {
    this.updateQualitySellInPositive();
    if (this.sellIn < 0)
      this.updateQualitySellInNegative();
  };

};
ConjuredItem.prototype = new RegularItem();