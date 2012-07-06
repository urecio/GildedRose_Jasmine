describe("GildedRose shop manager", function () {
  describe("coverage tests", function () {
    it("starting", function () {
      var items = [];
      items.push(new RegularItem("+5 Dexterity Vest", 10, 20));
      items.push(new CheesyItem("Aged Brie", 2, 0));
      items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
      //items.push(new Item("Conjured Mana Cake", 3, 6));
      GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(19);
      expect(items[1].quality).toBe(1);
      expect(items[2].quality).toBe(80);
      expect(items[3].quality).toBe(21);
      expect(items[0].sellIn).toBe(9);
      expect(items[1].sellIn).toBe(1);
      expect(items[2].sellIn).toBe(0);
      expect(items[3].sellIn).toBe(14);
    });

    it("concert passes range 1", function () {
      var items = [];
      items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 9, 20));
      GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(8);
    });

    it("concert passes range 2", function () {
      var items = [];
      items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 3, 20));
      GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(23);
      expect(items[0].sellIn).toBe(2);
    });

    it("sellIn 0", function () {
      var items = [];
      items.push(new RegularItem("+5 Dexterity Vest", 0, 20));
      items.push(new CheesyItem("Aged Brie", 0, 0));
      items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 0, 20));
      //items.push(new Item("Conjured Mana Cake", 0, 6));
      GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(18);
      expect(items[1].quality).toBe(2);
      expect(items[2].quality).toBe(80);
      expect(items[3].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[2].sellIn).toBe(0);
      expect(items[3].sellIn).toBe(-1);
    });

  });
});