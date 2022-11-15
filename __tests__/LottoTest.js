const Lotto = require('../src/Lotto');
const { PRIZE } = require('../src/Constants');

describe('Lotto 클래스 - 당첨 번호 유효성 테스트', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
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

  test('로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.2, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자 1 ~ 45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 55, 6]);
    }).toThrow('[ERROR]');
  });

  test('위의 예외 케이스가 아닐 경우 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow('[ERROR]');
  });
});

describe('Lotto 클래스 - 보너스 번호 유효성 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('보너스 번호가 하나의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lotto.validateBonusNumber(Number('1,2'));
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lotto.validateBonusNumber(1.1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 ~ 45 사이의 범위에 있지 않으면 예외가 발생한다.', () => {
    expect(() => {
      lotto.validateBonusNumber(47);
    }).toThrow('[ERROR]');
    expect(() => {
      lotto.validateBonusNumber(-1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호에 이미 포함된 숫자인 경우 예외가 발생한다.', () => {
    expect(() => {
      lotto.validateBonusNumber(1);
    }).toThrow('[ERROR]');
  });

  test('위의 예외 케이스가 아닐 경우 예외가 발생하지 않는다.', () => {
    expect(() => {
      lotto.validateBonusNumber(7);
    }).not.toThrow('[ERROR]');
  });
});

describe('Lotto 클래스 - 로또 번호 비교 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  lotto.validateBonusNumber(7);

  test('당첨 번호와 일치하는 숫자의 개수를 셀 수 있다.', () => {
    expect(lotto.countMatchingNumber([11, 12, 13, 14, 15, 16])).toEqual(0);
    expect(lotto.countMatchingNumber([1, 12, 13, 14, 15, 16])).toEqual(1);
    expect(lotto.countMatchingNumber([1, 2, 13, 14, 15, 16])).toEqual(2);
    expect(lotto.countMatchingNumber([1, 2, 3, 14, 15, 16])).toEqual(3);
    expect(lotto.countMatchingNumber([1, 2, 3, 4, 15, 16])).toEqual(4);
    expect(lotto.countMatchingNumber([1, 2, 3, 4, 5, 16])).toEqual(5);
    expect(lotto.countMatchingNumber([1, 2, 3, 4, 5, 6])).toEqual(6);
  });

  test('로또 결과(순위)를 도출할 수 있다.', () => {
    expect(lotto.checkPrize([11, 12, 13, 14, 15, 16])).toBeNull();
    expect(lotto.checkPrize([1, 12, 13, 14, 15, 16])).toBeNull();
    expect(lotto.checkPrize([1, 2, 13, 14, 15, 16])).toBeNull();
    expect(lotto.checkPrize([1, 2, 3, 14, 15, 16])).toEqual(PRIZE.fifth);
    expect(lotto.checkPrize([1, 2, 3, 4, 15, 16])).toEqual(PRIZE.fourth);
    expect(lotto.checkPrize([1, 2, 3, 4, 5, 16])).toEqual(PRIZE.third);
    expect(lotto.checkPrize([1, 2, 3, 4, 5, 7])).toEqual(PRIZE.second);
    expect(lotto.checkPrize([1, 2, 3, 4, 5, 6])).toEqual(PRIZE.first);
  });
});
