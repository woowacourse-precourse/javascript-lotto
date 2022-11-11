/* eslint-disable no-new */
const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

const ERROR_TEXT = '[ERROR]';

afterAll(() => {
  MissionUtils.Console.close();
});

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_TEXT);
  });

  test('배열이 아니면 예외를 발생한다.', () => {
    expect(() => {
      new Lotto(1, 2, 3, 4, 5, 6);
    }).toThrow(ERROR_TEXT);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_TEXT);
  });

  describe('로또 발행 메소드 테스트', () => {
    test('메소드 이름은 "createLotto"로 정의된다.', () => {
      const METHOD_NAME = 'createLotto';

      expect(Lotto.createLotto.name).toEqual(METHOD_NAME);
    });

    test('길이가 6인 배열을 반환한다.', () => {
      const LENGTH = 6;

      expect(Lotto.createLotto()).toHaveLength(LENGTH);
    });
  });

  describe('로또 구매 메소드 테스트', () => {
    test('메소드 이름은 "buyLotto"로 정의된다.', () => {
      const METHOD_NAME = 'buyLotto';

      expect(Lotto.buyLotto.name).toEqual(METHOD_NAME);
    });

    test('8000을 전달하면 배열 8개를 반환한다.', () => {
      expect(Lotto.buyLotto('8000')).toHaveLength(8);
    });

    test('요소의 길이는 6이다.', () => {
      expect(Lotto.buyLotto('8000')[0]).toHaveLength(6);
    });

    test('1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.', () => {
      expect(() => {
        Lotto.buyLotto('8800');
      }).toThrow(ERROR_TEXT);

      expect(() => {
        Lotto.buyLotto('8000');
      }).not.toThrow(ERROR_TEXT);
    });
  });

  describe('당첨 결과 메소드 테스트', () => {
    const boughtLotto = [
      [8, 21, 23, 41, 42, 43],
      [1, 2, 3, 4, 5, 9],
      [3, 5, 11, 16, 32, 38],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 6, 22, 45],
      [1, 3, 5, 6, 22, 45],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45]];
    const prize = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    test('메소드 이름은 "getLottoResult"로 정의된다.', () => {
      const METHOD_NAME = 'getLottoResult';
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult.name).toEqual(METHOD_NAME);
    });

    test('배열의 0번째 인덱스는 1 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[0]).toEqual(1);
    });

    test('배열의 1번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[1]).toEqual(2);
    });

    test('배열의 2번째 인덱스는 1 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[2]).toEqual(1);
    });

    test('배열의 3번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[3]).toEqual(2);
    });

    test('배열의 4번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[4]).toEqual(2);
    });
  });

  describe('개수 파악 메소드 테스트', () => {
    test('메소드 이름은 "isMatcheCount"로 정의된다.', () => {
      const METHOD_NAME = 'isMatcheCount';

      expect(Lotto.isMatcheCount.name).toEqual(METHOD_NAME);
    });
  });
});
