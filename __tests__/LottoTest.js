const BuyLotto = require("../src/BuyLotto");
const Lotto = require("../src/Lotto");
const { BUY_LOTTO, ERROR } = require("../src/constant/constant");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,6,7");
    }).toThrow(ERROR.IS_LOTTO_INPUT);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });

  test("1000의 배수가 아닌 값을 받으면 예외가 발생한다.", () => {
    expect(() => {
      new BuyLotto(13250);
    }).toThrow(BUY_LOTTO.ERROR);
  });

  test("숫자가 아닌 값을 받으면 예외가 발생한다", () => {
    expect(() => {
      new BuyLotto("dadd");
    }).toThrow(ERROR.NAN);
  });

  test("보너스넘버 1~45를 제외한 숫자를 받으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto("1,2,3,4,5,6");
      lotto.validateBonusNumber(47);
    }).toThrow(ERROR.IS_LOTTO_NUMBER);
  });

  test("로또 넘버에서 구분자외에 숫자가 아닌값을 입력받으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto("1,2,3,4,5,f");
    }).toThrow(ERROR.NAN);
  });

  test("로또 넘버를 입력해서 등수가 몇개인지 체크", () => {
    const winningBoard = {
      FIFTH: 1,
      FORTH: 1,
      THIRD: 1,
      SECOND: 1,
      FIRST: 1,
    };

    const mockArr = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 41],
      [1, 2, 3, 4, 34, 42],
      [1, 2, 3, 41, 42, 43],
    ];
    const bonus = 7;
    const lotto = new Lotto("1,2,3,4,5,6", mockArr);

    expect(lotto.calculate(bonus, mockArr)).toEqual(winningBoard);
  });

  test("로또 넘버에서 구분자외에 숫자가 아닌값을 입력받으면 예외가 발생한다.", () => {
    const winningBoard = {
      FIFTH: 1,
      FORTH: 0,
      THIRD: 1,
      SECOND: 0,
      FIRST: 0,
    };

    const userLottoArr = Array.from({ length: 9 });

    const lotto = new Lotto("1,2,3,4,5,6", [1, 2, 3, 4, 5, 6]);
    expect(lotto.getProfit(winningBoard, userLottoArr)).toBe(16722.2);
  });

  // 아래에 추가 테스트 작성 가능
});
