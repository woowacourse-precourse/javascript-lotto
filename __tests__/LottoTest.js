const { ERROR_MESSAGE } = require('../src/constant/constant');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.SIX_NUMBERS_NOT_DUPLICATE);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.SIX_NUMBERS_NOT_DUPLICATE);
  });

  test.each([
    [[1, 2, '3t', 4, 5, 6]],
    [[1, '1e10', 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, ' 6']],
    [[1, 2.3, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, -1000]],
  ])(
    '로또 번호에 %p 같이 정수가 아닌 다른 문자나 숫자, 공백이 들어있으면 예외가 발생한다.',
    (lottoNumber) => {
      expect(() => {
        new Lotto(lottoNumber);
      }).toThrow(ERROR_MESSAGE.ONLY_INPUT_INTEGER);
    }
  );

  test.each([[[1, 2, 3, 4, 5, 46]]])(
    '로또 번호에 %p 같이 1부터 45 사이가 아닌 다른 정수가 들어있으면 예외가 발생한다.',
    (lottoNumber) => {
      expect(() => {
        new Lotto(lottoNumber);
      }).toThrow(ERROR_MESSAGE.NUMBER_INVALID_RANGE);
    }
  );

  test.each([[[1, 2, 3, 4, 5, '06']]])(
    '로또 번호에 %p 같이 0으로 시작하는 값이 있을 경우 예외가 발생한다.',
    (lottoNumber) => {
      expect(() => {
        new Lotto(lottoNumber);
      }).toThrow(ERROR_MESSAGE.START_NUMBER_ZERO);
    }
  );
});
