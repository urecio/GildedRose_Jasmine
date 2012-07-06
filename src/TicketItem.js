var TicketItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);
  var ticketSellInRange1 = 6;
  var ticketSellInRange2 = 11;

  this.updateQualitySellInNegative = function () {
    this.quality = 0;
  };

  this.updateQualitySellInPositive = function () {
    this.increaseQuality();
    if (this.sellIn < ticketSellInRange1)
      this.increaseQuality();
    if (this.sellIn < ticketSellInRange2)
      this.increaseQuality();
  };

  this.updateQuality = function () {
    this.updateQualitySellInPositive();
    if (this.sellIn < 0)
      this.updateQualitySellInNegative();
  };
};
TicketItem.prototype = new RegularItem();