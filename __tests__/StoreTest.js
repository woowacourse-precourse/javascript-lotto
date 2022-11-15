const Store = require('../src/Store');
const { REGEX } = require('../src/constants');

describe('스토어 클래스 테스트', () => {
  test('잘못된 구입 금액을 입력한 경우 에러처리', () => {
    const store = new Store();
    const values = [
      // 1,000원으로 나누어 떨어지지 않는 경우
      '100',
      '1010',
      '1001',
      '0',
      // formatting이 잘못되었을 경우
      '01000',
    ];

    values.forEach((value) => {
      expect(() => {
        store.validate(value);
      }).toThrow('[ERROR]');
    });
  });

  test('1~45까지 중복되지 않는 6개 숫자 뽑기', () => {
    const store = new Store();
    store.pickNumbers();
    const [lottoArr] = store.lottos;
    const lottoStr = lottoArr.join(',');
    const lottoSet = new Set(lottoArr);

    expect(REGEX.WINNING_NUMBER.test(lottoStr)).toBe(true);
    expect(lottoSet.size).toEqual(6);
  });
});
