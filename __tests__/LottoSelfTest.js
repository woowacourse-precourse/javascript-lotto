const Lotto = require('../src/Lotto');
const { LOTTO_LENGTH } = require('../src/constants');

describe('셀프 로또 테스트', () => {
  test('로또 구입 금액 예외 테스트', () => {
    const lottoList = [];
    const TEST_LEN = 100;
    for (let i = 0; i < TEST_LEN; i += 1) {
      lottoList.push(Lotto.makeLotto());
    }
    lottoList.forEach(lotto => {
      expect(lotto.length).toEqual(LOTTO_LENGTH);
      expect(lotto.length).toEqual([...new Set(lotto)].length);
    });
    expect(lottoList.length).toEqual(TEST_LEN);
  });
});
