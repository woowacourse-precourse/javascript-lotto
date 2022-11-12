const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto(['1', '2', '3', '4', '5', '6', '7']);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호의 개수가 6개보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5']);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '5']);
    }).toThrow('[ERROR] 로또 번호는 중복이 없어야 합니다.');
  });

  test('로또 번호가 45를 넘으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '46', '3', '4', '5', '6']);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });

  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['0', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });

  test('로또 번호에 숫자 이외의 문자가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['0', 'a', '3', '4', '5', '6']);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });

  test('보너스 번호를 여러개 입력하는 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('5 5');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 여러개 입력하는 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('5, 5');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 ~ 45를 벗어나는 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('46');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 ~ 45를 벗어나는 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('0');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닌 문자인 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('abc');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 보너스 번호가 중복되는 경우 예외가 발생한다.', () => {
    expect(() => {
      const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
      LOTTO.setBounusNumber('6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 개수 확인하기1', () => {
    const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
    LOTTO.setBounusNumber('7');
    const PURCHASED_LOTTOS = [
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [1, 2, 3, 4, 5, 9], // 5개 일치
      [1, 2, 3, 4, 7, 8], // 4개 일치
      [1, 2, 3, 7, 8, 9], // 3개 일치
    ];
    let count = 6;
    PURCHASED_LOTTOS.forEach((purchased) => {
      const [HIT_COUNT, BONUS_HIT] = LOTTO.countHitNumbers(purchased);
      expect(HIT_COUNT).toBe(count);
      expect(BONUS_HIT).toBeFalsy();
      count -= 1;
    });
  });

  test('당첨 번호 개수 확인하기2 - 보너스 포함', () => {
    const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
    LOTTO.setBounusNumber('7');
    const PURCHASED_LOTTO = [1, 2, 3, 4, 5, 7]; // 5개 일치 + (보너스 볼)
    const [HIT_COUNT, BONUS_HIT] = LOTTO.countHitNumbers(PURCHASED_LOTTO);
    expect(HIT_COUNT).toBe(5);
    expect(BONUS_HIT).toBeTruthy();
  });

  test('당첨 번호 개수 확인하기3', () => {
    const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
    LOTTO.setBounusNumber('7');
    const PURCHASED_LOTTOS = [
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [1, 2, 3, 4, 5, 7], // 5개 일치 + (보너스 볼)
      [1, 2, 3, 6, 5, 7], // 5개 일치 + (보너스 볼)
      [1, 2, 4, 6, 5, 7], // 5개 일치 + (보너스 볼)
      [1, 2, 3, 4, 5, 9], // 5개 일치
      [1, 2, 3, 4, 6, 9], // 5개 일치
      [1, 2, 3, 4, 7, 8], // 4개 일치
      [1, 2, 3, 7, 8, 9], // 3개 일치
    ];
    const ANSWER = LOTTO.NumberOfMatchedLotto(PURCHASED_LOTTOS);
    expect(ANSWER).toEqual([1, 1, 2, 3, 1]);
  });

  test('수익률 테스트', () => {
    const LOTTO = new Lotto(['1', '2', '3', '4', '5', '6']);
    LOTTO.setBounusNumber('7');
    const PROFIT_TEMPLATE = [5000, 50000, 1500000, 30000000, 2000000000];
    const PROFIT_SUM = PROFIT_TEMPLATE.reduce((sum, current) => sum + current, 0);
    const PROFIT_RATE = LOTTO.computeProfitRate(8, [1, 1, 1, 1, 1]);
    const EXPECTED = ((PROFIT_SUM / (8 * 1000)) * 100).toFixed(1);
    expect(PROFIT_RATE).toBe(EXPECTED);
  });
});
