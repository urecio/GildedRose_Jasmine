var GildedRose = function (items) {
  this.updateQuality = function () {
    for (var i = 0; i < items.length; i++)
      items[i].update();
    return items;
  };
};