const Bonus = require('../src/Bonus');

describe('보너스 클래스 테스트', () => {
  test('보너스 번호에 정수 이외의 문자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('*',[1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 값이 1~45 사이의 수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('50',[1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 정답 번호와 중복되는 값이 보너스 값으로 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('1',[1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
