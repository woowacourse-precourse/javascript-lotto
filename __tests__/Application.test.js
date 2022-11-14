const MissionUtils = require('@woowacourse/mission-utils');

const Application = require('../src/Application');

afterAll(() => {
  MissionUtils.Console.close();
});

const NUMBER_EXCEPTION_TEXT = '[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.';
const ARRAY_EXCEPTION_TEXT = '[ERROR] 전달된 인수는 배열 타입만 가능 합니다.';

describe('숫자 예외 검사 함수 테스트', () => {
  test('메소드 이름은 "validateNumber"로 정의된다.', () => {
    const METHOD_NAME = 'validateNumber';

    expect(Application.validateNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = NaN;

      Application.convertNumber(EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);

    expect(() => {
      const EXPECTED = 1000;

      Application.convertNumber(EXPECTED);
    }).not.toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('숫자 변환 함수 테스트', () => {
  test('메소드 이름은 "convertNumber"로 정의된다.', () => {
    const METHOD_NAME = 'convertNumber';

    expect(Application.convertNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수를 숫자로 변환시킨다.', () => {
    const EXPECTED = '111';
    const RECEIVED = 111;

    expect(Application.convertNumber(EXPECTED)).toEqual(RECEIVED);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = 'a1a1';

      Application.convertNumber(EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('구매 개수 파악 함수 테스트', () => {
  test('메소드 이름은 "purchaseCount"로 정의된다.', () => {
    const METHOD_NAME = 'purchaseCount';

    expect(Application.purchaseCount.name).toEqual(METHOD_NAME);
  });

  test('첫 번째 인수 24000, 두 번째 인수 1000을 전달하면 24를 반환한다.', () => {
    const EXPECTED = [24000, 1000];
    const RECEIVED = 24;

    expect(Application.purchaseCount(...EXPECTED)).toEqual(RECEIVED);
  });

  test('첫 번째 인수, 두 번째 인수 모두 숫자로 변환이 가능하다.', () => {
    const EXPECTED = ['24000', '1000'];
    const RECEIVED = 24;

    expect(Application.purchaseCount(...EXPECTED)).toEqual(RECEIVED);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    const EXPECTED = ['1111', 's'];

    expect(() => {
      Application.purchaseCount(...EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);
  });

  test('나누어 떨어지지 않는 경우 예외 처리한다.', () => {
    const EXPECTED = [1100, 1000];

    expect(() => {
      Application.purchaseCount(...EXPECTED);
    }).toThrow();
  });
});

describe('수익률 계산 함수 테스트', () => {
  test('메소드 이름은 "earningsRate"로 정의된다.', () => {
    const METHOD_NAME = 'earningsRate';

    expect(Application.earningsRate.name).toEqual(METHOD_NAME);
  });

  test('8,000원을 사용하고 5,000원을 얻는다면 수익률 62.5를 반환한다.', () => {
    const EXPECTED = [8000, 5000];
    const RECEIVED = 62.5;

    expect(Application.earningsRate(...EXPECTED)).toEqual(RECEIVED);
  });

  test('5,000원을 사용하고 2,000,000,000원을 얻는다면 수익률 40000000를 반환한다.', () => {
    const EXPECTED = [5000, 2000000000];
    const RECEIVED = 40000000;

    expect(Application.earningsRate(...EXPECTED)).toEqual(RECEIVED);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = ['a1a1', 's'];

      Application.earningsRate(...EXPECTED);
    }).toThrow(NUMBER_EXCEPTION_TEXT);

    expect(() => {
      const EXPECTED = ['8000', '5000'];

      Application.earningsRate(...EXPECTED);
    }).not.toThrow(NUMBER_EXCEPTION_TEXT);
  });
});

describe('오름차순 정렬 함수 테스트', () => {
  test('메소드 이름은 "sortAscending"로 정의된다.', () => {
    const METHOD_NAME = 'sortAscending';

    expect(Application.sortAscending.name).toEqual(METHOD_NAME);
  });

  test('[42, 21, 23, 43, 41, 8]는 [8, 21, 23, 41, 42, 43] 형태로 정렬한다.', () => {
    const EXPECTED = [42, 21, 23, 43, 41, 8];
    const RECEIVED = [8, 21, 23, 41, 42, 43];

    expect(Application.sortAscending(EXPECTED)).toStrictEqual(RECEIVED);
  });

  test('전달된 인수는 배열이 아니면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = 1234;

      Application.sortAscending(EXPECTED);
    }).toThrow(ARRAY_EXCEPTION_TEXT);

    expect(() => {
      const EXPECTED = [1, 2, 3, 4];

      Application.sortAscending(EXPECTED);
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
      const EXPECTED = 12312;

      Application.validateArray(EXPECTED);
    }).toThrow(ARRAY_EXCEPTION_TEXT);

    expect(() => {
      const EXPECTED = [12312];

      Application.validateArray(EXPECTED);
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
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      const criterion = 6;
      const EXPECTED = [numbers, criterion];

      Application.validateArrayLength(...EXPECTED);
    }).toThrow('[ERROR]');

    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const criterion = 6;
      const EXPECTED = [numbers, criterion];

      Application.validateArrayLength(...EXPECTED);
    }).not.toThrow('[ERROR]');
  });

  test('배열의 요소가 7개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const criterion = 7;
      const EXPECTED = [numbers, criterion];

      Application.validateArrayLength(...EXPECTED);
    }).toThrow('[ERROR]');

    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      const criterion = 7;
      const EXPECTED = [numbers, criterion];

      Application.validateArrayLength(...EXPECTED);
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
      const EXPECTED = [1, 2, 3, 4, 5, 5];

      Application.checkArrayDuplicate(EXPECTED);
    }).toThrow('[ERROR]');

    expect(() => {
      const EXPECTED = [1, 2, 3, 4, 5, 6];

      Application.checkArrayDuplicate(EXPECTED);
    }).not.toThrow('[ERROR]');
  });
});

describe('랜덤 숫자 생성 함수 테스트', () => {
  test('메소드 이름은 "createUniqueNumbers"로 정의된다.', () => {
    const METHOD_NAME = 'createUniqueNumbers';

    expect(Application.createUniqueNumbers.name).toEqual(METHOD_NAME);
  });

  test('길이가 8인 배열을 반환한다.', () => {
    const start = 1;
    const end = 45;
    const length = 8;
    const EXPECTED = [start, end, length];
    const RECEIVED = 8;

    expect(Application.createUniqueNumbers(...EXPECTED)).toHaveLength(RECEIVED);
  });
});

describe('정수 판단 함수 테스트', () => {
  test('메소드 이름은 "validateInteger"로 정의된다.', () => {
    const METHOD_NAME = 'validateInteger';

    expect(Application.validateInteger.name).toEqual(METHOD_NAME);
  });

  test('나누어 떨어지지 않는 경우 예외 처리한다.', () => {
    expect(() => {
      const EXPECTED = 11.5;

      Application.validateInteger(EXPECTED);
    }).toThrow();

    expect(() => {
      const EXPECTED = 11;

      Application.validateInteger(EXPECTED);
    }).not.toThrow();
  });

  describe('개수 파악 함수 테스트', () => {
    test('메소드 이름은 "isMatcheCount"로 정의된다.', () => {
      const METHOD_NAME = 'isMatcheCount';

      expect(Application.isMatcheCount.name).toEqual(METHOD_NAME);
    });

    test('주어진 값이 3과 일치하면 true를 반환한다.', () => {
      const count = 3;
      const datumPoint = 3;
      const EXPECTED = [count, datumPoint];

      expect(Application.isMatcheCount(...EXPECTED)).toBeTruthy();
    });

    test('주어진 값이 3과 일치하지 않으면 false를 반환한다.', () => {
      const count = 4;
      const datumPoint = 3;
      const EXPECTED = [count, datumPoint];

      expect(Application.isMatcheCount(...EXPECTED)).toBeFalsy();
    });
  });

  describe('배열 복사 함수 테스트', () => {
    test('메소드 이름은 "copyArray"로 정의된다.', () => {
      const METHOD_NAME = 'copyArray';

      expect(Application.copyArray.name).toEqual(METHOD_NAME);
    });

    test('기존 배열과 새로운 배열은 서로 다른 참조를 가르킨다.', () => {
      const array = [1, 4, 5, 6];

      expect(Application.copyArray(array) !== array).toBeTruthy();
    });
  });

  describe('더하기 함수 테스트', () => {
    test('메소드 이름은 "add"로 정의된다.', () => {
      const METHOD_NAME = 'add';

      expect(Application.add.name).toEqual(METHOD_NAME);
    });

    test('1 + 1은 2를 반환한다.', () => {
      const ONE = 1;
      const RECEIVED = 2;

      expect(Application.add(ONE, ONE)).toBe(RECEIVED);
    });

    test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
      expect(() => {
        const ONE = 1;
        const WRONG = 'z';

        Application.add(ONE, WRONG);
      }).toThrow(NUMBER_EXCEPTION_TEXT);
    });
  });

  describe('곱하기 함수 테스트', () => {
    test('메소드 이름은 "multiplication"로 정의된다.', () => {
      const METHOD_NAME = 'multiplication';

      expect(Application.multiplication.name).toEqual(METHOD_NAME);
    });

    test('20 * 30은 600를 반환한다.', () => {
      const TWENRT = 20;
      const THIRTY = 30;
      const RECEIVED = 600;

      expect(Application.multiplication(TWENRT, THIRTY)).toBe(RECEIVED);
    });

    test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
      expect(() => {
        const ONE = 1;
        const WRONG = 'z';

        Application.multiplication(ONE, WRONG);
      }).toThrow(NUMBER_EXCEPTION_TEXT);
    });
  });

  describe('배열 요소 카운팅 함수 테스트', () => {
    test('메소드 이름은 "increase"로 정의된다.', () => {
      const METHOD_NAME = 'increase';

      expect(Application.increase.name).toEqual(METHOD_NAME);
    });

    test('요소의 4번째 인데스에 위치한 값을 증가시켜 [0, 0, 0, 0, 2]을 반환한다.', () => {
      const array = [0, 0, 0, 0, 0];
      const [POINT, INCREASE] = [4, 2];
      const EXPECTED = [array, POINT, INCREASE];
      const RECEIVED = [0, 0, 0, 0, 2];

      expect(Application.increase(...EXPECTED)).toStrictEqual(RECEIVED);
    });
  });
});
