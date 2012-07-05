var GildedRose = function () {
  console.log("OMGHAI!");
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};
GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++) {
    var item = new ItemWrapper(items[i]);
    var cheese = "Aged Brie";
    var concertPass = "Backstage passes to a TAFKAL80ETC concert";
    var legendary = "Sulfuras, Hand of Ragnaros";
    var conjured = "Conjured Mana Cake";
    var minSellIn = 0;
    var firstTierSellIn = 11;
    var secondTierSellIn = 6;
    if (cheese != item.name && concertPass != item.name) {
      if (legendary != item.name) {
          item.decreaseQuality();
      }
      if (conjured == item.name) {
          item.decreaseQuality();
      }
    } else {
        item.quality = item.quality + 1;
        if (concertPass == item.name) {
          if (item.sellIn < firstTierSellIn) {
              item.increaseQuality();
          }
          if (item.sellIn < secondTierSellIn) {
              item.increaseQuality();
          }
        }
    }
    if (legendary != item.name) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < minSellIn) {
      if (cheese != item.name) {
        if (concertPass != item.name) {
            if (legendary != item.name) {
              item.decreaseQuality();
            }
            if (conjured == item.name) {
              item.decreaseQuality();
            }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
          item.increaseQuality();
      }
    }
    items[i] = item.item;
  }
  return items;
};