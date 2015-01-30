describe("GildedRose shop manager", function () {
  
  it("should degrade twice as fast once the sell date has passed", function(){
    var items = [new Item('pepsi', 0, 50)];
    items = GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(48);
  });
  describe("quality", function() {
    it("should decrement along with sellin by one when updating quality", function() {
      var items = [new Item('pepsi', 50 ,50),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)];
      items = GildedRose.updateQuality(items);
      expect(items[0].sellIn).toBe(49);
      expect(items[0].quality).toBe(49);
    });
    it("should never be negative", function() {
      var items = [new Item('pepsi', 1, 0)];
      items = GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(0);
    });
    it("should increase if it is Aged brie", function() {
      var items = [new Item('Aged Brie', 1, 0)];
      items = GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(0);
    });
    it("should never be more than 50", function() {
      var items = [new Item('Aged Brie', 1, 50)];
      items = GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(0);
    });
    it("should decrease if a Sulfuras is sold", function() {
      var items = [new Item('Sulfuras, Hand of Ragnaros', -1, 50)];
      items = GildedRose.updateQuality(items);
      expect(items[0].quality).toBe(49);
      expect(items[0].sellIn).toBe(-1);
    });
  });

});