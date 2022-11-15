const Lotto = require('../src/Lotto');
const WinningHistory = require('../src/WinningHistory');

const lottoNumbersList = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];

describe('당첨 내역 클래스 테스트', () => {
  test('로또 번호와 당첨 번호를 비교하여, 일치하는 숫자의 개수를 반환한다.', () => {
    const result = lottoNumbersList.map(lottoNumbers =>
      new WinningHistory().calcCorrectNumberCount(
        lottoNumbers,
        [1, 2, 3, 4, 5, 6],
      ),
    );

    expect(result).toEqual([0, 2, 0, 1, 0, 0, 1, 3]);
  });

  test('로또 번호와 보너스 번호를 비교하여, 보너스 번호가 로또 번호에 존재하는지 판단한다.', () => {
    const result = lottoNumbersList.map(lottoNumbers =>
      new WinningHistory().isBonus(lottoNumbers, 7),
    );

    expect(result).toEqual([
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
    ]);
  });

  test('일치하는 로또 번호의 개수와 보너스 번호의 일치 여부를 기반으로 로또의 등수를 반환한다.', () => {
    const winningLottos = [
      [3, false],
      [4, false],
      [5, false],
      [5, true],
      [6, false],
    ];

    const result = winningLottos.map(([correctNumberCount, isBonus]) =>
      new WinningHistory().getLottoRank(correctNumberCount, isBonus),
    );

    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  test('당첨된 로또의 개수를 등수에 따라 배열로 저장한다.', () => {
    const lottos = lottoNumbersList.map(
      lottoNumbers => new Lotto(lottoNumbers),
    );
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winningHistory = new WinningHistory();

    winningHistory.initWinningList({ lottos, winningNumbers, bonusNumber });
    const result = winningHistory.winningList;
    expect(result).toEqual([0, 0, 0, 0, 1]);
  });

  test('구입 금액과 총 수익을 기반으로 수익률을 계산한다.', () => {
    const winningHistory = new WinningHistory();
    winningHistory.calcProfitRate(8000, 5000);
    const result = winningHistory.profitRate;

    expect(result).toEqual(62.5);
  });
});
