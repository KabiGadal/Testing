const sum = require('../sum_arguments');

describe("Addition", function () {
   test("Addition of three positive integers", function () {
        expect(sum(4, 3, 2)).toBe(9);
   })
    test("Addition of two positive and negative integers", function () {
        expect(sum(4, 3, -2)).toBe(5);
       })
    test("Addition of three negative integers", function () {
        expect(sum(-4, -3, -2)).toBe(-9);
           })
    test("Addition of two negative and one positive integers", function () {
        expect(sum(4, -3, -2)).toBe(-1);
}) 
})
