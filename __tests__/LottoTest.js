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
      const RECEIVED = 6;

      expect(Lotto.createLotto()).toHaveLength(RECEIVED);
    });
  });

  describe('로또 구매 메소드 테스트', () => {
    test('메소드 이름은 "buyLotto"로 정의된다.', () => {
      const METHOD_NAME = 'buyLotto';

      expect(Lotto.buyLotto.name).toEqual(METHOD_NAME);
    });

    test('8000을 전달하면 배열 8개를 반환한다.', () => {
      const RECEIVED = '8000';
      const EXPECTED = 8;

      expect(Lotto.buyLotto(RECEIVED)).toHaveLength(EXPECTED);
    });

    test('요소의 길이는 6이다.', () => {
      const ZERO = 0;
      const RECEIVED = '8000';
      const EXPECTED = 6;

      expect(Lotto.buyLotto(RECEIVED)[ZERO]).toHaveLength(EXPECTED);
    });

    test('1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.', () => {
      expect(() => {
        const EXPECTED = '8800';

        Lotto.buyLotto(EXPECTED);
      }).toThrow(ERROR_TEXT);

      expect(() => {
        const EXPECTED = '8000';

        Lotto.buyLotto(EXPECTED);
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
    const ZERO = 0;
    const ONE = 1;
    const TWO = 2;
    const THREE = 3;
    const FOUR = 4;

    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        const EXPECTED = [[1, 2, 3, 4, 5, 6, 7]];
        const lotto = new Lotto(EXPECTED);

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
        const EXPECTED = [[1, 2, 3, 4, 5, 5]];

        const lotto = new Lotto(EXPECTED);
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

      expect(lotto.getLottoResult(prize, bonus)[ZERO]).toEqual(ONE);
    });

    test('배열의 1번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[ONE]).toEqual(TWO);
    });

    test('배열의 2번째 인덱스는 1 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[TWO]).toEqual(ONE);
    });

    test('배열의 3번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[THREE]).toEqual(TWO);
    });

    test('배열의 4번째 인덱스는 2 요소가 들어있다.', () => {
      const lotto = new Lotto(boughtLotto);

      expect(lotto.getLottoResult(prize, bonus)[FOUR]).toEqual(TWO);
    });

    describe('3개 일치 파악 메소드', () => {
      test('메소드 이름은 "checkThreeMatche"로 정의된다.', () => {
        const METHOD_NAME = 'checkThreeMatche';

        expect(Lotto.checkThreeMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 3과 일치하면 [1, 0, 0, 0, 0]를 반환한다.', () => {
        const count = 3;
        const target = [0, 0, 0, 0, 0];
        const EXPECTED = [count, target];
        const RECEIVED = [1, 0, 0, 0, 0];

        expect(Lotto.checkThreeMatche(...EXPECTED)).toStrictEqual(RECEIVED);
      });
    });

    describe('4개 일치 파악 메소드', () => {
      test('메소드 이름은 "checkFourMatche"로 정의된다.', () => {
        const METHOD_NAME = 'checkFourMatche';

        expect(Lotto.checkFourMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 4와 일치하면 [0, 1, 0, 0, 0, 0]를 반환한다.', () => {
        const count = 4;
        const target = [0, 0, 0, 0, 0];
        const EXPECTED = [count, target];
        const RECEIVED = [0, 1, 0, 0, 0];

        expect(Lotto.checkFourMatche(...EXPECTED)).toStrictEqual(RECEIVED);
      });
    });

    describe('5개 일치 파악 메소드', () => {
      test('메소드 이름은 "checkFiveMatche"로 정의된다.', () => {
        const METHOD_NAME = 'checkFiveMatche';

        expect(Lotto.checkFiveMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 5와 일치하면 [0, 0, 1, 0, 0]를 반환한다.', () => {
        const count = 5;
        const target = [0, 0, 0, 0, 0];
        const EXPECTED = [count, target];
        const RECEIVED = [0, 0, 1, 0, 0];

        expect(Lotto.checkFiveMatche(...EXPECTED)).toStrictEqual(RECEIVED);
      });

      test('주어진 값이 5와 보너스 값 둘 다 일치하면 [0, 0, 0, 1, 0]를 반환한다.', () => {
        const count = 5;
        const amount = [0, 0, 0, 0, 0];
        const target = [1, 3, 5, 14, 22, 45];
        const bonusNumber = 3;
        const EXPECTED = [count, amount, target, bonusNumber];
        const RECEIVED = [0, 0, 0, 1, 0];

        expect(Lotto.checkFiveMatche(...EXPECTED)).toStrictEqual(RECEIVED);
      });
    });

    describe('보너스 볼 일치 파악 메소드', () => {
      test('메소드 이름은 "checkBonusMatche"로 정의된다.', () => {
        const METHOD_NAME = 'checkBonusMatche';

        expect(Lotto.checkBonusMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 보너스 값과 일치하면 [0, 0, 0, 1, 0]를 반환한다.', () => {
        const EXPECTED = [0, 0, 0, 0, 0];
        const RECEIVED = [0, 0, 0, 1, 0];

        expect(Lotto.checkBonusMatche(EXPECTED)).toStrictEqual(RECEIVED);
      });
    });

    describe('6개 일치 파악 메소드', () => {
      test('메소드 이름은 "checkSixMatche"로 정의된다.', () => {
        const METHOD_NAME = 'checkSixMatche';

        expect(Lotto.checkSixMatche.name).toEqual(METHOD_NAME);
      });

      test('주어진 값이 6과 일치하면 [0, 0, 0, 0, 1]를 반환한다.', () => {
        const count = 6;
        const target = [0, 0, 0, 0, 0];
        const EXPECTED = [count, target];
        const RECEIVED = [0, 0, 0, 0, 1];

        expect(Lotto.checkSixMatche(...EXPECTED)).toStrictEqual(RECEIVED);
      });
    });
  });

  describe('당첨 횟수 카운트 메소드 테스트', () => {
    test('메소드 이름은 "calculateCount"로 정의된다.', () => {
      const METHOD_NAME = 'calculateCount';

      expect(Lotto.calculateCount.name).toEqual(METHOD_NAME);
    });

    test('주어진 배열의 값이 5개가 일치하면 5를 반환한다.', () => {
      const EXPECTED = [[11, 12, 13, 14, 15, 19], [11, 12, 13, 14, 15, 16]];
      const RECEIVED = 5;

      expect(Lotto.calculateCount(...EXPECTED)).toEqual(RECEIVED);
    });
  });

  describe('당첨 통계 메소드 테스트', () => {
    test('메소드 이름은 "analysisWinningAmount"로 정의된다.', () => {
      const METHOD_NAME = 'analysisWinningAmount';

      expect(Lotto.analysisWinningAmount.name).toEqual(METHOD_NAME);
    });

    describe('개수 일치 테스트', () => {
      const { analysisWinningAmount } = Lotto;
      const winningAmount = [0, 0, 0, 0, 0];

      test('3개가 일치한다면 [1, 0, 0, 0, 0]을 반환한다.', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const THREE = 3;
        const EXPECTED = [winningAmount, THREE, currentLotto, BONUS];
        const RECEIVED = [1, 0, 0, 0, 0];

        expect(analysisWinningAmount(...EXPECTED)).toEqual(RECEIVED);
      });

      test('4개가 일치한다면 [0, 1, 0, 0, 0]을 반환한다.', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const FOUR = 4;
        const EXPECTED = [winningAmount, FOUR, currentLotto, BONUS];
        const RECEIVED = [0, 1, 0, 0, 0];

        expect(analysisWinningAmount(...EXPECTED)).toEqual(RECEIVED);
      });

      test('5개가 일치한다면 [0, 0, 1, 0, 0]을 반환한다.', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const FIVE = 5;
        const EXPECTED = [winningAmount, FIVE, currentLotto, BONUS];
        const RECEIVED = [0, 0, 1, 0, 0];

        expect(analysisWinningAmount(...EXPECTED)).toEqual(RECEIVED);
      });

      test('5개 일치, 보너스 볼 일치한다면 [0, 0, 0, 1, 0]을 반환한다.', () => {
        const currentLotto = [7, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const FIVE = 5;

        const EXPECTED = [winningAmount, FIVE, currentLotto, BONUS];
        const RECEIVED = [0, 0, 0, 1, 0];

        expect(analysisWinningAmount(...EXPECTED)).toEqual(RECEIVED);
      });

      test('6개가 일치한다면 [0, 0, 0, 0, 1]을 반환한다.', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const SIX = 6;
        const EXPECTED = [winningAmount, SIX, currentLotto, BONUS];
        const RECEIVED = [0, 0, 0, 0, 1];

        expect(analysisWinningAmount(...EXPECTED)).toEqual(RECEIVED);
      });
    });
  });

  describe('당첨금 총액 계산 메소드 테스트', () => {
    test('메소드 이름은 "calculateTotalAmount"로 정의된다.', () => {
      const METHOD_NAME = 'calculateTotalAmount';

      expect(Lotto.calculateTotalAmount.name).toEqual(METHOD_NAME);
    });

    test('배열의 길이가 5가 아니면 예외를 발생한다.', () => {
      expect(() => {
        const EXPECTED = [2, 0, 0, 0, 0, 0];

        Lotto.calculateTotalAmount(EXPECTED);
      }).toThrow(ERROR_TEXT);
    });

    test('3개 일치가 2개 있으면 10,000원을 반환한다.', () => {
      const EXPECTED = [2, 0, 0, 0, 0];
      const RECEIVED = 10000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });

    test('4개 일치가 2개 있으면 100,000원을 반환한다.', () => {
      const EXPECTED = [0, 2, 0, 0, 0];
      const RECEIVED = 100000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });

    test('5개 일치가 1개 있으면 1,500,000원을 반환한다.', () => {
      const EXPECTED = [0, 0, 1, 0, 0];
      const RECEIVED = 1500000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });

    test('5개 일치, 보너스 볼 일치가 1개 있으면 30,000,000원을 반환한다.', () => {
      const EXPECTED = [0, 0, 0, 1, 0];
      const RECEIVED = 30000000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });

    test('6개 일치가 1개 있으면 2,000,000,000원을 반환한다.', () => {
      const EXPECTED = [0, 0, 0, 0, 1];
      const RECEIVED = 2000000000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });

    test('2,031,555,000원을 반환한다.', () => {
      const EXPECTED = [1, 1, 1, 1, 1];
      const RECEIVED = 2031555000;

      expect(Lotto.calculateTotalAmount(EXPECTED)).toEqual(RECEIVED);
    });
  });

  describe('값 증가 메소드 테스트', () => {
    test('메소드 이름은 "unitIncrease"로 정의된다.', () => {
      const METHOD_NAME = 'unitIncrease';

      expect(Lotto.unitIncrease.name).toEqual(METHOD_NAME);
    });
  });
});
