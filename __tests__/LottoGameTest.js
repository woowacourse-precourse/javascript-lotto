const Input = require('../src/Input');

describe('로또 번호 비교', () => {
  test('일치하는 번호 개수 확인하는 테스트.', () => {
    const input = new Input();
    input.winningNumbers = [1, 4, 6, 8, 10, 12];
    const result = input.countCorrectNumbers([1, 6, 12, 14, 19, 21]);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트1.', () => {
    const input = new Input();
    input.winningNumbers = [1, 2, 3, 4, 5, 6];
    input.bonusNumber = 7;
    const result = input.getLottoRank(5);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트2.', () => {
    const input = new Input();
    input.winningNumbers = [1, 2, 3, 4, 5, 6];
    input.bonusNumber = 3;
    const result = input.getLottoRank(5);

    expect(result).toEqual(2);
  });

  test('총 당첨 금액 확인하는 테스트1', () => {
    const input = new Input();
    const result = input.calcTotalPrize([0, 1, 0, 0, 0, 1, 6]);

    expect(result).toEqual(2000005000);
  });

  test('총 당첨 금액 확인하는 테스트2', () => {
    const input = new Input();
    const result = input.calcTotalPrize([0, 0, 0, 0, 0, 0, 6]);

    expect(result).toEqual(0);
  });

  test('수익률 계산하는 테스트1', () => {
    const input = new Input();
    input.purchaseAmount = 8000;
    const result = input.calcRateOfReturn(5000);

    expect(result).toEqual('62.5');
  });

  test('수익률 계산하는 테스트2', () => {
    const input = new Input();
    input.purchaseAmount = 3000;
    const result = input.calcRateOfReturn(55000);

    expect(result).toEqual('1833.3');
  });
});
