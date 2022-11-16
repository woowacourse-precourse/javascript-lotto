const Lotto = require("../src/Lotto");

describe("로또 메서드 테스트", () => {
    test("bonus 번호 틀림", () => {
        const lotto = new Lotto([1,2,3,4,5,6]);
        lotto.calcRanking([1,2,3,4,5,6], 7);
        expect(lotto.bonus).toEqual(false);
    });
    test("bonus 번호 맞음", () => {
        const lotto = new Lotto([1,2,3,4,5,7]);
        lotto.calcRanking([1,2,3,4,5,8], 7);
        expect(lotto.bonus).toEqual(true);
    });
    test("로또 1등", () => {
        const lotto = new Lotto([1,2,3,4,5,7]);
        lotto.calcRanking([1,2,3,4,5,7], 8);
        expect(lotto.rank.rank).toEqual(1);
    });
    test("로또 2등", () => {
        const lotto = new Lotto([1,2,3,4,5,7]);
        lotto.calcRanking([1,2,3,4,5,8], 7);
        expect(lotto.rank.rank).toEqual(2);
    });
    test("로또 3등", () => {
        const lotto = new Lotto([1,2,3,4,5,7]);
        lotto.calcRanking([1,2,3,4,5,8], 9);
        expect(lotto.rank.rank).toEqual(3);
    });
    test("로또 4등", () => {
        const lotto = new Lotto([1,2,3,4,8,9]);
        lotto.calcRanking([1,2,3,4,5,10], 7);
        expect(lotto.rank.rank).toEqual(4);
    });
    test("로또 5등", () => {
        const lotto = new Lotto([1,2,3,4,8,9]);
        lotto.calcRanking([1,2,3,6,7,10], 12);
        expect(lotto.rank.rank).toEqual(5);
    });
});
