/* eslint-disable no-new */
const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

const ERROR_TEXT = '[ERROR]';

afterAll(() => {
  MissionUtils.Console.close();
});

describe('로또 클래스 테스트', () => {
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

    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        const lotto = new Lotto([[1, 2, 3, 4, 5, 6, 7]]);
        lotto.getLottoResult();
      }).toThrow(ERROR_TEXT);
    });

    test('배열이 아니면 예외를 발생한다.', () => {
      expect(() => {
        const lotto = new Lotto(1, 2, 3, 4, 5, 6);
        lotto.getLottoResult();
      }).toThrow(ERROR_TEXT);
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        const lotto = new Lotto([[1, 2, 3, 4, 5, 5]]);
        lotto.getLottoResult();
      }).toThrow(ERROR_TEXT);
    });

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

    describe('3개 일치 파악 메소드', () => {
      test('메소드 이름은 "isThreeMatche"로 정의된다.', () => {
        const METHOD_NAME = 'isThreeMatche';

        expect(Lotto.isThreeMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 3과 일치하면 [1, 0, 0, 0, 0, 0]를 반환한다.', () => {
        const COUNT = 3;
        const target = [0, 0, 0, 0, 0, 0];
        const expected = [1, 0, 0, 0, 0, 0];

        expect(Lotto.isThreeMatche(COUNT, target)).toStrictEqual(expected);
      });
    });

    describe('4개 일치 파악 메소드', () => {
      test('메소드 이름은 "isFourMatche"로 정의된다.', () => {
        const METHOD_NAME = 'isFourMatche';

        expect(Lotto.isFourMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 4와 일치하면 true를 반환한다.', () => {
        const COUNT = 4;

        expect(Lotto.isFourMatche(COUNT)).toBeTruthy();
      });
    });

    describe('5개 일치 파악 메소드', () => {
      test('메소드 이름은 "isFiveMatche"로 정의된다.', () => {
        const METHOD_NAME = 'isFiveMatche';

        expect(Lotto.isFiveMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 5와 일치하면 true를 반환한다.', () => {
        const COUNT = 5;

        expect(Lotto.isFiveMatche(COUNT)).toBeTruthy();
      });
    });

    describe('보너스 볼 일치 파악 메소드', () => {
      test('메소드 이름은 "isBonusMatche"로 정의된다.', () => {
        const METHOD_NAME = 'isBonusMatche';

        expect(Lotto.isBonusMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 보너스 값과 일치하면 true를 반환한다.', () => {
        const target = [1, 2, 3, 4, 5, 6];
        const BONUS = 4;

        expect(Lotto.isBonusMatche(target, BONUS)).toBeTruthy();
      });
    });

    describe('6개 일치 파악 메소드', () => {
      test('메소드 이름은 "isSixMatche"로 정의된다.', () => {
        const METHOD_NAME = 'isSixMatche';

        expect(Lotto.isSixMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 6과 일치하면 true를 반환한다.', () => {
        const COUNT = 6;

        expect(Lotto.isSixMatche(COUNT)).toBeTruthy();
      });
    });
  });
});
