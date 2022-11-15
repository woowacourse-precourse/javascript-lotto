const IssueLotto = require('../src/components/IssueLotto');

describe('로또 발행 클래스 테스트', () => {
  test('구입 금액이 1000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      IssueLotto.setLotteryNumber(8700);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 숫자가 아닌 값으로 받을 경우 예외가 발생한다.', () => {
    expect(() => {
      IssueLotto.setLotteryNumber('a800b');
    }).toThrow('[ERROR]');
  });

  test('구입한 금액만큼 로또를 발행하는지 확인한다.', () => {
    const lottos = IssueLotto.setLotteryNumber(10000);
    expect(lottos[0].length).toBe(10);
  });
});
