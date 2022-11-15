const LottoGame = require("../src/LottoGame");
const { LOTTO_PRICE } = require("../src/GameConstants");
const testLottoGame = new LottoGame();

describe("로또 구입 금액 입력 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    const ERROR_MESSAGE = "[ERROR] 숫자만 입력해주세요.";
    expect(() => {
      testLottoGame.validatePurchaseAmount(Number('3h5'));
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(Number('zzz'));
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(Number('12@'));
    }).toThrow(ERROR_MESSAGE);
  });

  test(`구입 금액이 ${LOTTO_PRICE}원 미만이면 예외가 발생한다.`, () => {
    const ERROR_MESSAGE = `[ERROR] 최소 입력 금액은 ${LOTTO_PRICE}원입니다.`;
    expect(() => {
      testLottoGame.validatePurchaseAmount(250.7);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(900);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(-1000);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(0);
    }).toThrow(ERROR_MESSAGE);    
  });

  test(`구입 금액이 ${LOTTO_PRICE}로 나누어 떨어지지 않는 경우 예외가 발생한다.`, () => {
    const ERROR_MESSAGE = "[ERROR] 1,000원 단위로 입력해주세요.";
    expect(() => {
      testLottoGame.validatePurchaseAmount(9950);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(1200);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(100000009);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(1000.7);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(500000.123);
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validatePurchaseAmount(500000.000123);
    }).toThrow(ERROR_MESSAGE);
  });
});