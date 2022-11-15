const App = require('../src/App');

describe('유저 클래스 테스트', () => {
  const app = new App();
  test('당첨번호는 숫자만 가능하다', () => {
    expect(() => {
      app.validateWinningInput('1,2,3,4,5,6f');
    }).toThrow('[ERROR]');
  });
  test('당첨번호는 1~45까지만 가능하다', () => {
    expect(() => {
      app.validateWinningInput('1,2,3,4,5,46');
    }).toThrow('[ERROR]');
  });
  test('보너스번호는 숫자만 가능하다', () => {
    expect(() => {
      app.validateBonusInput('f');
    }).toThrow('[ERROR]');
  });
  test('보너스 숫자는 당첨번호와 겹치면 안된다', () => {
    expect(() => {
      app.setWinningNumForTest([1, 2, 3, 4, 5, 6]);
      app.validateBonusInput('5');
    }).toThrow('[ERROR]');
  });
});
