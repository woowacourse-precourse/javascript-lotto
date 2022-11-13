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
});
