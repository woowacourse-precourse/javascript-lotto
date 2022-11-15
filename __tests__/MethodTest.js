const LottoGenerator = require('../src/modules/LottoGenerator');
const LottoMatching = require('../src/modules/LottoMatching');

describe("기능 구현 테스트", () => {
  test('구입 금액만큼 로또를 발행한다.', () => {
    const [lottoCount, lottoArr] = LottoGenerator.publishLotto("6000");
    expect(lottoCount).toEqual(6);
    expect(lottoArr.length).toEqual(6);
  });

  test('로또번호와 당첨번호가 몇개 일치하는지와 보너스 번호 일치 여부를 확인한다.', () => {
    const lotto = [1, 2, 3, 4, 5, 43];
    const winNums = '1,2,3,11,15,17';
    const bonusNum = '43';
    const [winNumMatchCount, isBonusMatch] = LottoMatching.match(lotto, winNums, bonusNum);
    expect(winNumMatchCount).toEqual(3);
    expect(isBonusMatch).toEqual(true);
  });

  test('일치 여부를 확인한 뒤 1에서 5까지 인덱스 순으로 등수인 배열에 등수를 매긴 결과를 반환한다.', () => {
    const lottoArr = [
      [1, 2, 3, 4, 5, 6], 
      [10, 12, 14, 21, 31, 42],
      [1, 2, 3, 4, 5, 43],
    ];
    const winNums1 = '1,2,3,11,15,17';
    const bonusNum1 = '43';
    const lottoResultArr1 = LottoMatching.getMatchResult(lottoArr, winNums1, bonusNum1);
    const winNums2 = '1,2,3,4,5,6';
    const bonusNum2 = '43';
    const lottoResultArr2 = LottoMatching.getMatchResult(lottoArr, winNums2, bonusNum2);
    expect(lottoResultArr1).toEqual([0,0,0,0,0,2]);
    expect(lottoResultArr2).toEqual([0,1,1,0,0,0]);
  });

  test('수익률을 구한다.', () => {
    const lottoResultArr = [0,0,0,0,0,1];
    const lottoCost = "8000";
    const rateOfReturn = LottoMatching.getRateOfReturn(lottoResultArr, lottoCost);
    expect(rateOfReturn).toEqual("62.5");
  });
});