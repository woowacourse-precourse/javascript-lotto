const UserBudget = require('../src/UserBudget');

describe.only('UserBudget class 테스트', () => {
  test('1000단위로 안 떨어지면 에러가 발생한다.', () => {
    expect(() => {
      new UserBudget(10002);
    }).toThrow('[ERROR]');
  });
});
