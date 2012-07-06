var GildedRose = function () {
  console.log("OMGHAI!");
  var items = [];
  items.push(new RegularItem("+5 Dexterity Vest", 10, 20));
  items.push(new CheesyItem("Aged Brie", 2, 0));
  items.push(new RegularItem("Elixir of the Mongoose", 5, 7));
  items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new RegularItem("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};

var RegularItem = function (name, sellIn, quality) {
  var minQuality = 1;
  var maxQuality = 50;
  var ticketSellInRange1 = 6;
  var ticketSellInRange2 = 11;
  var self = this;

  var decreaseQuality = function () {
    if (self.quality > minQuality)
      self.quality--;
  };

  var increaseQuality = function () {
    if (self.quality < maxQuality)
      self.quality++;
  };

  this.isCheesy = function () {
    return false;
  };
  this.isTicket = function () {
    return false;
  };
  this.isLegendary = function () {
    return false;
  };
  this.isNormal = function () {
    return true;
  };

  var updateQualitySellinNegative = function () {
    if (self.isNormal())
      decreaseQuality();
    if (self.isCheesy())
      increaseQuality();
    if (self.isTicket())
      self.quality = 0;
  };

  var updateQualitySellInPositive = function () {

    if (self.isNormal()) {
      decreaseQuality();
    }

    if (self.isCheesy())
      increaseQuality();

    if (self.isTicket()) {
      increaseQuality();
      if (self.sellIn < ticketSellInRange1)
        increaseQuality();
      if (self.sellIn < ticketSellInRange2)
        increaseQuality();
    }
  };
  var updateQuality = function () {
    updateQualitySellInPositive();
    if (self.sellIn < 0)
      updateQualitySellinNegative();
  };
  var updateSellIn = function () {
    if (!self.isLegendary())
      self.sellIn--;
  };

  this.update = function () {
    updateSellIn();
    updateQuality();
  };
  return Item.call(this, name, sellIn, quality);
};
RegularItem.prototype = new Item();

var CheesyItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);

  this.isNormal = function () {
    return false;
  };
  this.isCheesy = function () {
    return true;
  };
};
CheesyItem.prototype = new RegularItem();

var LegendaryItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);
  this.isNormal = function () {
    return false;
  };
  this.isLegendary = function () {
    return true;
  };
};
LegendaryItem.prototype = new RegularItem();

var TicketItem = function (name, sellIn, quality) {
  RegularItem.call(this, name, sellIn, quality);
  this.isNormal = function () {
    return false;
  };
  this.isTicket = function () {
    return true;
  };
};
TicketItem.prototype = new RegularItem();

GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log();
    item.update();
  }
  return items;
};