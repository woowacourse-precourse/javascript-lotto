const Budget = require('../src/Budget');

describe('티켓 클래스 테스트', () => {
  test('로또 구입 금액이 1000원 단위가 아니면 예외가 발생합니다.', () => {
    expect(() => {
      new Budget(800);
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1000원 단위가 아니면 예외가 발생합니다.', () => {
    const budget = new Budget(8000);
    expect(budget.countTicket()).toEqual(8);
  });
});
