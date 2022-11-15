const Player = require('../src/Player');

const { PRIZE } = require('../src/constants/prize');

describe('Player 클래스 테스트', () => {
  test('1000원 단위의 금액만 살 수 있다.', () => {
    const player = new Player();

    expect(() => {
      player.buyLottos(100);
    }).toThrow('[ERROR]');
  });

  test('player에게 당첨 횟수를 추가한다.', () => {
    const player = new Player();

    for (let count = 0; count < 5; count += 1) {
      player.addPrizeCounts(PRIZE.FOURTH);
    }

    expect(player.prizeCounts.get(PRIZE.FOURTH)).toBe(5);
  });

  test('player에게 당첨 금액을 추가한다.', () => {
    const player = new Player();
    const winMoney = 15612;

    player.addWinMoney(winMoney);

    expect(player.winMoney).toBe(15612);
  });

  test('player의 수익률을 반환한다.', () => {
    const player = new Player();

    player.buyLottos(90000);
    player.addWinMoney(30000);

    expect(player.getProfitRate()).toBe('33.3');
  });
});
