const calculateRateOfReturn = require('../src/components/util/calculateRateOfReturn');
const {
  LottoNumberData,
  LottoRanking,
} = require('../src/components/lotto-data/LottoNumberData');
describe('calculateRateOfReturn 함수확인', () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce('1000')
    .mockReturnValueOnce([[1, 2, 3, 4, 12, 13]])
    .mockReturnValueOnce(['1', '2', '3', '4', '5', '6'])
    .mockReturnValueOnce('7');

  LottoNumberData.AmountPaid = mockFn();
  LottoNumberData.Issued = mockFn();
  LottoNumberData.Winning = mockFn();
  LottoNumberData.Bonus = mockFn();

  // calculateRateOfReturn 함수도 일급 객체인 Lotto class로 보장된 값만 사용하기에 에러가 없다.

  it('몇등이 몇개 당첨됐는지 개수를 보고 구매금액 대비 %의 수익률을 올렸는지 출력', () => {
    LottoRanking.fourth = 1;
    calculateRateOfReturn();
    expect(LottoNumberData.RateOfReturn).toBe('5000.0');
  });
});
