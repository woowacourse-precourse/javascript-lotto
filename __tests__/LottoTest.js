const Lotto = require('../src/Lotto');

describe('로또 클래스 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호에 숫자 외의 문자가 주어지면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 범위 외의 숫자가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 6개 미만인 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('로또 클래스 수익률 계산 테스트', () => {
  test('7장으로 4등과 5등에 당첨되면 수익률 785.7%이다.', () => {
    const result = [1, 1, 0, 0, 0];
    const money = 7000;
    const profit = new Lotto([1, 2, 3, 4, 5, 6]).calculateProfitRate(result, money);

    expect(profit).toBe('785.7');
  });
});

describe('로또 클래스 수익률 계산 테스트', () => {
  test('6장으로 5등에 당첨되면 수익률 83.3%이다.', () => {
    const result = [1, 0, 0, 0, 0];
    const money = 6000;
    const profit = new Lotto([1, 2, 3, 4, 5, 6]).calculateProfitRate(result, money);

    expect(profit).toBe('83.3');
  });
});
