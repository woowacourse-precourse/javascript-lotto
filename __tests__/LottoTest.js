const Lotto = require('../src/Lotto');
const Rank = require('../src/Rank');
const {
  validateLottoBudget,
  validateBonusNumber,
  validateBonusNumberNotInLottoNumber,
} = require('../src/validate');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 범위 밖 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 6개의 숫자로 이루어진다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('validate 테스트', () => {
  test('구매 비용이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateLottoBudget('abc');
    }).toThrow('[ERROR]');
  });

  test('구매 비용이 음수면 예외가 발생한다.', () => {
    expect(() => {
      validateLottoBudget(-1000);
    }).toThrow('[ERROR]');
  });

  test('구매 비용이 1000으로 나누어떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      validateLottoBudget(1500);
    }).toThrow('[ERROR]');
  });

  test('보너스 볼이 여러 개면 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('보너스 볼이 범위 밖 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber(46);
    }).toThrow('[ERROR]');
  });

  test('당첨 로또가 보너스 볼과 겹치면 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumberNotInLottoNumber(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
