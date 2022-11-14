const matchNumbers = require('../src/components/util/matchNumbers');
const {
  LottoNumberData,
} = require('../src/components/lotto-data/LottoNumberData');

jest.mock('../src/components/lotto-data/LottoNumberData');
describe('matchNumbers 함수 테스트', () => {
  beforeEach(() => {
    const mockFn = jest.fn();
    mockFn
      .mockReturnValueOnce('5000')
      .mockReturnValueOnce([[1, 2, 3, 4, 12, 13]])
      .mockReturnValueOnce(['1', '2', '3', '4', '5', '6'])
      .mockReturnValueOnce('7');

    LottoNumberData.AmountPaid = mockFn();
    LottoNumberData.Issued = mockFn();
    LottoNumberData.Winning = mockFn();
    LottoNumberData.Bonus = mockFn();
  });

  /**
   * matchNumbers 함수에서는 따로 에러처리를 하지 않았다.
   * 그 이유는 AmountPaid, Issued, Winning, Bonus 모두 일급객체인 Lotto class를 반드시 거친뒤에
   * 할당이 되기에 보장된 숫자들이자 값이고 그 값들 즉, 의도되고 예상된 값들만 가지고 조작을 하기 때문이다.
   * 만약 에러가 발생하려면 Lotto class에서 미리 걸러주기에
   * 일급객체를 거친 값들은 적어도 여기서는 에러를 또 다시 고려할 필요가 없다고 생각하였다.
   */
  it('구입한 로또와 당첨 번호를 대조하여 몇등이 몇개인지 알려주는 객체를 반환해야함 ', () => {
    expect(matchNumbers()).toEqual({
      fifth: 0,
      first: 0,
      fourth: 1,
      second: 0,
      third: 0,
    });
  });
});
