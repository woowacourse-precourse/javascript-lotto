const TicketBox = require('../src/TicketBox');

describe('TicketBox 클래스 테스트', () => {
  test('문자가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new TicketBox('나는김재민');
    }).toThrow('[ERROR] 문자가 아닌 숫자가 들어와야 합니다.');
  });
});
