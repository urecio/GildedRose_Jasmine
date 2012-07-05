describe("GildedRose shop manager", function () {
  describe("test coverage prior to development", function () {

    function checkItem(actualItems, idx, expected) {
      expect(actualItems[idx].quality).toBe(expected.q);
      expect(actualItems[idx].sellIn).toBe(expected.s);
    }

    it("update before negative sellIn", function () {
      var items = [];
      items.push(new Item("+5 Dexterity Vest", 10, 20));
      items.push(new Item("Aged Brie", 2, 0));
      items.push(new Item("Elixir of the Mongoose", 5, 7));
      items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
      //items.push(new Item("Conjured Mana Cake", 3, 6));
      var actualItems = GildedRose.updateQuality(items);
      [
        {q:19, s:9},
        {q:1, s:1},
        {q:6, s:4},
        {q:80, s:0},
        {q:21, s:14}
      ].forEach(function (expected, idx) {
            checkItem(actualItems, idx, expected);
          });
    });

    it("update after negative sellIn", function () {
      var items = [];
      items.push(new Item("+5 Dexterity Vest", 0, 20));
      items.push(new Item("Aged Brie", 0, 6));
      items.push(new Item("Elixir of the Mongoose", 0, 7));
      items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20));
      //items.push(new Item("Conjured Mana Cake", 0, 6));
      var actualItems = GildedRose.updateQuality(items);
      [
        {q:18, s:-1},
        {q:8, s:-1},
        {q:5, s:-1},
        {q:80, s:0},
        {q:0, s:-1}
      ].forEach(function (expected, idx) {
            checkItem(actualItems, idx, expected);
          });
    });
  });
});