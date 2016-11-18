var app = require('../js/script_1.js');


describe("Pow func", function () {

    it("contains spec with an expectation", function () {
        var b;
        b = app.pow(2, 2);

        expect(b).toBe(4);
    });
    it("contains spec with an expectation", function () {
        var b;
        b = app.pow(3, 3);

        expect(b).toBe(27);
    });
    it("contains spec with an expectation", function () {
        var b;
        b = app.pow(5, 7);

        expect(b).toBe(78125);
    });
});
