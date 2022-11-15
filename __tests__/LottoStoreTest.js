const LottoStore = require('../src/domain/LottoStore');
const { getAscending } = require('../src/utils/common');

describe('LottoStore 클래스 테스트', () => {
  describe('getGeneratedLottos(purchasedAmount)', () => {
    test('구입 금액에 해당하는 만큼 로또 번호를 생성한다.', () => {
      const purchasedAmount = 8000;

      const generatedLottos = LottoStore.getGeneratedLottos(purchasedAmount);

      expect(generatedLottos.length).toEqual(8);
    });

    test('생성한 각 로또 번호는 오름차순으로 정렬되어 있다.', () => {
      const purchasedAmount = 100000;

      const generatedLottos = LottoStore.getGeneratedLottos(purchasedAmount);

      generatedLottos.forEach((generatedLotto) => {
        const ascendingGeneratedLotto = getAscending(generatedLotto);

        expect(generatedLotto).toEqual(ascendingGeneratedLotto);
      });
    });

    test('생성한 각 로또 번호는 중복되지 않는 6개의 숫자로 구성된다.', () => {
      const purchasedAmount = 100000;

      const generatedLottos = LottoStore.getGeneratedLottos(purchasedAmount);

      generatedLottos.forEach((generatedLotto) => {
        const generatedLottoSet = new Set(generatedLotto);

        expect(generatedLottoSet.size).toEqual(6);
      });
    });
  });
});
