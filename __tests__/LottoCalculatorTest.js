const LottoCalculate = require("../src/LottoCalculator");
const Lotto = require("../src/Lotto");

const winLotto = [1, 2, 3, 4, 5, 6];
const bonusNum = 8;
const myLotto = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 8],
  [1, 2, 3, 4, 6, 10],
  [1, 2, 3, 4, 13, 16],
  [1, 2, 3, 9, 10, 12],
];

const lottoCalculate = new LottoCalculate();
describe("로또 당첨 집계 테스트", () => {
  test("로또 번호 확인 테스트", () => {
    let Rank = 1;
    myLotto.forEach((lotto) => {
      expect(lottoCalculate.compareLotto(lotto, winLotto, bonusNum)).toBe(Rank);
      Rank++;
    });
  });
});

describe("로또 당첨 결과 테스트", () => {
  const lottoArr = myLotto.map((lotto) => {
    return new Lotto(lotto);
  });

  const [result, gain] = lottoCalculate
    .resultCaculator(lottoArr, {
      winLotto: new Lotto(winLotto),
      bonus: bonusNum,
    })
    .gainPercent()
    .getLottoResult();

  test("로또 당첨 결과 확인 테스트 ", () => {
    expect(result).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
    });
    expect(gain).toEqual("40631100.0");
  });
});
