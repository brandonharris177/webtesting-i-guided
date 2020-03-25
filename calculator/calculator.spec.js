const { add } = require('./calculator.js');

// test away!
it("should run tests", function() {
    expect(true).toBe(true);
});

describe('calculator', function() {
    describe('add', function () {
        it('should return the sum of 2 numbers as arguments', function() {
            // Arrange
           
            // Act
                const sum = add(2, 2);
            // Assert
                expect(sum).toBe(4);
        })

        it('should return the sum of 2 numbers', function() {
            expect(add(2, 2)).toBe(4);
            expect(add(0, 2)).toBe(2);
            expect(add(-2, 2)).toBe(0);
            expect(add(1, 10)).toBe(11);
        })

        it('should only take numbers', function() {
            expect(() =>{
                add(2, "two")
            }).toThrow();

            expect(() =>{
                add(2, NaN)
            }).toThrow();

            expect(() =>{
                add(2, {})
            }).toThrow();

            expect(() =>{
                add(2, [])
            }).toThrow();
        })
    })
})