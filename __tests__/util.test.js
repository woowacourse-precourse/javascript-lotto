const App = require('../src/App');
const utils = require('../src/utils/utils');
const { InvalidWinningNumbersInputError, InvalidBonusNumberInputError } = require('../src/lib/errors');

describe('입력한 구매 금액이 유효한 값인지 검사한다.', () => {
  test('금액에 숫자 이외의 값이 있다면 true를 반환한다.', () => {
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
  });

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

  test('금액이 0일경우', () => {
    expect(utils.isDivisible(0, 1000)).toEqual(false);
    expect(utils.isDivisible('0', 1000)).toEqual(false);
    expect(utils.isDivisible('00', 1000)).toEqual(false);
    expect(utils.isDivisible('000', 1000)).toEqual(false);
    expect(utils.isDivisible('    0   ', 1000)).toEqual(false);
    expect(utils.isDivisible('    00   ', 1000)).toEqual(false);
    expect(utils.isDivisible('    00000', 1000)).toEqual(false);
  });

  test('금액이 공백 문자열일경우', () => {
    expect(utils.hasChar('')).toEqual(true);
    expect(utils.hasChar('  ')).toEqual(true);
    expect(utils.hasChar('       ')).toEqual(true);
    expect(utils.hasChar('           ')).toEqual(true);
  });
});

describe('입력받은 당첨 번호(Winning Number)가 유효한 입력인지 검사한다.', () => {
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

describe('입력받은 보너스 번호가 유효한 입력인지 검사한다.', () => {
  test('입력에 문자가 있다면 에러가 발생한다.', () => {
    const app = new App();
    expect(() => {
      app.validateBonusNumber('u12');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('1 2');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('3ee');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('asdb');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('34 5');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('bcd 123');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber(' 13 0');
    }).toThrow(new InvalidBonusNumberInputError());
  });

  test('입력이 빈 또는 공백 문자열이라면 에러가 발생한다.', () => {
    const app = new App();
    expect(() => {
      app.validateBonusNumber('  ');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('    ');
    }).toThrow(new InvalidBonusNumberInputError());
    expect(() => {
      app.validateBonusNumber('');
    }).toThrow(new InvalidBonusNumberInputError());
  });
});

describe('숫자를 오름차순 정렬하는 기능이 제대로 작동하는지 검사한다.', () => {
  test('배열의 숫자들을 오름차순 정렬하여 반환한다.', () => {
    expect(utils.ascendingSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(utils.ascendingSort([3, 7, 1, 9, 11, 5])).toEqual([1, 3, 5, 7, 9, 11]);
    expect(utils.ascendingSort([1, 10, 11, 0, 9, 7])).toEqual([0, 1, 7, 9, 10, 11]);
    expect(utils.ascendingSort([-1, -11, -4, -41, -10, 0])).toEqual([-41, -11, -10, -4, -1, 0]);
    expect(utils.ascendingSort([0, 1, 11, 21, 12, 3, 222])).toEqual([0, 1, 3, 11, 12, 21, 222]);
  });
});
