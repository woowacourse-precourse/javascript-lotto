const Lotto = require("../src/Lotto");

const lottos = [
    [1, 2, 8, 12, 14, 37],
    [7, 9, 17, 28, 30, 36],
    [1, 11, 19, 22, 24, 33],
    [2, 7, 17, 22, 29, 30],
    [13, 16, 21, 27, 29, 45],
    [1, 2, 10, 11, 20, 45],
    [1, 2, 3, 7, 8, 9],
    [1, 2, 3, 4, 7, 8],
    [1, 2, 3, 4, 5, 8],
    [1, 2, 3, 4, 5, 45],
    [1, 2, 3, 4, 5, 6],
];
const expectLotto = "1,2,3,4,5,6";
const bonus = "45";

describe("일치하는 로또 숫자 테스트", () => {
    test("로또 번호와 예상하는 번호가 n개 일치한다.", () => {
        const winningCount = new Lotto(expectLotto).getWinningCount(bonus, lottos);
        expect(winningCount).toMatchObject([2, 0, 1, 1, 0, 2, 3, 4, 5, 15, 6]);
    });
});
