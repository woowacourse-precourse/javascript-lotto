const PurChase = require('../src/Purchase');

describe('금액 테스트 오류 확인', () => {
  test('금액이 숫자인지 확인', () => {
    const answers = ['1200DF', 'hello', '1,2,3,4,5', '10000원', '10000.0'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('로또의 최소 금액 테스트', () => {
    const answers = ['0', '200', '999'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });
});
