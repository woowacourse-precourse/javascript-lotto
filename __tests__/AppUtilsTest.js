const AppUtils = require("../src/AppUtils");

describe("앱 유틸 클래스 테스트", () => {
  test("checkMatchLottoNum 테스트 - 번호 일치 개수 반환", () => {
    expect(AppUtils.checkMatchLottoNum([1,2,3,4,5,6], [1,3,5,7,9,11])).toEqual(3);
  });

  test("checkBonusNum 테스트 - 보너스 번호 일치 여부", () => {
    expect(AppUtils.checkBonusNum([1,2,3,4,5,6], 6)).toEqual(true);
    expect(AppUtils.checkBonusNum([1,2,3,4,5,6], 7)).toEqual(false);
  });

  test("getHistory 테스트 - 로또 당첨 내역", () => {
    const myLottoes = [
      [1,2,3,4,5,6],  //3
      [1,2,3,4,5,7],  //4
      [1,2,3,5,7,9],  //5
      [1,3,5,7,9,11], //6
      [1,3,5,7,9,13]  //5 + bonus
    ];
    const winNumbers = [1,3,5,7,9,11];
    const bonus = 13;

    expect(AppUtils.getHistories(myLottoes, winNumbers, bonus)).toEqual([1,1,1,1,1]);
  });

  test("calReward 테스트 - 상금 계산", () => {
    const history = [5,4,3,2,1];
    expect(AppUtils.calReward(history)).toEqual(2064725000);
  });

  test("calRate 테스트 - 수익률 계산", () => {
    expect(AppUtils.calRate(8000, 5000)).toEqual(62.5);
    expect(AppUtils.calRate(14000, 1500000)).toEqual(10714.3);
    expect(AppUtils.calRate(10000, 0)).toEqual(0);
  });
});
