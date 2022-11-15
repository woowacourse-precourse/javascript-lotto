const { Console } = require('@woowacourse/mission-utils');

const { validateAmount, validateWinningNumbers, validateBonusNumber } = require('../src/utils/validateInput');

describe('구입 금액이 올바른 입력인지 테스트한다.', () => {
  test('숫자 이외의 문자가 포함된 구입 금액이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateAmount('1000원');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('1000won');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('1 0 0 0');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('1,000');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('10 00');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('$1000');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('천원');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('1천원');
    }).toThrow('[ERROR]');
  });

  test('1000으로 나누어 떨어지지 않는 구입 금액이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateAmount('1234');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('3200');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('55001');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('10800');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('56100');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('10010');
    }).toThrow('[ERROR]');
  });

  test('1000원 아래의 금액이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateAmount('900');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('500');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('50');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('10');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('1');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('0');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('-1000');
    }).toThrow('[ERROR]');
  });

  test('빈 문자열이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateAmount('');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('     ');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount('          ');
    }).toThrow('[ERROR]');
    expect(() => {
      validateAmount(' ');
    }).toThrow('[ERROR]');
  });
});

describe('당첨 번호가 쉼표와 숫자로만 이루어진 입력인지 테스트한다.', () => {
  test('숫자와 쉼표 이외의 문자가 포함된 당첨 번호가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumbers('1.2.3.4.5.6');
    }).toThrow('[ERROR]');
    expect(() => {
      validateWinningNumbers('1/2/3/4/5/6');
    }).toThrow('[ERROR]');
  });
});

describe('보너스 숫자가 올바른 입력인지 테스트한다.', () => {
  test('숫자 이외의 문자가 포함된 보너스 숫자가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '34번');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], 'one');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '12!!');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '@34');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '3 5');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '10 0');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '"10"');
    }).toThrow('[ERROR]');
  });

  test('공백 문자열이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '   ');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '         ');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 중복된 숫자가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '1');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '2');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '3');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '4');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '5');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '6');
    }).toThrow('[ERROR]');
  });

  test('범위를 벗어나는 숫자가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '0');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '46');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '440');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '-1');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '123');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '441');
    }).toThrow('[ERROR]');
    expect(() => {
      validateBonusNumber([1, 2, 3, 4, 5, 6], '-43');
    }).toThrow('[ERROR]');
  });
});

Console.close();
