const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

afterAll(() => {
  MissionUtils.Console.close();
});

describe('App 클래스 테스트', () => {
  describe('purchaseCount()', () => {
    test('8000을 전달하면 8을 기대한다.', () => {
      expect(App.purchaseCount('8000')).toBe(8);
    });
  });

  describe('buyLotto()', () => {
    test('8000을 전달하면 길이가 8인 배열을 반환한다.', () => {
      expect(App.buyLotto('8000')).toHaveLength(8);
    });
  });

  describe('convertToNumberArray()', () => {
    test('1,2,3,4,5,6을 입력하면 [1,2,3,4,5,6] 배열을 반환한다.', () => {
      expect(App.convertToNumberArray('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('createLottoResult()', () => {
    test('인수를 전달하면 객체 { winningAmount: [1, 0, 0, 0, 0], total: 5000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 2, 3, 8, 21, 23];
      const bonus = 44;
      const expected = { winningAmount: [1, 0, 0, 0, 0], total: 5000 };

      expect(App.createLottoResult(userLottos, winningNumbers, bonus)).toStrictEqual(expected);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 1, 0, 0, 0], total: 50000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 2, 8, 21, 23, 26];
      const bonus = 44;
      const expected = { winningAmount: [0, 1, 0, 0, 0], total: 50000 };

      expect(App.createLottoResult(userLottos, winningNumbers, bonus)).toStrictEqual(expected);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 1, 0, 0], total: 1500000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [1, 8, 21, 23, 26, 41];
      const bonus = 44;
      const expected = { winningAmount: [0, 0, 1, 0, 0], total: 1500000 };

      expect(App.createLottoResult(userLottos, winningNumbers, bonus)).toStrictEqual(expected);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 0, 1, 0], total: 30000000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 44]];
      const winningNumbers = [8, 21, 23, 26, 41, 43];
      const bonus = 44;
      const expected = { winningAmount: [0, 0, 0, 1, 0], total: 30000000 };

      expect(App.createLottoResult(userLottos, winningNumbers, bonus)).toStrictEqual(expected);
    });

    test('인수를 전달하면 객체 { winningAmount: [0, 0, 0, 0, 1], total: 2000000000 } 기대한다.', () => {
      const userLottos = [[8, 21, 23, 26, 41, 43]];
      const winningNumbers = [8, 21, 23, 26, 41, 43];
      const bonus = 44;
      const expected = { winningAmount: [0, 0, 0, 0, 1], total: 2000000000 };

      expect(App.createLottoResult(userLottos, winningNumbers, bonus)).toStrictEqual(expected);
    });
  });
});
