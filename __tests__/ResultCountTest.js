const Lotto = require("../src/Lotto");

const winLotto = [1, 11, 21, 31, 41, 45];
const bonusNum = 43;

const getLottoResult = (lottos) => {
  const lottoResultList = [];
  lottos.forEach((lottos) => {
    const lotto = new Lotto(lottos);
    lottoResultList.push(lotto.getResult(winLotto, bonusNum));
  });
  return (this.compareResult = lottoResultList.filter((result) => result));
};

describe("당첨 내역 카운트 기능 검증 테스트", () => {
  test("1등 1개, 2등 1개 카운트", () => {
    const myLottoOne = [
      [1, 11, 21, 31, 41, 45],
      [2, 12, 22, 32, 42, 45],
      [3, 13, 23, 33, 43, 45],
      [4, 14, 24, 34, 44, 45],
      [1, 11, 21, 31, 41, 43],
    ];
    const result = [1, 2];
    const methodResult = getLottoResult(myLottoOne);

    expect(methodResult).toEqual(result);
  });

  test("3등 1개, 4등 1개, 3개 이하 1개 카운트", () => {
    const myLottoTwo = [
      [1, 11, 21, 31, 41, 42],
      [1, 11, 21, 31, 42, 44],
      [2, 22, 32, 42, 43, 44],
    ];
    const result = [3, 4];
    const methodResult = getLottoResult(myLottoTwo);

    expect(methodResult).toEqual(result);
  });
});
