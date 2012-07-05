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
function increaseQuality(item) {
  item.quality = item.quality + 1
}
function decreaseQuality(item) {
  item.quality = item.quality - 1
}
GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var cheese = "Aged Brie";
    var concertPass = "Backstage passes to a TAFKAL80ETC concert";
    var legendary = "Sulfuras, Hand of Ragnaros";
    var conjured = "Conjured Mana Cake";
    var minQuality = 0;
    var maxQuality = 50;
    var minSellIn = 0;
    var firstTierSellIn = 11;
    var secondTierSellIn = 6;
    if (cheese != item.name && concertPass != item.name) {
      if (item.quality > minQuality) {
        if (legendary != item.name) {
          decreaseQuality(item);
        }
        if (conjured == item.name) {
          decreaseQuality(item);
        }
      }
    } else {
      if (item.quality < maxQuality) {
        item.quality = item.quality + 1;
        if (concertPass == item.name) {
          if (item.sellIn < firstTierSellIn) {
            if (item.quality < maxQuality) {
              increaseQuality(item);
            }
          }
          if (item.sellIn < secondTierSellIn) {
            if (item.quality < maxQuality) {
              increaseQuality(item);
            }
          }
        }
      }
    }
    if (legendary != item.name) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < minSellIn) {
      if (cheese != item.name) {
        if (concertPass != item.name) {
          if (item.quality > minQuality) {
            if (legendary != item.name) {
              decreaseQuality(item);
            }
            if (conjured == item.name) {
              decreaseQuality(item);
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < maxQuality) {
          increaseQuality(item);
        }
      }
    }
  }
  return items;
};