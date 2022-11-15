const RateOfReturn = require('../src/model/RateOfReturn');

describe('RateOfReturn 클래스 테스트', () => {
  test('기능 테스트: 올바른 수익률 값을 출력한다.', () => {
    let winningLottosQuantity = [null, 0, 1, 0, 0, 0];
    let lottosQuantity = 8;
    let rateOfReturn = '375,000.0';

    expect(
      new RateOfReturn(winningLottosQuantity, lottosQuantity).getRateOfReturn()
    ).toEqual(rateOfReturn);
  });

  test('기능 테스트: 올바른 수익률 값을 출력한다.', () => {
    let winningLottosQuantity = [null, 0, 0, 0, 0, 2];
    let lottosQuantity = 15;
    let rateOfReturn = '66.7';

    expect(
      new RateOfReturn(winningLottosQuantity, lottosQuantity).getRateOfReturn()
    ).toEqual(rateOfReturn);
  });

  test('기능 테스트: 올바른 수익률 값을 출력한다.', () => {
    let winningLottosQuantity = [null, 0, 1, 0, 0, 0];
    let lottosQuantity = 3;
    let rateOfReturn = '1,000,000.0';

    expect(
      new RateOfReturn(winningLottosQuantity, lottosQuantity).getRateOfReturn()
    ).toEqual(rateOfReturn);
  });
});
