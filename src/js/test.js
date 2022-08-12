describe("factorial", function() {

    it('should return a number', () => {
        assert.equal(typeof getFactorial(5), 'number');
    });

    it('factorial(5) should return 120', () => {
        assert.equal(getFactorial(5), 120);
    });

    it('factorial(10) should return 3628800', () => {
        assert.equal(getFactorial(10), 3628800);
    });

    it('factorial(20) should return 2432902008176640000', () => {
        assert.equal(getFactorial(20), 2432902008176640000);
    });

    it('factorial(0) should return 1', () => {
        assert.equal(getFactorial(0), 1);
    });

});