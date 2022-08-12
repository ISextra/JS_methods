describe("реализация функций: map, filter, find, some, every", function() {
    describe("map prototype", function () {
        it("increment all values in [10,11,12,13,14,15] should return [11,12,13,14,15,16]", () => {
            assert.deepEqual([10, 11, 12, 13, 14, 15].map2((value) => value + 1), [11, 12, 13, 14, 15, 16]);
        });

        it("multiply all values in [10,11,12,13,14,15] should return [20,22,24,26,28,30]", () => {
            assert.deepEqual([10, 11, 12, 13, 14, 15].map2((value) => value * 2), [20, 22, 24, 26, 28, 30]);
        });

        it("multiply all values in [10,11] with second param [20,21] should return [40,42]", () => {
            assert.deepEqual([10, 11].map2((value) => value * 2, [20, 21]), [40, 42]);
        });
    });
    describe("filter prototype", function () {
        it("get all values in [10,11,12,13,14,15] that are %2 should return [10,12,14]", () => {
            assert.deepEqual([10, 11, 12, 13, 14, 15].filter2((value) => value % 2 === 0), [10, 12, 14]);
        });
        it("get not false values in [ \"\",0,null,undefined,60,-0,\"20\"] should return [60,\"20\"]", () => {
            assert.deepEqual(["", 0, null, undefined, 60, -0, "20"].filter2(Boolean), [60, "20"]);
        });
    });
    describe("find prototype", function () {
        it("find \"Ana\" in [\"John\", \"Alex\", \"Ana\", \"Bob\"] should return \"Ana\"" , () => {
            assert.deepEqual(["John", "Alex", "Ana", "Bob"].find2((value) => value === "Ana"), "Ana");
        });
        it("find \"Agata\" in [\"John\", \"Alex\", \"Ana\", \"Bob\"] should return undefined" , () => {
            assert.deepEqual(["John", "Alex", "Ana", "Bob"].find2((value) => value === "Agata"), undefined);
        });
        it("find first value >5 in [3, 2, 5, 7, 10, 8] should return 7" , () => {
            assert.deepEqual([3, 2, 5, 7, 10, 8].find2((value) => value > 5), 7);
        });
    });
    describe("some the prototype", function () {
        it("any condition in an empty array should return false" , () => {
            assert.deepEqual([].some2((value) => value > 5), false);
        });
        it("find \"Ana\" in [\"John\", \"Alex\", \"Ana\", \"Bob\"] should return true" , () => {
            assert.deepEqual(["John", "Alex", "Ana", "Bob"].some2((value) => value === "Ana"), true);
        });
        it("find \"Agata\" in [\"John\", \"Alex\", \"Ana\", \"Bob\"] should return false" , () => {
            assert.deepEqual(["John", "Alex", "Ana", "Bob"].some2((value) => value === "Agata"), false);
        });
    });
    describe("every the prototype", function () {
        it("any condition in an empty array should return true" , () => {
            assert.deepEqual([].every2((value) => value > 5), true);
        });
        it("check if all values in [54,46,48,59,42] >40 should return true" , () => {
            assert.deepEqual([54,46,48,59,42].every2((value) => value > 40), true);
        });
        it("check if all values in [54,46,48,59,42] >50 should return false" , () => {
            assert.deepEqual([54,46,48,59,42].every2((value) => value > 50), false);
        });
    });
});
