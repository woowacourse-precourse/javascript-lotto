const { Console } = require('@woowacourse/mission-utils');

const utils = require('../src/utils/utils');
const { InvalidWinningNumbersInputError } = require('../src/lib/errors');

describe('숫자 이외의 문자를 잘 잡아내는지 테스트한다.', () => {
  test('구입 금액에 숫자 이외의 값이 있다면 true를 반환한다.', () => {
    expect(utils.hasChar('1oo0')).toEqual(true);
    expect(utils.hasChar('1dollar')).toEqual(true);
    expect(utils.hasChar('삼만사천원')).toEqual(true);
    expect(utils.hasChar('5천원')).toEqual(true);
    expect(utils.hasChar('만원')).toEqual(true);
    expect(utils.hasChar('4000_')).toEqual(true);
    expect(utils.hasChar('1000원')).toEqual(true);
    expect(utils.hasChar('1000won')).toEqual(true);
    expect(utils.hasChar('anything')).toEqual(true);
    expect(utils.hasChar('3 00 0')).toEqual(true);
    expect(utils.hasChar('3 0 0')).toEqual(true);
    expect(utils.hasChar('$1000')).toEqual(true);
    expect(utils.hasChar('1000$')).toEqual(true);
    expect(utils.hasChar('10,000')).toEqual(true);
    expect(utils.hasChar('100,000')).toEqual(true);
    expect(utils.hasChar('1,000')).toEqual(true);
    expect(utils.hasChar('u12')).toEqual(true);
    expect(utils.hasChar('1 2')).toEqual(true);
    expect(utils.hasChar('3ee')).toEqual(true);
    expect(utils.hasChar('asdb')).toEqual(true);
    expect(utils.hasChar('34 5')).toEqual(true);
    expect(utils.hasChar('bcd 123')).toEqual(true);
    expect(utils.hasChar(' 13 0')).toEqual(true);
  });

  test('구입 금액이 공백 문자열일경우 숫자 이외의 값으로 처리하여 true를 반환한다. ', () => {
    expect(utils.hasChar('')).toEqual(true);
    expect(utils.hasChar('  ')).toEqual(true);
    expect(utils.hasChar('    ')).toEqual(true);
    expect(utils.hasChar('       ')).toEqual(true);
    expect(utils.hasChar('           ')).toEqual(true);
  });
});

describe('숫자와 쉼표 이외의 문자를 잘 잡아내는지 테스트한다.', () => {
  test('문자열에 쉼표와 숫자 이외의 문자가 있다면 true를 반환한다.', () => {
    expect(utils.hasCharExceptComma('1,2,3,4w,5')).toEqual(true);
    expect(utils.hasCharExceptComma('1,2,ww,wer,3,45')).toEqual(true);
    expect(utils.hasCharExceptComma('a,b,c,d,e,f')).toEqual(true);
    expect(utils.hasCharExceptComma('one,2,3,4,5,six')).toEqual(true);
    expect(utils.hasCharExceptComma('one,two,three,four,five,six')).toEqual(true);
    expect(utils.hasCharExceptComma('1,2,#,4,5,6')).toEqual(true);
    expect(utils.hasCharExceptComma("1,2,',4,5,6")).toEqual(true);
    expect(utils.hasCharExceptComma('1,2,3,",5,6')).toEqual(true);
    expect(utils.hasCharExceptComma('1.2.3.4.5.6')).toEqual(true);
  });
});

describe('숫자가 해당 금액으로 나누어 떨어지는 숫자인지 테스트한다.', () => {
  test('금액이 1000원으로 나눠떨어지지 않으면 false를 반환한다.', () => {
    expect(utils.isDivisible('1500', 1000)).toEqual(false);
    expect(utils.isDivisible('2100', 1000)).toEqual(false);
    expect(utils.isDivisible('800', 1000)).toEqual(false);
    expect(utils.isDivisible('100', 1000)).toEqual(false);
    expect(utils.isDivisible('10', 1000)).toEqual(false);
    expect(utils.isDivisible('50500', 1000)).toEqual(false);
    expect(utils.isDivisible('3333', 1000)).toEqual(false);
    expect(utils.isDivisible('37400', 1000)).toEqual(false);
    expect(utils.isDivisible('10000001', 1000)).toEqual(false);
  });

  test('금액이 0일경우 false를 반환한다.', () => {
    expect(utils.isDivisible(0, 1000)).toEqual(false);
    expect(utils.isDivisible('0', 1000)).toEqual(false);
    expect(utils.isDivisible('00', 1000)).toEqual(false);
    expect(utils.isDivisible('000', 1000)).toEqual(false);
    expect(utils.isDivisible('    0   ', 1000)).toEqual(false);
    expect(utils.isDivisible('    00   ', 1000)).toEqual(false);
    expect(utils.isDivisible('    00000', 1000)).toEqual(false);
  });
});

