const LottoRandomNum = require('../src/model/LottoRandomNum');
const GET_RANDOM_NUM = new LottoRandomNum();

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
});
