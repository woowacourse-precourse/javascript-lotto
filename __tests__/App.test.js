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
});