describe('문자열을 쉼표로 구분해 배열로 만드는 기능을 테스트한다.', () => {
  test('문자열에 쉼표가 연속적으로 존재한다면 예외가 발생한다.', () => {
    expect(() => {
      utils.makeSplit('1,,2,3,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,,3,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,4,,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,4,5,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,,,4,5,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,,,2,3,4,5,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,,2,,3,,4,5,,');
    }).toThrow(new InvalidWinningNumbersInputError());
  });

  test('문자열이 쉼표로 시작하거나 쉼표로 끝나면 예외가 발생한다.', () => {
    expect(() => {
      utils.makeSplit(',1,2,3,4,5,6');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,4,5,6,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit(',1,2,3,4,5,6,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit(',,1,2,3,4,5,6');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,4,5,6,,');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit(',,1,2,3,4,5,6,,');
    }).toThrow(new InvalidWinningNumbersInputError());
  });

  test('문자열에 두 쉼표가 공백을 사이에 두고 있다면 예외가 발생한다.', () => {
    expect(() => {
      utils.makeSplit('1, ,2,3,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2, ,3,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3, ,4,5');
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeSplit('1,2,3,4, ,5');
    }).toThrow(new InvalidWinningNumbersInputError());
  });
});

describe('문자 배열을 숫자 배열로 바꾸는 기능을 테스트한다.', () => {
  test('숫자와 숫자 사이에 공백이 있다면 예외가 발생한다.', () => {
    expect(() => {
      utils.makeNumberArray(['1', '2 3', '3', '4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1', '2  3', '3', '4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1', '23', '3   5', '4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1', '23', '3', '4 4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1', '3', '22', '4 4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1', '3', '2 2', '4 4', '5']);
    }).toThrow(new InvalidWinningNumbersInputError());
    expect(() => {
      utils.makeNumberArray(['1 0', '3 0', '2 2', '4 4', '5 8']);
    }).toThrow(new InvalidWinningNumbersInputError());
  });

  test('배열 요소 중 연속된 숫자의 앞뒤에 있는 공백은 제거한 후 숫자 배열을 반환한다.', () => {
    expect(utils.makeNumberArray([' 1', '2', '3  ', '4 ', ' 5  '])).toEqual([1, 2, 3, 4, 5]);
    expect(utils.makeNumberArray(['  1', '  2', '  3', '  4', '  5'])).toEqual([1, 2, 3, 4, 5]);
    expect(utils.makeNumberArray(['1  ', '2  ', '3  ', '4  ', '5  '])).toEqual([1, 2, 3, 4, 5]);
    expect(utils.makeNumberArray([' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 '])).toEqual([1, 2, 3, 4, 5]);
    expect(utils.makeNumberArray([' 12 ', ' 23 ', ' 32 ', ' 41 ', ' 45 '])).toEqual([12, 23, 32, 41, 45]);
  });
});

describe('숫자를 오름차순 정렬하는 기능이 제대로 작동하는지 테스트한다.', () => {
  test('배열의 숫자들을 오름차순 정렬하여 반환한다.', () => {
    expect(utils.ascendingSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(utils.ascendingSort([3, 7, 1, 9, 11, 5])).toEqual([1, 3, 5, 7, 9, 11]);
    expect(utils.ascendingSort([1, 10, 11, 0, 9, 7])).toEqual([0, 1, 7, 9, 10, 11]);
    expect(utils.ascendingSort([-1, -11, -4, -41, -10, 0])).toEqual([-41, -11, -10, -4, -1, 0]);
    expect(utils.ascendingSort([0, 1, 11, 21, 12, 3, 222])).toEqual([0, 1, 3, 11, 12, 21, 222]);
  });
});

describe('소수점 둘째자리에서 반올림 동작을 테스트한다.', () => {
  test('소수점 둘째자리에서 반올림한 값을 반환한다.', () => {
    expect(utils.roundToTwo(0.0015)).toEqual(0);
    expect(utils.roundToTwo(0.06115)).toEqual(0.1);
    expect(utils.roundToTwo(12453425.324)).toEqual(12453425.3);
    expect(utils.roundToTwo(1.05)).toEqual(1.1);
    expect(utils.roundToTwo(1.003)).toEqual(1);
    expect(utils.roundToTwo(62.987)).toEqual(63);
    expect(utils.roundToTwo(58.9)).toEqual(58.9);
    expect(utils.roundToTwo(67.0)).toEqual(67);
    expect(utils.roundToTwo(100.05)).toEqual(100.1);
    expect(utils.roundToTwo(0.000005)).toEqual(0);
    expect(utils.roundToTwo(1234.11)).toEqual(1234.1);
  });
});

Console.close();
