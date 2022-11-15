const Purchase = require('../src/libs/Purchase');
const Validations = require('../src/libs/Validations');
const Lotto = require('../src/Lotto');

describe('로또 클래스 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호와 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNum('1');
    }).toThrow('[ERROR]');
  });
});

describe('로또 구매 클래스 예외 테스트', () => {
  test('구입 금액이 1,000원 단위가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase(1500);
    }).toThrow('[ERROR]');
  });
});

describe('예외 함수 테스트', () => {
  test('보너스 번호 입력에 쉼표로 구분 지어 여러 개를 입력한다면 예외가 발생한다.', () => {
    expect(() => {
      Validations.isCommaBonus('7,8');
    }).toThrow('[ERROR]');
  });

  test('당첨번호 입력 시 사용자가 쉼표를 이용해 구분 짓지 않는다면 예외가 발생한다.', () => {
    expect(() => {
      Validations.isNotCommaPrize('1 2 3 4 5 6');
    }).toThrow('[ERROR]');
  });

  test('당첨번호 입력 시 사용자가 숫자의 범위를 벗어나게 작성한다면 예외가 발생한다.', () => {
    expect(() => {
      Validations.isRangePrize([1, 23, 25, 27, 28, 46]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력 시 사용자가 숫자의 범위를 벗어나게 작성한다면 예외가 발생한다.', () => {
    expect(() => {
      Validations.isRange(46);
    }).toThrow('[ERROR]');
  });

  test('배열의 크기가 6이 아닐경우 예외가 발생한다.', () => {
    expect(() => {
      Validations.isSixLength([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('번호와 배열이 주어졌을 때 서로 중복되는 숫자가 있다면 예외가 발생한다.', () => {
    expect(() => {
      Validations.isOverlapBonus([1, 2, 3, 4, 5, 6], 2);
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 돈의 단위가 1,000으로 나누어지지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      Validations.isThousand(1500);
    }).toThrow('[ERROR]');
  });
});
