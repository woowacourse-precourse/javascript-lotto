const TicketPublisher = require('../src/domain/TicketPublisher');

describe('티켓 발행기 테스트', () => {
  test('티켓 발행기는 로또 티켓을 발행한다.', () => {
    const tickets = TicketPublisher.publishTickets(5);
    expect(tickets.length).toBe(5);
  });

  test('티켓 발행기는 로또 티켓을 발행할 때, 중복되지 않은 로또 번호를 발행한다.', () => {
    const ticket = TicketPublisher.generateTicket();
    const set = new Set(ticket);

    expect(set.size).toBe(ticket.length);
  });
});
