const MissionUtils = require('@woowacourse/mission-utils');

const Function = require('../src/Function');

afterAll(() => {
  MissionUtils.Console.close();
});

const NUMBER_EXCEPTION_TEXT = '[ERROR] 올바른 숫자를 입력하세요.';
const ARRAY_EXCEPTION_TEXT = '[ERROR] 올바른 배열을 입력하세요.';

describe('function method tests', () => {
  test('wrong number', () => {
    expect(() => {
      const EXPECTED = NaN;
      Function.convertNumber(EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('check how many lotto to buy', () => {
  test('input: 18000 output: 18', () => {
    const EXPECTED = [18000, 1000];
    const RECEIVED = 18;
    expect(Function.countLotto(...EXPECTED)).toEqual(RECEIVED);
  });
  test('ERROR', () => {
    const EXPECTED = ['1234', 'qwerty'];
    expect(() => {
      Function.countLotto(...EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });
  test('indivisible', () => {
    const EXPECTED = [1234, 1000];
    expect(() => {
      Function.countLotto(...EXPECTED);
    }).toThrow();
  });
});

describe('earning rate', () => {
  test('input: 8,000 and 5,000 output: 62.5', () => {
    const EXPECTED = [8000, 5000];
    const RECEIVED = 62.5;
    expect(Function.earning(...EXPECTED)).toEqual(RECEIVED);
  });
  test('earning rate check', () => {
    const EXPECTED = [5000, 2000000000];
    const RECEIVED = 40000000;
    expect(Function.earning(...EXPECTED)).toEqual(RECEIVED);
  });
  test('error', () => {
    expect(() => {
      const EXPECTED = ['1234', 'xyz'];
      Function.earning(...EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('sorting', () => {
  test('sortAscending', () => {
    const EXPECTED = [41, 8, 43, 23, 42, 21];
    const RECEIVED = [8, 21, 23, 41, 42, 43];
    expect(Function.sortAscending(EXPECTED)).toStrictEqual(RECEIVED);
  });

  test('error', () => {
    expect(() => {
      const EXPECTED = 1234;
      Function.sortAscending(EXPECTED);
    }).toThrow(ARRAY_EXCEPTION_TEXT);
    expect(() => {
      const EXPECTED = [1, 2, 3, 4];
      Function.sortAscending(EXPECTED);
    }).not.toThrow(ARRAY_EXCEPTION_TEXT);
  });
});

describe('array test', () => {
  test('not an array.', () => {
    expect(() => {
      const EXPECTED = 1234;
      Function.checkArray(EXPECTED);
    }).toThrow(ARRAY_EXCEPTION_TEXT);
    expect(() => {
      const EXPECTED = [1234];
      Function.checkArray(EXPECTED);
    }).not.toThrow(ARRAY_EXCEPTION_TEXT);
  });
});

describe('array duplicate', () => {
  test('duplicate.', () => {
    expect(() => {
      const EXPECTED = [1, 2, 3, 4, 5, 1];
      Function.checkArrayDuplicate(EXPECTED);
    }).toThrow('[ERROR]');
  });
});

