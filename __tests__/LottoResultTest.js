const { ERROR_MESSAGE } = require("../src/constants");
const LottoMachine = require("../src/LottoMachine");
const LottoResult = require("../src/LottoResult");

describe("로또결과 클래스 테스트", () => {
  test("일치한 로또 번호 수를 반환한다.", () => {
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, new LottoMachine(7000));
    const result = lottoResult.checkWinning([1, 12, 34, 45, 23, 16]);
    expect(result).toEqual(3);
  });

  test("보너스 번호가 일치한지 반환한다.", () => {
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, new LottoMachine(7000));
    const result = lottoResult.checkBonus([1, 12, 34, 45, 23, 16]);
    expect(result).toEqual(false);
  });
  
  test("일치한 숫자에 따라 랭크를 반환한다.", () => {
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, new LottoMachine(7000));
    const result = lottoResult.checkRank(6);
    expect(result).toEqual('RANK_1');
  });

  test("당첨 번호에 중복이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 3], 7, new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.WINNING_LOTTO_DUPLICATION_ERROR);
  });

  test("보너스 번호에 중복이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 4], 4, new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR);
  });
  
  test("당첨 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 47], 4, new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
  });
  
  test("보너스 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 4], 47, new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
  });

  test("당첨 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 'hello'], 4, new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.NUMBER_IS_NAN_ERROR);
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult([1, 12, 34, 2, 3, 4], 'hello', new LottoMachine(7000));
    }).toThrow(ERROR_MESSAGE.NUMBER_IS_NAN_ERROR);
  });
});
