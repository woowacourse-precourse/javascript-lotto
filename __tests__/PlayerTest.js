const Player = require('../src/domain/Player');
const { LOTTO_PRICE } = require('../src/utils/constants');

describe('Player 클래스 테스트', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });

  describe('purchaseLottos(purchasedAmount)', () => {
    test(`로또 구입 금액이 ${LOTTO_PRICE}원으로 나누어 떨어지지 않는 경우 예외가 발생한다.`, () => {
      const purchasedAmount = 1200;

      expect(() => {
        player.purchaseLottos(purchasedAmount);
      }).toThrow('[ERROR]');
    });

    test.each([[-1000], [0]])(`로또 구입 금액이 0원 이하인 경우 예외가 발생한다.`, (purchasedAmount) => {
      expect(() => {
        player.purchaseLottos(purchasedAmount);
      }).toThrow('[ERROR]');
    });
  });

  describe('calculateStatistic(lottoWinningNumbers, bonusNumber)', () => {
    test('당첨 내역을 구할 수 있다.', () => {
      const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      player.purchasedLottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 44, 45],
        [1, 2, 3, 43, 44, 45],
        [4, 5, 6, 43, 44, 45],
      ];

      player.calculateStatistic(lottoWinningNumbers, bonusNumber);
      const statistic = player.getStatistic();

      expect(statistic).toEqual({
        FIRST: 1,
        SECOND: 1,
        THIRD: 1,
        FOURTH: 1,
        FIFTH: 2,
      });
    });
  });
});
