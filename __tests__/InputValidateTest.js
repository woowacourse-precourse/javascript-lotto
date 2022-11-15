const Display = require('../src/Display');
const {
  isDuplicatedAndThrowError,
  isOutOfRangeAndThrowError,
  isOutOfVolumeAndThrowError,
  validatePayment,
  validateWinningNumbersInput,
  validateBonusNumberInput,
} = require('../src/utils/inputValidate');

describe('사용자 입력값 에러 테스트', () => {
  test('중복 여부를 확인한다.', () => {
    expect(() => {
      isDuplicatedAndThrowError([1, 2, 3, 4, 5, 5, 7]);
    }).toThrow(Display.error('DUPLICATED'));
  });

  test('숫자 범위는 1-45까지이며 유효하지 않으면 예외가 발생한다', () => {
    expect(() => {
      isOutOfRangeAndThrowError([45, 1, 2, 3, 4, 56]);
    }).toThrow(Display.error('OUT_OF_RANGE'));
  });

  test('주어진 숫자 입력값 길이와 동일하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      isOutOfVolumeAndThrowError([1, 2, 3, 4, 5, 6], 5);
    }).toThrow(Display.error('OUT_OF_VOLUME'));
  });

  test('로또 구매량은 1000단위로 나눠 떨어지지 않으면 예외가 발생한다.', () => {
    const inputs = [2001, 3300, 800, 960];

    inputs.forEach((input) => {
      expect(() => {
        validatePayment(input);
      }).toThrow(Display.error('UNACCEPTABLE_PAYMENT'));
    });
  });

  test('사용자의 당첨 번호 입력값이 유효하지 않으면 예외가 발생한다.', () => {
    const inputs = ['1,2', '6,1,1,6,7,10', '50,40,30,20,10,1'];
    const result = ['OUT_OF_VOLUME', 'DUPLICATED', 'OUT_OF_RANGE'];

    inputs.forEach((input, i) => {
      expect(() => {
        validateWinningNumbersInput(input);
      }).toThrow(Display.error(result[i]));
    });
  });

  test('사용자의 보너스 번호 입력값이 유효하지 않으면 예외가 발생한다', () => {
    const inputs = ['34, 9', '50'];
    const results = ['OUT_OF_VOLUME', 'OUT_OF_RANGE'];

    inputs.forEach((input, i) => {
      expect(() => {
        validateBonusNumberInput(input);
      }).toThrow(Display.error(results[i]));
    });
  });
});
