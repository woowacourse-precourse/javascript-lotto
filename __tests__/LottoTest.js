const MESSAGE = require("../src/constants/message");
const Lotto = require("../src/Lotto");
const LottoMachine = require("../src/LottoMachine");

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
  test("사용자가 로또 구입 금액이 숫자가 아닌 값을 입력하는 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.isNotANumber("abc!")) throw new Error(MESSAGE.ERROR.PAYMENT_MUST_BE_NUMBER);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (!lottoMachine.isChange(1002)) throw new Error(MESSAGE.ERROR.CHANGE_MUST_BE_ZERO);
    }).toThrow("[ERROR]");
  });

  test("로또는 6가지로 서로 다른 숫자로 이루어진 배열이다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      lottoMachine.getRandomNumberLottos().every((lotto) => lotto.every((number) => number >= 1 && number <= 45));
    }).toBeTruthy();
  });

  test("사용자에게 당첨 번호를 입력받을 때 1~45사이가 아닌 숫자를 입력했을 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateWinningNumbers([0, 1, 2, 3, 4, 5])) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    }).toThrow("[ERROR]");
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateWinningNumbers([46, 1, 2, 3, 4, 5])) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    }).toThrow("[ERROR]");
  });

  test("사용자에게 당첨 번호를 입력받을 때 숫자가 아닌 값을 입력했을 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateWinningNumbers(["당첨번호!!", 1, 2, 3, 4, 5])) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_MUST_BE_NUMBER);
    }).toThrow("[ERROR]");
  });

  test("사용자에게 당첨 번호를 입력받을 때 6개보다 적게 혹은 많이 입력했을 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateWinningNumbers([1, 2, 3, 4, 5])) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_COUNT);
    }).toThrow("[ERROR]");

    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateWinningNumbers([1, 2, 3, 4, 5, 6, 7])) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_COUNT);
    }).toThrow("[ERROR]");
  });

  test("사용자에게 보너스 번호를 입력받을 때 1~45사이가 아닌 숫자를 입력했을 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateBonusNumber(0)) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    }).toThrow("[ERROR]");

    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateBonusNumber(46)) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    }).toThrow("[ERROR]");
  });

  test("사용자에게 보너스 번호를 입력받을 때 숫자가 아닌 값을 입력했을 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.validateBonusNumber("abc!")) throw new Error(MESSAGE.ERROR.BONUS_NUMBER_MUST_BE_NUMBER);
    }).toThrow("[ERROR]");
  });
});
