const MissionUtils = require("@woowacourse/mission-utils");
const LottoFactory = require("../src/LottoFactory");
const Lotto = require("../src/Lotto");
const Management = require("../src/Management");
const Status = require("../src/status");
const App = require("../src/App");

afterEach(() => {
  MissionUtils.Console.close();
});

describe("1 ~ 45사이의 임의의 숫자 6개를 생성후 오름차순으로 정렬한다", () => {
  test("길이, 범위, 숫자여부, 중복, 정렬 점검", () => {
    const lottoFactory = new LottoFactory();
    const numbers = lottoFactory.makeLotto();

    expect(numbers.length).toEqual(6);
    expect(
      numbers.filter((number) => number >= 1 && number <= 45).length
    ).toEqual(6);
    expect(numbers.filter((number) => !isNaN(Number(number))).length).toEqual(
      6
    );
    expect(new Set(numbers).size).toEqual(6);
    expect(
      numbers.filter((number, index) => {
        if (index === 0) return true;
        if (number > numbers[index - 1]) return true;
      }).length
    ).toEqual(6);
  });
});

describe("생성한 로또와 입력된 당첨번호, 보너스 번호를 비교하여 등수를 계산할수 있다.", () => {
  test("5등 당첨번호 3개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 14, 15, 16]);
    const management = new Management();
    const status = new Status();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    status.add(management.checkNum(lotto.get()));
    expect(status.getResult()[0]).toEqual(1);
  });

  test("4등 당첨번호 4개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 15, 16]);
    const management = new Management();
    const status = new Status();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    status.add(management.checkNum(lotto.get()));
    expect(status.getResult()[1]).toEqual(1);
  });

  test("3등 당첨번호 5개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 16]);
    const management = new Management();
    const status = new Status();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    status.add(management.checkNum(lotto.get()));
    expect(status.getResult()[2]).toEqual(1);
  });

  test("2등 당첨번호 5개와 보너스번호 1개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 16]);
    const management = new Management();
    const status = new Status();
    management.setBonusNumber(16);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    status.add(management.checkNum(lotto.get()));
    expect(status.getResult()[3]).toEqual(1);
  });

  test("1등 당첨번호 6개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const management = new Management();
    const status = new Status();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    status.add(management.checkNum(lotto.get()));
    expect(status.getResult()[4]).toEqual(1);
  });
});

describe("지불한 금액과 당첨금을 비교하여 수익률을 계산할수 있다.", () => {
  test("임의의 결과와 지불 금액을 입력하여 수익률 계산", () => {
    const status = new Status();
    status.setResult([1, 1, 0, 0, 0]);
    status.countYield(50000);
    expect(status.getYield()).toEqual(110);
  });
});
