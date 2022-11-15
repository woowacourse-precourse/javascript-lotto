const Lotto = require("../src/Lotto");
const Result = require("../src/Result");

describe("Result 클래스 테스트", () => {
  test("보너스를 제외한 당첨점수 통계를 나타내는 객체를 생성하는 함수", () => {
    const scores = [2, 5, 6];
    const bonusNum = 33;
    const result = new Result();
    const firstLotto = new Lotto([1, 2, 3, 4, 7, 6]);
    const secondLotto = new Lotto([22, 23, 24, 1, 5, 6]);
    const thirdLotto = new Lotto([22, 23, 24, 1, 3, 5]);
    const lottoArr = [firstLotto, secondLotto, thirdLotto];
    expect(result.createLottoResult(scores, bonusNum, lottoArr)).toStrictEqual({
      3: {
        money: 5000,
        count: 0,
      },
      4: {
        money: 50000,
        count: 0,
      },
      5: {
        money: 1500000,
        count: 1,
      },
      6: {
        money: 2000000000,
        count: 1,
      },
    });
  });

  test("점수가 5이면서 보너스 번호와 일치하는 숫자를 포함하는지 확인하는 함수", () => {
    const result = new Result();
    const score = 5;
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonusNum = 6;

    expect(
      result.isFiveScoreAndContainBonusNumber(score, lotto, bonusNum)
    ).toEqual(true);
  });

  test("점수가 5인지 확인하는 함수", () => {
    const result = new Result();
    const score = 5;
    expect(result.isFiveScore(score)).toEqual(true);
  });

  test("보너스 점수를 포함하는지 확인하는 함수", () => {
    const result = new Result();
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonusNum = 6;

    expect(result.isContainBonusNumber(lotto, bonusNum)).toEqual(true);
  });

  test("수익률을 구하는 함수", () => {
    const result = new Result();
    const buyMoney = 1000;
    const lottoResult = {
      3: {
        money: 5000,
        count: 1,
      },
      4: {
        money: 50000,
        count: 0,
      },
      5: {
        money: 1500000,
        count: 1,
      },
      6: {
        money: 2000000000,
        count: 0,
      },
    };
    const bonusResult = {
      money: 30000000,
      count: 0,
    };

    expect(result.getTotalYield(buyMoney, lottoResult, bonusResult)).toEqual(
      150500
    );
  });
});
