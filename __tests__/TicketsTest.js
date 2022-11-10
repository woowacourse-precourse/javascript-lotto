const Tickets = require('../src/Tickets');

describe('Tickets 클래스 테스트', () => {
  const ticket = Tickets.publish(1);

  test('로또는 숫자로 이루어져 있다.', () => {
    expect(() => ticket[0].every(v => typeof v === 'number')).toBeTruthy();
  });

  test('로또는 중복되지 않은 숫자로 이루어져 있다.', () => {
    expect(() => ticket[0].every((v, i, arr) => arr.indexOf(v) === i)).toBeTruthy();
  });

  test('로또는 6개의 숫자로 이루어져 있다.', () => {
    expect(ticket[0].length).toEqual(6);
  });

  test('발행된 로또는 오름차순으로 정렬되어 있다.', () => {
    const sorted = ticket.sort((a, b) => a - b);

    expect(ticket).toEqual(sorted);
  });

  test('10개의 로또를 발행하면 10개가 발행되어야 한다.', () => {
    expect(Tickets.publish(10).length).toEqual(10);
  });
});
