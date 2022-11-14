const ProfitRate = require('../src/domain/ProfitRate.');

describe('수익률 테스트', () => {
  test('3000원 구매로 20억 당첨시 수익률 테스트', () => {
    const lottoResult = [0, 0, 0, 0, 1];
    const payMoney = '3000';
    const result = new ProfitRate(lottoResult, payMoney).getProfitRate();
    expect(result).toEqual('66,666,666.7');
  });

  test('8000원 구매로 3천만원 당첨시 수익률 테스트', () => {
    const lottoResult = [0, 0, 0, 1, 0];
    const payMoney = '8000';
    const result = new ProfitRate(lottoResult, payMoney).getProfitRate();
    expect(result).toEqual('375,000');
  });

  test('1000원 구매로 150만원 당첨시 수익률 테스트', () => {
    const lottoResult = [0, 0, 1, 0, 0];
    const payMoney = '1000';
    const result = new ProfitRate(lottoResult, payMoney).getProfitRate();
    expect(result).toEqual('150,000');
  });

  test('88000원 구매로 5천원 12개 당첨시 수익률 테스트', () => {
    const lottoResult = [12, 0, 0, 0, 0];
    const payMoney = '88000';
    const result = new ProfitRate(lottoResult, payMoney).getProfitRate();
    expect(result).toEqual('68.2');
  });
});
