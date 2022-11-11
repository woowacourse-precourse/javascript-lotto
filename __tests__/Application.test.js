const Application = require('../src/Application');

const NUMBER_EXCEPTION_TEXT = '[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.';
const ARRAY_EXCEPTION_TEXT = '[ERROR] 전달된 인수는 배열 타입만 가능 합니다.';

describe('숫자 예외 검사 함수 테스트', () => {
  test('메소드 이름은 "validateNumber"로 정의된다.', () => {
    const METHOD_NAME = 'validateNumber';

    expect(Application.validateNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.convertNumber(NaN);
    }).toThrow(NUMBER_EXCEPTION_TEXT);

    expect(() => {
      Application.convertNumber(1000);
    }).not.toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('숫자 변환 함수 테스트', () => {
  test('메소드 이름은 "convertNumber"로 정의된다.', () => {
    const METHOD_NAME = 'convertNumber';

    expect(Application.convertNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수를 숫자로 변환시킨다.', () => {
    expect(Application.convertNumber('111')).toEqual(111);

    expect(Application.convertNumber('222')).toEqual(222);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.convertNumber('a1a1');
    }).toThrow(NUMBER_EXCEPTION_TEXT);

    expect(() => {
      Application.convertNumber('b1b1');
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('구매 개수 파악 함수 테스트', () => {
  test('메소드 이름은 "purchaseCount"로 정의된다.', () => {
    const METHOD_NAME = 'purchaseCount';

    expect(Application.purchaseCount.name).toEqual(METHOD_NAME);
  });

  test('첫 번째 인수 24000, 두 번째 인수 1000을 전달하면 24를 반환한다.', () => {
    expect(Application.purchaseCount(24000, 1000)).toEqual(24);
  });

  test('첫 번째 인수, 두 번째 인수 모두 숫자로 변환이 가능하다.', () => {
    expect(Application.purchaseCount('24000', '1000')).toEqual(24);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.purchaseCount('1111', 's');
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });

  test('나누어 떨어지지 않는 경우 예외 처리한다.', () => {
    expect(() => {
      Application.purchaseCount(1100, 1000);
    }).toThrow();
  });
});

describe('수익률 계산 함수 테스트', () => {
  test('메소드 이름은 "earningsRate"로 정의된다.', () => {
    const METHOD_NAME = 'earningsRate';

    expect(Application.earningsRate.name).toEqual(METHOD_NAME);
  });

  test('8,000원을 사용하고 5,000원을 얻는다면 수익률 62.5를 반환한다.', () => {
    expect(Application.earningsRate(8000, 5000)).toEqual(62.5);
  });

  test('5,000원을 사용하고 2,000,000,000원을 얻는다면 수익률 40000000를 반환한다.', () => {
    expect(Application.earningsRate(5000, 2000000000)).toEqual(40000000);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.earningsRate('a1a1', 's');
    }).toThrow(NUMBER_EXCEPTION_TEXT);

    expect(() => {
      Application.earningsRate('8000', '5000');
    }).not.toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('오름차순 정렬 함수 테스트', () => {
  test('메소드 이름은 "sortAscending"로 정의된다.', () => {
    const METHOD_NAME = 'sortAscending';

    expect(Application.sortAscending.name).toEqual(METHOD_NAME);
  });

  test('[42, 21, 23, 43, 41, 8]는 [8, 21, 23, 41, 42, 43] 형태로 정렬한다.', () => {
    const expected = [42, 21, 23, 43, 41, 8];
    const received = [8, 21, 23, 41, 42, 43];

    expect(Application.sortAscending(expected)).toStrictEqual(received);
  });

  test('전달된 인수는 배열이 아니면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.sortAscending(1234);
    }).toThrow(ARRAY_EXCEPTION_TEXT);

    expect(() => {
      Application.sortAscending([1, 2, 3, 4]);
    }).not.toThrow(ARRAY_EXCEPTION_TEXT);
  });
});

describe('배열 예외 검사 함수 테스트', () => {
  test('메소드 이름은 "validateArray"로 정의된다.', () => {
    const METHOD_NAME = 'validateArray';

    expect(Application.validateArray.name).toEqual(METHOD_NAME);
  });

  test('전달된 인수는 배열이 아니면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.validateArray(12312);
    }).toThrow(ARRAY_EXCEPTION_TEXT);

    expect(() => {
      Application.validateArray([12312]);
    }).not.toThrow(ARRAY_EXCEPTION_TEXT);
  });
});

describe('배열 길이 예외 검사 함수 테스트', () => {
  test('메소드 이름은 "validateArrayLength"로 정의된다.', () => {
    const METHOD_NAME = 'validateArrayLength';

    expect(Application.validateArrayLength.name).toEqual(METHOD_NAME);
  });

  test('배열의 요소가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      Application.validateArrayLength([1, 2, 3, 4, 5, 6, 7], 6);
    }).toThrow('[ERROR]');

    expect(() => {
      Application.validateArrayLength([1, 2, 3, 4, 5, 6], 6);
    }).not.toThrow('[ERROR]');
  });

  test('배열의 요소가 7개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      Application.validateArrayLength([1, 2, 3, 4, 5, 6], 7);
    }).toThrow('[ERROR]');

    expect(() => {
      Application.validateArrayLength([1, 2, 3, 4, 5, 6, 7], 7);
    }).not.toThrow('[ERROR]');
  });
});

describe('배열 중복 검사 함수 테스트', () => {
  test('메소드 이름은 "checkArrayDuplicate"로 정의된다.', () => {
    const METHOD_NAME = 'checkArrayDuplicate';

    expect(Application.checkArrayDuplicate.name).toEqual(METHOD_NAME);
  });

  test('중복되는 요소를 발견하면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.checkArrayDuplicate([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');

    expect(() => {
      Application.checkArrayDuplicate([1, 2, 3, 4, 5, 6]);
    }).not.toThrow('[ERROR]');
  });
});

describe('랜덤 숫자 생성 함수 테스트', () => {
  test('메소드 이름은 "createUniqueNumbers"로 정의된다.', () => {
    const METHOD_NAME = 'createUniqueNumbers';

    expect(Application.createUniqueNumbers.name).toEqual(METHOD_NAME);
  });

  test('길이가 8인 배열을 반환한다.', () => {
    const START = 1;
    const END = 45;
    const LENGTH = 8;

    expect(Application.createUniqueNumbers(START, END, LENGTH)).toHaveLength(LENGTH);
  });
});
