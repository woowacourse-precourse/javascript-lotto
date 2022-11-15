const Machine = require('../src/Machine');
const Display = require('../src/Display');

describe('로또 머신 테스트', () => {
  test('로또 구매액 유효성 테스트', () => {
    expect(() => {
      new Machine(3001);
    }).toThrow(Display.error('UNACCEPTABLE_PAYMENT'));
  });

  test('로또 구매 수량만큼 로또 발행', () => {
    const machine = new Machine(2000);
    machine.work();
    expect(Machine.user.purchasedLotto.length).toEqual(2);
  });
});
