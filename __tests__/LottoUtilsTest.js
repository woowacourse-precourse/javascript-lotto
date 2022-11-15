const LOTTO = require('../src/constants/lotto');
const utils = require('../src/utils/lottoUtils');

const ascendingOrder = (value1, value2) => value1 - value2;

describe('로또 번호 생성 테스트', () => {
  const lotto = utils.getSortedLottoNumbers();

  test(`로또 번호는 ${LOTTO.AMOUNT}개다.`, () => {
    expect(lotto).toHaveLength(LOTTO.AMOUNT);
  });

  test('로또 번호는 오름차순으로 정렬되어 있다.', () => {
    const sortedLotto = lotto.map((value) => value).sort(ascendingOrder);

    expect(lotto).toEqual(sortedLotto);
  });

  test(`로또 번호는 ${LOTTO.FIRST_NUMBER}에서 ${LOTTO.LAST_NUMBER}사이다.`, () => {
    expect(lotto[0]).toBeGreaterThanOrEqual(LOTTO.FIRST_NUMBER);
    expect(lotto[LOTTO.AMOUNT - 1]).toBeLessThanOrEqual(LOTTO.LAST_NUMBER);
  });
});

describe('로또 발급 테스트', () => {
  const amount = 5;
  const lottos = utils.createLottos(amount);

  test('원하는 갯수의 로또가 발급된다.', () => {
    expect(lottos).toHaveLength(amount);
  });
});
