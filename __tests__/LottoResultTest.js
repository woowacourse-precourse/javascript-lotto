const Lotto = require("../src/Lotto");

const expectLotto = "1,2,3,4,5,6";

const winningCountArray = [6, 15, 15, 5, 5, 5, 4, 4, 4, 4, 0, 1, 1, 3, 2, 2, 2, 1, 0, 3, 3, 2, 2, 2, 1, 2, 2, 0, 1, 1, 1, 1, 3, 2, 1, 2, 2, 2, 3, 1, 0, 1, 2, 0, 2, 3, 1, 0, 3, 2];

const lottoResultArray = [7, 4, 3, 2, 1];

describe("당첨된 등수별 카운트 테스트", () => {
    test("몇 등이 몇 번 당첨인지 확인한다.", () => {
        const winningCount = new Lotto(expectLotto).getLottoResult(winningCountArray);
        expect(winningCount).toMatchObject(lottoResultArray);
    });
});
