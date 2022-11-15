const LottoGenerator = require('../src/LottoGenerator');

describe('로또생성기 클래스 테스트', () => {
  test('생선된 로또 번호 유효성,발행 갯수 테스트', () => {
    const lottos = new LottoGenerator(3000).createLotto();
    lottos.forEach((lotto) => {
      expect(lotto.filter((number) => 1 <= number && number <= 45).length).toBe(6);
      expect(new Set(lotto).size).toBe(6);
    });
    expect(lottos.length).toBe(3);
  });
});
