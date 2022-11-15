const WinningNumbers = require('../src/WinningNumbers');

const { ERROR } = require('../src/lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

describe('로또 당첨 번호 클래스 테스트', () => {
  describe('입력한 당첨 번호에 대한 테스트', () => {
    test('입력한 당첨 번호에 숫자가 아닌 문자가 존재하는 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumbers().initWinningNumbers('1,2,3,4,5,a');
      }).toThrow(ERROR.WINNING_NUMBERS.NOT_NUMBER);
    });

    test(`입력한 당첨 번호의 개수가 ${LOTTO.NUMBER_COUNT}보다 큰 경우 예외가 발생한다.`, () => {
      expect(() => {
        new WinningNumbers().initWinningNumbers('1,2,3,4,5,6,7');
      }).toThrow(ERROR.WINNING_NUMBERS.NOT_LOTTO_LENGTH);
    });

    test(`입력한 당첨 번호의 개수가 ${LOTTO.NUMBER_COUNT}보다 작은 경우 예외가 발생한다.`, () => {
      expect(() => {
        new WinningNumbers().initWinningNumbers('1,2,3,4,5');
      }).toThrow(ERROR.WINNING_NUMBERS.NOT_LOTTO_LENGTH);
    });

    test('입력한 당첨 번호가 로또 번호의 범위를 벗어나는 경우 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers().initWinningNumbers('1,2,3,4,5,46');
      }).toThrow(ERROR.WINNING_NUMBERS.OUT_OF_BOUND);
    });

    test('입력한 당첨 번호에 중복이 존재하는 경우 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers().initWinningNumbers('1,2,3,4,5,5');
      }).toThrow(ERROR.WINNING_NUMBERS.DUPLICATE);
    });

    test('올바른 당첨 번호가 입력되면 당첨 번호를 저장한다.', () => {
      const winningNumbers = new WinningNumbers();
      winningNumbers.initWinningNumbers('1,2,3,4,5,6');
      const result = winningNumbers.winningNumbers;

      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('입력한 보너스 번호에 대한 테스트 ', () => {
    test('입력한 보너스 번호에 문자가 포함된 경우 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers().initBonusNumber('1a');
      }).toThrow(ERROR.BONUS_NUMBER.NOT_NUMBER);
    });

    test('입력한 보너스 번호가 로또 번호의 범위를 벗어나는 경우 예외가 발생한다.', () => {
      expect(() => {
        new WinningNumbers().initBonusNumber('46');
      }).toThrow(ERROR.BONUS_NUMBER.OUT_OF_BOUND);
    });

    test('입력한 보너스 번호가 당첨 번호와 중복되는 경우 예외가 발생한다.', () => {
      expect(() => {
        const winningNumbers = new WinningNumbers();
        winningNumbers.initWinningNumbers('1,2,3,4,5,6');
        winningNumbers.initBonusNumber('1');
      }).toThrow(ERROR.BONUS_NUMBER.DUPLICATE);
    });

    test('올바른 보너스 번호가 입력되면 보너스 번호를 저장한다.', () => {
      const winningNumbers = new WinningNumbers();
      winningNumbers.initWinningNumbers('1,2,3,4,5,6');
      winningNumbers.initBonusNumber('7');
      const result = winningNumbers.bonusNumber;

      expect(result).toEqual(7);
    });
  });
});
