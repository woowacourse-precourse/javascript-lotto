const LottoGame = require("../src/LottoGame");
const { LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER } = require("../src/GameConstants");
const testLottoGame = new LottoGame();

describe("보너스 번호 입력 테스트", () => {
  test("보너스 번호가 숫자 1개가 아니면 예외가 발생한다.", () => {
    const ERROR_MESSAGE = "[ERROR] 숫자를 입력해주세요.";
    expect(() => {
      testLottoGame.validateBonusNumber('z');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('3 5');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('@');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('3h5');
    }).toThrow(ERROR_MESSAGE);
  });

  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    const ERROR_MESSAGE = "[ERROR] 정수를 입력해주세요.";
    expect(() => {
      testLottoGame.validateBonusNumber('3.7');
    }).toThrow(ERROR_MESSAGE);
  });

  test("보너스 번호가 1~45까지의 숫자가 아니면 예외가 발생한다.", () => {
    const ERROR_MESSAGE = `[ERROR] 보너스 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`;
    expect(() => {
      testLottoGame.validateBonusNumber('0');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('46');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('-30');
    }).toThrow(ERROR_MESSAGE);

    expect(() => {
      testLottoGame.validateBonusNumber('100');
    }).toThrow(ERROR_MESSAGE);
  });
});