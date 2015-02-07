describe("GildedRose shop manager", function () {
  describe("quality", function() {

    describe("Normal item", function() {
      it("should decrement by one when updating quality", function() {
        var items = [new Item('pepsi', 50 ,50)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(49);
      });
      it("should never be negative", function() {
        var items = [new Item('pepsi', 1, 0)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(0);
      });
      it("should degrade twice as fast once the sell date has passed", function(){
        var items = [new Item('pepsi', 0, 50)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(48);
      });
    });

    describe("Aged Brie", function() {
      it("should increase by one when updating quality", function() {
        var items = [new Item('Aged Brie', 1, 0)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(1);
      });
      it("should never be more than 50", function() {
        var items = [new Item('Aged Brie', 1, 50)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(50);
      });
    });

    describe("Suluras, Hand of Ragnaros", function() {
      it("shouldn't change", function() {
        var items = [new Item("Sulfuras, Hand of Ragnaros", 20, 80)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(80);
      });
    });

    describe("Backstage passes", function() {
      it("should increase if it is Backstage passes", function() {
        var items = [new Item('Backstage passes to a TAFKAL80ETC concert', 30, 0)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(1);
      });
      it("should increase by 2 if it is Backstage passes and sellin is between 5 and 10", function() {
        var items = [new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(12);
      });
      it("should increase by 3 if it is Backstage passes and sellin is between 0 and 5", function() {
        var items = [new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)];
        items = GildedRose.updateQuality(items);
        expect(items[0].quality).toBe(13);
      });
    });

  });

  describe("Sellin", function() {

    describe("Normal item", function() {
      it("should decrement by one when updating quality", function() {
        var items = [new Item('pepsi', 50 ,50)];
        items = GildedRose.updateQuality(items);
        expect(items[0].sellIn).toBe(49);
      });
    });

    describe("Suluras, Hand of Ragnaros", function() {
      it("shouldn't change", function() {
        var items = [new Item("Sulfuras, Hand of Ragnaros", 20, 80)];
        items = GildedRose.updateQuality(items);
        expect(items[0].sellIn).toBe(20);
      });
    });
  });
});
