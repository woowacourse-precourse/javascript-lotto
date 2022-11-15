const Lotto = require('../src/Lotto');
const Purchase = require('../src/libs/Purchase');
const {
  isCommaBonus,
  isNotCommaPrize,
  isRangePrize,
  isRangeBonus,
  isSixLength,
  isOverlapBonus,
  isThousand,
} = require('../src/libs/Validations');
const BonusLotto = require('../src/libs/BonusLotto');

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
});

describe('로또 보너스 번호 클래스 예외 테스트', () => {
  test('보너스 번호와 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([1, 2, 3, 4, 5, 6], '1');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력에 쉼표로 구분 지어 여러 개를 입력한다면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([1, 2, 3, 4, 5, 6], '1,2');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력 시 사용자가 숫자의 범위를 벗어나게 작성한다면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([1, 2, 3, 4, 5, 6], '46');
    }).toThrow('[ERROR]');
  });
});

describe('구매 클래스 예외 테스트', () => {
  test('구입 금액이 1,000원 단위가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase(1500);
    }).toThrow('[ERROR]');
  });
});

describe('예외 함수 테스트', () => {
  test('(보너스 번호)문자열에 쉼표로 구분 지어 여러 개를 입력한다면 예외가 발생한다.', () => {
    expect(() => {
      isCommaBonus('7,8');
    }).toThrow('[ERROR]');
  });

  test('(당첨번호) 문자열에 쉼표를 이용해 구분 짓지 않는다면 예외가 발생한다.', () => {
    expect(() => {
      isNotCommaPrize('1 2 3 4 5 6');
    }).toThrow('[ERROR]');
  });

  test('당첨번호 입력 시 사용자가 숫자의 범위를 벗어나게 작성한다면 예외가 발생한다.', () => {
    expect(() => {
      isRangePrize([1, 23, 25, 27, 28, 46]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력 시 사용자가 숫자의 범위를 벗어나게 작성한다면 예외가 발생한다.', () => {
    expect(() => {
      isRangeBonus(46);
    }).toThrow('[ERROR]');
  });

  test('배열의 크기가 6이 아닐경우 예외가 발생한다.', () => {
    expect(() => {
      isSixLength([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('번호와 배열이 주어졌을 때 서로 중복되는 숫자가 있다면 예외가 발생한다.', () => {
    expect(() => {
      isOverlapBonus([1, 2, 3, 4, 5, 6], 2);
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 돈의 단위가 1,000으로 나누어지지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      isThousand(1500);
    }).toThrow('[ERROR]');
  });
});
