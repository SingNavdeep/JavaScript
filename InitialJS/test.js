let assertFunc = () => {
    assert.equal(pow(2, 3), 8);
};

/**
 * test positive scenarios where n is a non-negative integer
 */
let testPositive = () => {
    it("test 2 raised to power 3", assertFunc);
    it('test 3 raised to power 2', function () {
        assert.equal(pow(3, 2), 9);
    });
};

/**
 * test negative scenarios where n is not a non-negative integer
 */
let testNegative = () =>{
    it("for negative n", function(){
        assert.isNaN(pow(3, -1));
    });
    it("for non integer n", function(){
       assert.isNaN(pow(3, 1.2));
    });
}

/**
 * describe callback
 */
describe("test power implementation", function(){
    /**
     * a nested describe is used to group similar tests together
     */
    describe("test x to power n positive", testPositive);
    describe("test x to power n negative", testNegative);
});