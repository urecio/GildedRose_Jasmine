var LegendaryItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);
  this.updateQuality = function () {
  };

  this.updateSellIn = function () {
  };
};
LegendaryItem.prototype = new RegularItem();