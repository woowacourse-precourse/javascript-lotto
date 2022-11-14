const LottoCounter = require('../src/LottoCounter');

describe('LottoCounter 테스트', () => {
  test('기능 테스트: 구매한 로또의 개수 구하기', () => {
    let inputtedCash = '8000';
    const lottoCounter = new LottoCounter(Number(inputtedCash));
    let result = lottoCounter.getLottosQuantity();
    expect(result).toEqual(8);
  });

  test('예외 테스트: 입력 받은 돈이 숫자가 아닌 경우', () => {
    let inputtedCash = 'd134!';
    expect(() => {
      const lottoCounter = new LottoCounter(Number(inputtedCash));
      lottoCounter.getLottosQuantity();
    }).toThrow('[ERROR] 숫자만 입력해야 합니다.');
  });

  test('예외 테스트: 입력 받은 돈이 1,000원 미만인 경우', () => {
    let inputtedCash = '200';
    expect(() => {
      const lottoCounter = new LottoCounter(Number(inputtedCash));
      lottoCounter.getLottosQuantity();
    }).toThrow('[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.');
  });

  test('예외 테스트: 입력 받은 돈이 1,000원 단위가 아닌 경우', () => {
    let inputtedCash = '12345';
    expect(() => {
      const lottoCounter = new LottoCounter(Number(inputtedCash));
      lottoCounter.getLottosQuantity();
    }).toThrow('[ERROR] 1,000원 단위의 금액만 입력 가능합니다.');
  });
});
