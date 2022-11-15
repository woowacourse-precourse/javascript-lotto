const LottoRandomNum = require('../src/model/LottoRandomNum');
const LottoResult = require('../src/model/LottoResult');
const GET_RANDOM_NUM = new LottoRandomNum();
const GET_LOTTO_RESULT = new LottoResult();

describe('도메인 로직 테스트', () => {
  test('로또 구입 수량이 정상적으로 반환되는지 확인', () => {
    const input = 14000;

    expect(GET_RANDOM_NUM.getQuantity(input)).toBe(14);
  });

  test('로또를 구입한 수량대로 배열이 반환되는지 확인', () => {
    const amount = 14000;
    const result = GET_RANDOM_NUM.getLottoNum(amount);

    expect(result.lottoNums).toHaveLength(14);
  });

  test('로또 당첨 내역 객체가 정상적으로 반환되는지 확인', () => {
    const [lottoNum, winSplitNum, bonusNum] = [
      [
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      [11, 7, 14, 22, 32, 43],
      45,
    ];

    const expectObj = { countWinning: [1, 0, 0, 0, 0], totalReturn: 5000 };

    expect(GET_LOTTO_RESULT.findSameNum(lottoNum, winSplitNum, bonusNum)).toEqual(
      expectObj
    );
  });
});
