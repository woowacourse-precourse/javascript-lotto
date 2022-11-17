const LottoAnswer = require("../src/LottoAnswer");
const { ERROR_MESSAGE, WINMESSAGE } = require("../src/Utils");

describe("LottoAnswer 클래스 테스트", () => {
  let lottoAnswer;
  beforeEach(() => {
    lottoAnswer = new LottoAnswer([1, 2, 3, 4, 5, 6]);
  });

  test("6자리 당첨 숫자 예외가 발생하지 않으면 저장된다.", () => {
    expect(lottoAnswer.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(() => {
      new LottoAnswer([1, 2, 3, 4]);
    }).toThrow(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
  });

  test("보너스 번호 입력이 1개의 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      lottoAnswer.validateBonus("1,2");
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.NAN);
    expect(() => {
      lottoAnswer.validateBonus("q");
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.NAN);
  });

  test("당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      lottoAnswer.validateBonus(1);
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.DUPLICATE);
  });

  test("보너스 번호의 숫자가 1~45 범위가 아닌 값이면 예외가 발생한다.", () => {
    expect(() => {
      lottoAnswer.validateBonus(78);
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.OVER_RANGE);
    expect(() => {
      lottoAnswer.validateBonus(0);
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.OVER_RANGE);
    expect(() => {
      lottoAnswer.validateBonus(0.4);
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.OVER_RANGE);
  });

  test("보너스 번호가 소수의 형태로 입력되면 예외가 발생한다.", () => {
    expect(() => {
      lottoAnswer.validateBonus(1.4);
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.NOT_INTEGER);
  });

  test("보너스 번호 예외가 발생하지 않으면 저장된다.", () => {
    expect(() => {
      lottoAnswer.bonus = 7;
    }).not.toThrow("[ERROR]");
    expect(() => {
      lottoAnswer.bonus = 6;
    }).toThrow(ERROR_MESSAGE.LOTTO_BONUS.DUPLICATE);
  });

  test("private 보너스 번호 접근", () => {
    expect(lottoAnswer.bonus).toBe(undefined);
    lottoAnswer.bonus = 7;
    expect(lottoAnswer.bonus).toBe(7);
  });

  test("로또 정답 비교", () => {
    lottoAnswer.bonus = 10;
    expect(lottoAnswer.compare([1, 11, 12, 13, 14, 15])).toBe(undefined);
    expect(lottoAnswer.compare([1, 2, 3, 4, 5, 7])).toBe(WINMESSAGE.THIRD);
    expect(lottoAnswer.compare([10, 1, 2, 3, 4, 5])).toBe(WINMESSAGE.SECOND);
  });
});
