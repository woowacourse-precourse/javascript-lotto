const MissionUtils = require('@woowacourse/mission-utils');
const LottoIssuer = require('../src/LottoIssuer');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockLotto = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];

describe('LottoIssuer 테스트', () => {
  test('객체를 생성할 때 입력받은 횟수만큼 로또를 발행하는 issue 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    mockRandoms(mockLotto);

    // 실행(act)
    const lotteries = LottoIssuer.issue(8);

    // 검증(assert)
    expect(lotteries).toEqual(mockLotto);
  });

  test('발행한 로또를 출력하는 print 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    mockRandoms(mockLotto);
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];
    const logSpy = getLogSpy();

    // 실행(act)
    const lottoIssuer = new LottoIssuer(8);
    lottoIssuer.print();

    // 검증(assert)
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('발행한 로또 번호를 가져오는 getLotteries 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    mockRandoms(mockLotto);

    // 실행(act)
    const lottoIssuer = new LottoIssuer(8);
    const result = lottoIssuer.getLotteries();

    // 검증(assert)
    expect(result).toEqual(mockLotto);
  });
});
