const Ticket = require('../src/Ticket');

describe('티켓 클래스 테스트', () => {
  test('로또 구입 금액이 1000원 단위가 아니면 예외가 발생합니다.', () => {
    expect(() => {
      new Ticket(800);
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1000원 단위가 아니면 예외가 발생합니다.', () => {
    const ticket = new Ticket(8000);
    expect(ticket.buyTicket()).toEqual(8);
  });
});
