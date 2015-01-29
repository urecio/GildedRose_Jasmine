describe("GildedRose shop manager", function () {
  it("should decrement quality and sellin by one when updating quality", function() {
     var items = [new Item('pepsi', 50 ,50)];
     items = GildedRose.updateQuality(items);
     expect(items[0].sellIn).toBe(49);
     expect(items[0].quality).toBe(49);
  });
});