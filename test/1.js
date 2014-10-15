describe("mytest", function () {
    it("====== to test", function () {
        var a = 12;
        var b = a;

        expect(a).toBe(11);
        expect(b).not.toBe(null);
    });
});