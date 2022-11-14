const RateOfReturnCalculator = require('../src/RateOfReturnCalculator');

describe('RateOfReturnCalculator 클래스 테스트', () => {
  test('기능 테스트: 올바른 수익률 값을 출력한다.', () => {
    let winningLottosQuantity = [null, 0, 1, 0, 0, 0];
    let lottosQuantity = 8;

    expect(
      new RateOfReturnCalculator(
        winningLottosQuantity,
        lottosQuantity
      ).getRateOfReturn()
    ).toEqual((375000).toFixed(1));
  });
});
