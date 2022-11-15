const LottoCost = require('../src/validation/LottoCost');

describe("로또 비용 클래스 테스트", () => {
  test('구입금액이 1000원으로 나누어 떨어지지 않는 경우 예외 처리한다.', () => {
    expect(() => {
      new LottoCost('1200');
    }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
    
    expect(() => {
      new LottoCost('1');
    }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
  });

  test('구입금액이 정수가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new LottoCost('a');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
    
    expect(() => {
      new LottoCost('1.44');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
    
    expect(() => {
      new LottoCost('.');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
  });

  test('입력한 구입 금액에 공백이 있다면 예외 처리한다.', () => {
    expect(() => {
      new LottoCost(' ');
    }).toThrow('[ERROR] 숫자만 입력해주세요.');
  });
  
  test('입력한 구입 금액이 빈값이라면 예외 처리한다.', () => {
    expect(() => {
      new LottoCost('');
    }).toThrow('[ERROR] 숫자를 입력해 주세요.');
  });

  test('입력한 구입 금액에 온점이 있다면 예외 처리한다.', () => {
    expect(() => {
      new LottoCost('4000.');
    }).toThrow('[ERROR] 온점을 제외하고 입력해주세요.');
  });
});