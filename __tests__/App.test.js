const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

afterAll(() => {
  MissionUtils.Console.close();
});

describe('App 클래스 테스트', () => {
  describe('purchaseCount()', () => {
    test('8000을 전달하면 8을 기대한다.', () => {
      const EXPECTED = '8000';
      const RECEIVED = 8;

      expect(App.purchaseCount(EXPECTED)).toBe(RECEIVED);
    });
  });

  describe('buyLotto()', () => {
    test('8000을 전달하면 길이가 8인 배열을 반환한다.', () => {
      const EXPECTED = '8000';
      const RECEIVED = 8;

      expect(App.buyLotto(EXPECTED)).toHaveLength(RECEIVED);
    });
  });

  describe('convertToNumberArray()', () => {
    test('1,2,3,4,5,6을 입력하면 [1,2,3,4,5,6] 배열을 반환한다.', () => {
      const EXPECTED = '1,2,3,4,5,6';
      const RECEIVED = [1, 2, 3, 4, 5, 6];

      expect(App.convertToNumberArray(EXPECTED)).toEqual(RECEIVED);
    });
  });

  describe('createLottoResult()', () => {
    test('인수를 전달하면 객체 { winningAmount: [1, 0, 0, 0, 0], total: 5000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 2, 3, 8, 21, 23];
      const bonus = 44;
      const EXPECTED = [userLottos, winningNumbers, bonus];
      const RECEIVED = { winningAmount: [1, 0, 0, 0, 0], total: 5000 };

      expect(App.createLottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 1, 0, 0, 0], total: 50000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 2, 8, 21, 23, 26];
      const bonus = 44;
      const EXPECTED = [userLottos, winningNumbers, bonus];
      const RECEIVED = { winningAmount: [0, 1, 0, 0, 0], total: 50000 };

      expect(App.createLottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 1, 0, 0], total: 1500000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 8, 21, 23, 26, 41];
      const bonus = 44;
      const EXPECTED = [userLottos, winningNumbers, bonus];
      const RECEIVED = { winningAmount: [0, 0, 1, 0, 0], total: 1500000 };

      expect(App.createLottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 0, 1, 0], total: 30000000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 44]];
      const winningNumbers = [8, 21, 23, 26, 41, 43];
      const bonus = 44;
      const EXPECTED = [userLottos, winningNumbers, bonus];
      const RECEIVED = { winningAmount: [0, 0, 0, 1, 0], total: 30000000 };

      expect(App.createLottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 0, 0, 1], total: 2000000000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [8, 21, 23, 26, 41, 43];
      const bonus = 44;
      const EXPECTED = [userLottos, winningNumbers, bonus];
      const RECEIVED = { winningAmount: [0, 0, 0, 0, 1], total: 2000000000 };

      expect(App.createLottoResult(...EXPECTED)).toStrictEqual(RECEIVED);
    });
  });
  describe('getEarningsRate()', () => {
    test('8000, 5000을 전달하면 62.5를 반환한다.', () => {
      const principal = 8000;
      const earning = 5000;
      const EXPECTED = [principal, earning];
      const RECEIVED = 62.5;

      expect(App.getEarningsRate(...EXPECTED)).toStrictEqual(RECEIVED);
    });
  });
});
