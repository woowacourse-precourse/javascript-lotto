/* eslint-disable no-undef */
/* eslint-disable no-new */
const TicketBox = require('../src/TicketBox');

describe('TicketBox 클래스 테스트', () => {
  test('숫자가 아닌 다른 문자가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new TicketBox('나는김재민');
    }).toThrow('[ERROR] 숫자를 입력하여 주십시오.');
  });
  test('1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new TicketBox(1001);
    }).toThrow('[ERROR] 1000 단위로 입력하여 주십시오.');
  });
});
