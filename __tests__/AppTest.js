const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

afterAll(() => {
  MissionUtils.Console.close();
});

describe('App 클래스 테스트', () => {
  describe('countLotto()', () => {
    test('input: 8000 output: 8.', () => {
      const EXPECTED = '8000';
      const RECEIVED = 8;
      expect(App.countLotto(EXPECTED)).toBe(RECEIVED);
    });
  });

  describe('countLotto()', () => {
    test('input: 17000 output: 17.', () => {
      const EXPECTED = '17000';
      const RECEIVED = 17;
      expect(App.countLotto(EXPECTED)).toBe(RECEIVED);
    });
  });

  describe('buyLotto()', () => {
    test('input: 8000 output: 8.', () => {
      const EXPECTED = '8000';
      const RECEIVED = 8;
      expect(App.buyLotto(EXPECTED)).toHaveLength(RECEIVED);
    });
  });

  describe('buyLotto()', () => {
    test('input: 24000 output: 24.', () => {
      const EXPECTED = '24000';
      const RECEIVED = 24;
      expect(App.buyLotto(EXPECTED)).toHaveLength(RECEIVED);
    });
  });

  describe('convertToNumberArray()', () => {
    test('input: 9,8,7,6,5,4 output: [9, 8, 7, 6, 5, 4].', () => {
      const EXPECTED = '9,8,7,6,5,4';
      const RECEIVED = [9, 8, 7, 6, 5, 4];
      expect(App.convertToNumberArray(EXPECTED)).toEqual(RECEIVED);
    });
  });

  describe('lottoResult()', () => {
    test('input: [5, 10, 15, 20, 25, 30] output { wonResult: [1, 0, 0, 0, 0], total: 5000 }.', () => {
      const userLottos = [[5, 10, 15, 20, 25, 30]];
      const winningLotto = [1, 2, 3, 20, 25, 30];
      const bonus = 40;
      const EXPECTED = [userLottos, winningLotto, bonus];
      const RECEIVED = { wonResult: [1, 0, 0, 0, 0], total: 5000 };
      expect(App.lottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('4 right.', () => {
      const userLottos = [[5, 10, 15, 20, 25, 30]];
      const winningLotto = [5, 15, 25, 30, 33, 34];
      const bonus = 1;
      const EXPECTED = [userLottos, winningLotto, bonus];
      const RECEIVED = { wonResult: [0, 1, 0, 0, 0], total: 50000 };
      expect(App.lottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('5 right', () => {
      const userLottos = [[1, 2, 3, 4, 5, 6]];
      const winningLotto = [1, 2, 3, 4, 5, 16];
      const bonus = 7;
      const EXPECTED = [userLottos, winningLotto, bonus];
      const RECEIVED = { wonResult: [0, 0, 1, 0, 0], total: 1500000 };
      expect(App.lottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('5 + bonus right', () => {
      const userLottos = [[1, 2, 3, 4, 5, 6]];
      const winningLotto = [1, 2, 3, 4, 5, 16];
      const bonus = 6;
      const EXPECTED = [userLottos, winningLotto, bonus];
      const RECEIVED = { wonResult: [0, 0, 0, 1, 0], total: 30000000 };
      expect(App.lottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('6 right.', () => {
      const userLottos = [[1, 2, 3, 4, 5, 6]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonus = 7;
      const EXPECTED = [userLottos, winningLotto, bonus];
      const RECEIVED = { wonResult: [0, 0, 0, 0, 1], total: 2000000000 };
      expect(App.lottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });
  });

  describe('getEarning()', () => {
    test('check earning rate', () => {
      const principal = 8000;
      const earning = 5000;
      const EXPECTED = [principal, earning];
      const RECEIVED = 62.5;
      expect(App.getEarning(...EXPECTED)).toStrictEqual(RECEIVED);
    });
  });
});