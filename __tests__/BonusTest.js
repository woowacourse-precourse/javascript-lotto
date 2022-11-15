const Bonus = require('../src/Bonus');
const { ERROR_MESSAGE } = require('../src/constant/constant');

describe('보너스 클래스 테스트', () => {
  test.each([[' 3'], ['1e10'], ['hi']])(
    '보너스 번호에 %p 같이 정수가 아닌 다른 문자나 숫자, 공백이 들어있으면 예외가 발생한다.',
    (bonusNumber) => {
      expect(() => {
        new Bonus(bonusNumber);
      }).toThrow(ERROR_MESSAGE.ONLY_INPUT_INTEGER);
    }
  );

  test.each([[46]])(
    '보너스 번호에 %p 같이 1부터 45 사이가 아닌 다른 정수가 들어있으면 예외가 발생한다.',
    (bonusNumber) => {
      expect(() => {
        new Bonus(bonusNumber);
      }).toThrow(ERROR_MESSAGE.NUMBER_INVALID_RANGE);
    }
  );

  test.each([['06']])(
    '보너스 번호에 %p 같이 0으로 시작하는 값이 있을 경우 예외가 발생한다.',
    (bonusNumber) => {
      expect(() => {
        new Bonus(bonusNumber);
      }).toThrow(ERROR_MESSAGE.START_NUMBER_ZERO);
    }
  );

  test.each([[6, [1, 2, 3, 4, 5, 6]]])(
    '보너스 번호(%s)가 로또 번호인 %p 중에 하나와 중복일 경우 예외가 발생한다.',
    (bonusNumber, lottoNumber) => {
      expect(() => {
        new Bonus(bonusNumber, lottoNumber);
      }).toThrow(ERROR_MESSAGE.SAME_LOTTO_NUMBER);
    }
  );
});
