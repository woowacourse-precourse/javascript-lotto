const Lotto = require("../src/Lotto");

const winLotto = [1, 11, 21, 31, 41, 45];
const bonusNum = 43;
const myLotto = [
  [1, 11, 21, 31, 41, 45],
  [2, 12, 22, 32, 42, 45],
  [3, 13, 23, 33, 43, 45],
  [4, 14, 24, 34, 44, 45],
  [1, 11, 21, 31, 41, 43],
];

describe("당첨 내역 카운트 기능 검증 테스트", () => {
  test("1등 1개, 2등 1개 카운트", () => {
    const getLottoResult = () => {
      const lottoResultList = [];
      myLotto.forEach((lottos) => {
        const lotto = new Lotto(lottos);
        lottoResultList.push(lotto.getResult(winLotto, bonusNum));
      });
      return (this.compareResult = lottoResultList.filter((result) => result));
    };
    const result = [1, 2];
    const methodResult = getLottoResult();

    expect(methodResult).toEqual(result);
  });
});
