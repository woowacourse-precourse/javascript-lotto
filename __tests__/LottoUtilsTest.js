const LOTTO = require('../src/constants/lotto');
const lottoUtils = require('../src/utils/lottoUtils');

const ascendingOrder = (value1, value2) => value1 - value2;

describe('로또 번호 생성 테스트', () => {
  const lotto = lottoUtils.getSortedLottoNumbers();

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
  const lottos = lottoUtils.createLottos(amount);

  test('원하는 갯수의 로또가 발급된다.', () => {
    expect(lottos).toHaveLength(amount);
  });
});

describe('수익률 테스트', () => {
  test('정상 계산 확인', () => {
    const stats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    };
    const amount = 8;

    expect(lottoUtils.getEarningRate(stats, amount)).toBe('62.5');
  });

  test('소숫점 첫째 자리의 값까지 반환한다.', () => {
    const stats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    };
    const amount = 5;

    expect(lottoUtils.getEarningRate(stats, amount)).toBe('100.0');
  });
});

describe('통계 결과 생성 테스트', () => {
  test('정상 생성 확인', () => {
    const stats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    };
    const amount = 8;
    const resultTexts = [
      '당첨 통계',
      '---',
      `3개 일치 (5,000원) - 1개`,
      `4개 일치 (50,000원) - 0개`,
      `5개 일치 (1,500,000원) - 0개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`,
      `6개 일치 (2,000,000,000원) - 0개`,
      `총 수익률은 62.5%입니다.`,
    ];

    expect(lottoUtils.getResultTexts(stats, amount)).toEqual(resultTexts);
  });
});
