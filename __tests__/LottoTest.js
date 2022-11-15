const LottoResultCheck = require("../src/model/resultCheck");
const { GRADE } = require("../src/utils/constants");

const Lotto = require("../src/Lotto");
const ValidationCheck = require("../src/model/inputCheck");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("1~45의 범위에서 벗어나는 숫자가 있는 경우 예외가 발생한다 - 45초과", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("1~45의 범위에서 벗어나는 숫자가 있는 경우 예외가 발생한다 - 1미만", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("구입 금액 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("숫자 이외의 문자가 들어 있는 경우 예외가 발생한다 - 특수문자", () => {
    expect(() => {
      inputCheck.isMoneyValid("-1000");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 문자가 들어 있는 경우 예외가 발생한다 - 알파벳", () => {
    expect(() => {
      inputCheck.isMoneyValid("1e9");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 문자가 들어 있는 경우 예외가 발생한다 - 한글", () => {
    expect(() => {
      inputCheck.isMoneyValid("1000ㄱ");
    }).toThrow("[ERROR]");
  });

  test("자연수이지만 1,000으로 나누어 떨어지지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      inputCheck.isMoneyValid("1001");
    }).toThrow("[ERROR]");
  });
});

describe("당첨 번호 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 예외가 발생한다 - 알파벳", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,a,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 예외가 발생한다 - 한글", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("ㄱ,2,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 예외가 발생한다 - 특수문자", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,2,3,%,5,6");
    }).toThrow("[ERROR]");
  });

  test("총 숫자 개수가 6개가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,2,3,4");
    }).toThrow("[ERROR]");
  });

  test("숫자들이 ','를 기준으로 구분되지 않은 경우 예외가 발생한다.", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1.2.3.4.5.6");
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("숫자 이외의 문자가 들어 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      inputCheck.isBonusNumberValid([1, 2, 3, 4, 5, 6], "1aㄱ$");
    }).toThrow("[ERROR]");
  });

  test("자연수이지만 당첨 번호와 겹치는 숫자일 경우 예외가 발생한다.", () => {
    expect(() => {
      inputCheck.isBonusNumberValid([1, 2, 3, 4, 5, 6], "1");
    }).toThrow("[ERROR]");
  });
});

describe("결과 산출 테스트", () => {
  const initializeValue = function helperForInitializingValues() {
    LottoResultCheck.userMoney = undefined;
    LottoResultCheck.winningNumbers = undefined;
    LottoResultCheck.bonusNumber = undefined;
    LottoResultCheck.resultArray = new Array(Object.keys(GRADE).length).fill(0);
  };
  const inputValue = function helperForInputtingValues(userMoney, winningNumbers, bonusNumber) {
    LottoResultCheck.userMoney = userMoney;
    LottoResultCheck.winningNumbers = winningNumbers;
    LottoResultCheck.bonusNumber = bonusNumber;
  };

  test("소수점 조건 체크: 로또 13개로 5등에 한 번 당첨될 경우 38.5%의 수익률이 나와야 한다.", () => {
    initializeValue();
    inputValue(13000, [1, 2, 3, 4, 5, 6], 7);
    LottoResultCheck.checkWinning([1, 2, 3, 8, 9, 10]);

    expect(LottoResultCheck.getEarningsRate()).toEqual("38.5");
  });

  test("수익률 계산: 로또 1개로 2등에 당첨될 경우 3000000.0%의 수익률이 나와야 한다.", () => {
    initializeValue();
    inputValue(1000, [1, 2, 3, 4, 5, 6], 7);
    LottoResultCheck.checkWinning([1, 2, 3, 4, 5, 7]);

    expect(LottoResultCheck.getEarningsRate()).toEqual("3000000.0");
  });
});
