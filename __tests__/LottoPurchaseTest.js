const Deposit = require('../src/model/Deposit');

describe('Deposit 클래스 로또 구매 테스트', () => {
  test('구입 금액이 1000원 단위가 아니라면 예외를 발생시킨다.', () => {
    expect(() => {
      new Deposit('14100');
    }).toThrow('[ERROR]');
  });

  test('구입 가능한 로또의 장수를 가져올 수 있다.', () => {
    const deposit = new Deposit(14000);
    const { quantity } = deposit;

    expect(quantity).toEqual(14);
  });
});
