const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
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

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('로또 판별기 : FIRST', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 3, 4, 5, 6], 7);
    expect(result).toEqual('FIRST');
  });

  test('로또 판별기 : SECOND', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 3, 4, 5, 8], 6);
    expect(result).toEqual('SECOND');
  });

  test('로또 판별기 : THIRD', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 3, 4, 5, 8], 7);
    expect(result).toEqual('THIRD');
  });

  test('로또 판별기 : FOURTH', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 3, 5, 8, 9], 7);
    expect(result).toEqual('FOURTH');
  });

  test('로또 판별기 : FIFTH', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 3, 8, 9, 10], 7);
    expect(result).toEqual('FIFTH');
  });

  test('로또 판별기 : 꽝', () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = ticket.calculateNumbers([1, 2, 8, 9, 10, 11], 7);
    expect(result).toBeNull();
  });

  // validate 메소드는 validateNumbers 함수를 테스트하는 ValidationTest.js에서 진행한다.
});
