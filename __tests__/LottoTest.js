const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

const ERROR_TEXT = '[ERROR]';

afterAll(() => {
  MissionUtils.Console.close();
});

describe('lotto test', () => {
    test('length 6.', () => {
      const RECEIVED = 6;

      expect(Lotto.createLotto()).toHaveLength(RECEIVED);
    });
  });

  describe('test', () => {
    test('8000', () => {
      const RECEIVED = '8000';
      const EXPECTED = 8;
      expect(Lotto.buyLotto(RECEIVED)).toHaveLength(EXPECTED);
    });

    test('6', () => {
      const ZERO = 0;
      const RECEIVED = '8000';
      const EXPECTED = 6;
      expect(Lotto.buyLotto(RECEIVED)[ZERO]).toHaveLength(EXPECTED);
    });

    test('indivisible.', () => {
      expect(() => {
        const EXPECTED = '1234';
        Lotto.buyLotto(EXPECTED);
      }).toThrow(ERROR_TEXT);
    });
  });

    describe('calculateCount', () => {
    test('5', () => {
      const EXPECTED = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 10]];
      const RECEIVED = 5;
      expect(Lotto.calculateCount(...EXPECTED)).toEqual(RECEIVED);
    });
  });

  describe('calcWonResult', () => {
    test('', () => {
      const METHOD_NAME = 'calcWonResult';
      expect(Lotto.calcWonResult.name).toEqual(METHOD_NAME);
    });
    describe('', () => {
      const { calcWonResult } = Lotto;
      const wonResult = [0, 0, 0, 0, 0];
      test('3', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const THREE = 3;
        const EXPECTED = [wonResult, THREE, currentLotto, BONUS];
        const RECEIVED = [1, 0, 0, 0, 0];

        expect(calcWonResult(...EXPECTED)).toEqual(RECEIVED);
      });

      test('4', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const FOUR = 4;
        const EXPECTED = [wonResult, FOUR, currentLotto, BONUS];
        const RECEIVED = [0, 1, 0, 0, 0];
        expect(calcWonResult(...EXPECTED)).toEqual(RECEIVED);
      });

      test('5', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const FIVE = 5;
        const EXPECTED = [wonResult, FIVE, currentLotto, BONUS];
        const RECEIVED = [0, 0, 1, 0, 0];
        expect(calcWonResult(...EXPECTED)).toEqual(RECEIVED);
      });

      test('6', () => {
        const currentLotto = [11, 12, 13, 14, 15, 19];
        const BONUS = 7;
        const SIX = 6;
        const EXPECTED = [wonResult, SIX, currentLotto, BONUS];
        const RECEIVED = [0, 0, 0, 0, 1]
        expect(calcWonResult(...EXPECTED)).toEqual(RECEIVED);
      });
    });
  });

  