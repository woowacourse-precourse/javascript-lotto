const Store = require('../src/Store');

describe('Store 클래스 테스트', () => {
  test('사용자가 입력한 금액이 숫자가 아니면 예외가 발생한다. ', () => {
    expect(() => {
      new Store('a');
    }).toThrow('[ERROR]');
  });
  test('사용자가 입력한 금액이 천의 단위가 아니면 예외가 발생한다. ', () => {
    expect(() => {
      new Store(100010);
    }).toThrow('[ERROR]');
  });
});
