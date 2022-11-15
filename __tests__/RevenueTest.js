const Lotto = require("../src/Lotto");

const expectLotto = "1,2,3,4,5,6";

const resultArray = [
    [1, 0, 0, 0, 0],
    [31, 6, 0, 0, 0],
    [2360, 180, 0, 11, 0],
    [0, 0, 0, 0, 1],
];
const amount = [8, 1000, 50000, 1];
const revenueResults = ["62.5", "45.5", "701.6", "200000000.0"];

describe("수익률 구하기 테스트", () => {
    test("수익률을 구한 결과가 일치하는지 확인한다.", () => {
        resultArray.map((lottoResult, idx) => {
            const revenueResult = new Lotto(expectLotto).getRevenue(lottoResult, amount[idx]);
            expect(revenueResult).toBe(revenueResults[idx]);
        });
    });
});
