const WinningNumbers = require('../src/models/WinningNumbers');

describe('당첨 번호 클래스 테스트', () => {
  test('로또 번호 관련 테스트', () => {
    const test = [
      '1,2,3,4,5,a',
      '1,2,3,4,5',
      '1,2,3,4,5,6,7',
      '0,1,2,3,4,5',
      '46,1,2,3,4,5',
      '1,1,2,3,4,5'
    ];
    test.forEach((item) => {
      expect(() => {
        new WinningNumbers(item);
      }).toThrow('[ERROR]');
    });
  });
});
