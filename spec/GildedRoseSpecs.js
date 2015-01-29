describe("GildedRose shop manager", function () {
  it("should decrement quality and sellin by one when updating quality", function() {
     var pepsi = Item('pepsi', 50 ,50);
     GildedRose.updateQuality(pepsi);
     expect(pepsi.sellIn).toBe(49);
     expect(pepsi.quality).toBe(49);
  });
});