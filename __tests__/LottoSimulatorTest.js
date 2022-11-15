const LottoSimulator = require("../src/LottoSimulator");
const Lotto = require("../src/Lotto");

describe("로또 시뮬레이터 당첨 내역 체크 메소드 테스트", () => {
  test("모든 로또내역과 당첨내역 비교", () => {
    const lottoSimulator = new LottoSimulator();
    lottoSimulator.checkWinningResult([
      new Lotto([1,2,3,4,5,6]),
      new Lotto([1,2,3,10,11,12]),
    ],
    new Lotto([1,2,3,4,5,6]),
    7
    );
    expect(lottoSimulator.gradeCount.get('first')).toEqual(1);
    expect(lottoSimulator.gradeCount.get('fifth')).toEqual(1);
  });
});

describe("로또 시뮬레이터 setGrade 메소드 테스트", () => {
  test("3등인 경우 3등 횟수 숫자가 1 올라간다.", () => {
    const lottoSimulator = new LottoSimulator();
    lottoSimulator.setGrade('third');
    expect(lottoSimulator.gradeCount.get('third')).toEqual(1);
  });

  test("아무것도 당첨되지 않았을 때 setGrade 바로 종료", () => {
    const lottoSimulator = new LottoSimulator();
    expect(lottoSimulator.setGrade(undefined)).toEqual(undefined);
  });
});

describe("로또 시뮬레이터 수익률 계산 테스트", () => {
  test("8000원 투자하고 5등 1개 당첨인 경우", () => {
    const lottoSimulator = new LottoSimulator();
    lottoSimulator.setGrade('fifth');
    expect(lottoSimulator.calcReturnRate(8000)).toEqual("62.5");
  });

  test("5000원 투자하고 2등 1개, 5등 2개인 당첨인 경우", () => {
    const lottoSimulator = new LottoSimulator();
    lottoSimulator.setGrade('second');
    lottoSimulator.setGrade('fifth');
    lottoSimulator.setGrade('fifth');
    expect(lottoSimulator.calcReturnRate(5000)).toEqual("600200.0");
  });

  test("10000원 투자하고 아무것도 당첨 안된 경우", () => {
    const lottoSimulator = new LottoSimulator();
    expect(lottoSimulator.calcReturnRate(10000)).toEqual("0.0");
  });
});
