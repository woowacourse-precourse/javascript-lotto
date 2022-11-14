const Lotto = require("../src/Lotto");
const LottoFactory = require("../src/LottoFactory");
const Lottos = require("../src/Lottos");
const Management = require("../src/Management");
const Payment = require("../src/Payment");
const Status = require("../src/Status");
const MissionUtils = require("@woowacourse/mission-utils");

afterEach(() => {
  MissionUtils.Console.close();
});

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다");
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR] 로또 번호는 숫자로 구성되어야 합니다");
  });
});

describe("로또 팩토리 클래스 테스트", () => {
  test("1 ~ 45 사이의 중복되지 않은 숫자 6개를 오름차순으로 반환한다", () => {
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

  test("숫자를 오름차순으로 정렬해 준다", () => {
    const lottoFactory = new LottoFactory();
    const numbers = [6, 5, 4, 3, 2, 1];
    lottoFactory.sortNumber(numbers);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("로또들 클래스 테스트", () => {
  test("로또객체를 정확하게 추가한다.", () => {
    const lottos = new Lottos();
    lottos.add(new Lotto([1, 2, 3, 4, 5, 6]));
    lottos.add(new Lotto([1, 2, 3, 4, 5, 6]));

    expect(
      lottos.get().filter((lotto) => lotto instanceof Lotto).length
    ).toEqual(2);
  });
});

describe("관리 클래스 테스트", () => {
  test("당첨 번호가 6자리가 아닌경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.WinNumberVaild("1,2,3,4,5,6,7");
    }).toThrow("[ERROR] 당첨 번호는 6개여야 합니다.");
  });
  test("당첨 번호가 숫자가 아닌경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.WinNumberVaild("1,a,3,4,5,6");
    }).toThrow("[ERROR] 당첨 번호는 숫자로 구성되어야 합니다");
  });
  test("당첨 번호가 1 ~ 45 범위가 아닌경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.WinNumberVaild("1,2,60,4,5,6");
    }).toThrow("[ERROR] 당첨 번호는 1 ~ 45 범위이어야 합니다");
  });
  test("당첨 번호가 중복되는 경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.WinNumberVaild("1,2,2,3,5,6");
    }).toThrow("[ERROR] 당첨 번호는 중복되지 않아야 합니다");
  });
  test("보너스 번호가 숫자가 아닌경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.bonusNumberVaild("a");
    }).toThrow("[ERROR] 보너스 번호는 숫자이어야 합니다.");
  });
  test("보너스 번호가 1 ~ 45 사이인 경우 예외가 발생한다", () => {
    const management = new Management();
    expect(() => {
      management.bonusNumberVaild("55");
    }).toThrow("[ERROR] 보너스 번호는 1 ~ 45 범위이어야 합니다");
  });
  test("보너스 번호가 당첨번호와 중복되는 경우 예외가 발생한다.", () => {
    const management = new Management();
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(() => {
      management.bonusNumberVaild("6");
    }).toThrow("[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다");
  });

  test("당첨번호 3개가 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 14, 15, 16]);
    const management = new Management();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(management.checkNum(lotto.get())).toEqual({
      realnum: 3,
      bonusnum: 0,
    });
  });

  test("당첨번호 4개가 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 15, 16]);
    const management = new Management();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(management.checkNum(lotto.get())).toEqual({
      realnum: 4,
      bonusnum: 0,
    });
  });

  test("당첨번호 5개가 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 16]);
    const management = new Management();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(management.checkNum(lotto.get())).toEqual({
      realnum: 5,
      bonusnum: 0,
    });
  });

  test("당첨번호 5개와 보너스번호 1개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 16]);
    const management = new Management();
    management.setBonusNumber(16);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(management.checkNum(lotto.get())).toEqual({
      realnum: 5,
      bonusnum: 1,
    });
  });

  test("당첨번호 6개 일치한 경우", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const management = new Management();
    management.setBonusNumber(7);
    management.setWinNumber([1, 2, 3, 4, 5, 6]);
    expect(management.checkNum(lotto.get())).toEqual({
      realnum: 6,
      bonusnum: 0,
    });
  });
});

describe("지불 클래스 테스트", () => {
  test("숫자가 아닌 값을 입력하는 경우", () => {
    const payment = new Payment();
    expect(() => {
      payment.vaildation("abc");
    }).toThrow("[ERROR] 숫자만 입력가능합니다");
  });

  test("1000의 배수가 아닌 숫자를 입력하는 경우", () => {
    const payment = new Payment();
    expect(() => {
      payment.vaildation(1234);
    }).toThrow("[ERROR] 1000원 단위로 입력해야 합니다");
  });
});

describe("상태 클래스 테스트", () => {
  test("당첨번호 3개가 일치하는 객체를 입력한 경우", () => {
    const status = new Status();
    status.add({
      realnum: 3,
      bonusnum: 0,
    });

    expect(status.getResult()).toEqual([1, 0, 0, 0, 0]);
  });

  test("당첨번호 4개가 일치하는 객체를 입력한 경우", () => {
    const status = new Status();
    status.add({
      realnum: 4,
      bonusnum: 0,
    });

    expect(status.getResult()).toEqual([0, 1, 0, 0, 0]);
  });
  test("당첨번호 5개가 일치하는 객체를 입력한 경우", () => {
    const status = new Status();
    status.add({
      realnum: 5,
      bonusnum: 0,
    });

    expect(status.getResult()).toEqual([0, 0, 1, 0, 0]);
  });
  test("당첨번호 5개와 보너스번호 한개가 일치하는 객체를 입력한 경우", () => {
    const status = new Status();
    status.add({
      realnum: 5,
      bonusnum: 1,
    });

    expect(status.getResult()).toEqual([0, 0, 0, 1, 0]);
  });
  test("당첨번호 6개가 일치하는 객체를 입력한 경우", () => {
    const status = new Status();
    status.add({
      realnum: 6,
      bonusnum: 0,
    });

    expect(status.getResult()).toEqual([0, 0, 0, 0, 1]);
  });
  test("주어진 입력값에 대해 수익률을 잘 계산하는지", () => {
    const status = new Status();
    status.setResult([1, 1, 0, 0, 0]);
    status.countYield(50000);
    expect(status.getYield()).toEqual(110);
  });
});
