const Lotto = require('../src/Lotto');
const BonusLotto = require('../src/libs/BonusLotto');
const GameResult = require('../src/libs/GameResult');
const Purchase = require('../src/libs/Purchase');
const { WINNING_AMOUNT } = require('../src/libs/const');

describe('로또 번호 클래스  테스트', () => {
  test('로또 번호를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getPrizeNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('보너스 로또 번호 클래스  테스트', () => {
  test('보너스 번호를 반환한다.', () => {
    const lotto = new BonusLotto([1, 2, 3, 4, 5, 6], '8');
    expect(lotto.getBonusNumber()).toBe(8);
  });
});

describe('게임 결과 클래스 테스트', () => {
  const game = new GameResult();
  test('당첨번호와 로또번호 사이에 중복된 개수를 반환한다.', () => {
    const play = game.getPrizeMatch([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8]);
    expect(play).toBe(4);
  });

  test('보너스 번호와 로또번호 사이에 중복된 개수를 반환한다.', () => {
    expect(game.getBonusMatch([1, 2, 3, 4, 5, 6], 4)).toBe(true);
    expect(game.getBonusMatch([1, 2, 3, 4, 5, 6], 45)).toBe(false);
  });

  test('당첨번호 개수와 보너스 번호 유무를 통해 순위를 반환한다.', () => {
    expect(game.getRanking(3, true)).toEqual([0, 0, 0, 0, 1]);
    expect(game.getRanking(4, false)).toEqual([0, 0, 0, 1, 0]);
    expect(game.getRanking(5, false)).toEqual([0, 0, 1, 0, 0]);
    expect(game.getRanking(5, true)).toEqual([0, 1, 0, 0, 0]);
    expect(game.getRanking(6, false)).toEqual([1, 0, 0, 0, 0]);
  });

  test('순위 개수를 나타내는 오브젝트와 순위를 나타내는 배열이 주어졌을 때 값을 더하여 새로운 순위 오브젝트를 반환한다.', () => {
    const ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    const fifth = [0, 0, 0, 0, 1];
    const fourth = [0, 0, 0, 1, 0];
    const third = [0, 0, 1, 0, 0];
    const second = [0, 1, 0, 0, 0];
    const first = [1, 0, 0, 0, 0];
    expect(game.plusRanking(ranking, fifth)).toEqual({ ...ranking, fifth: 1 });
    expect(game.plusRanking(ranking, fourth)).toEqual({
      ...ranking,
      fourth: 1,
    });
    expect(game.plusRanking(ranking, third)).toEqual({ ...ranking, third: 1 });
    expect(game.plusRanking(ranking, second)).toEqual({
      ...ranking,
      second: 1,
    });
    expect(game.plusRanking(ranking, first)).toEqual({
      ...ranking,
      first: 1,
    });
  });

  test('당첨자 수가 주어졌을 때 총 상금을 반환한다.', () => {
    const ranking = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    expect(game.winningAmountCalculation({ ...ranking, first: 2 })).toBe(
      WINNING_AMOUNT.first * 2,
    );
    expect(game.winningAmountCalculation({ ...ranking, second: 3 })).toBe(
      WINNING_AMOUNT.second * 3,
    );
    expect(game.winningAmountCalculation({ ...ranking, third: 4 })).toBe(
      WINNING_AMOUNT.third * 4,
    );
    expect(game.winningAmountCalculation({ ...ranking, fourth: 5 })).toBe(
      WINNING_AMOUNT.fourth * 5,
    );
    expect(game.winningAmountCalculation({ ...ranking, fifth: 6 })).toBe(
      WINNING_AMOUNT.fifth * 6,
    );
  });

  test('총 상금과 구입한 금액을 입력하여 수익률을 반환한다.', () => {
    expect(game.yieldCaculation(5000, 5000)).toBe('100.0');
    expect(game.yieldCaculation(10000, 5000)).toBe('200.0');
    expect(game.yieldCaculation(10000000, 5000)).toBe('200,000.0');
    expect(game.yieldCaculation(5000, 15000)).toBe('33.3');
  });
});

describe('로또 구매 클래스  테스트', () => {
  test('구입한 로또의 개수만큼 로또를 발행한다.', () => {
    const purchase = new Purchase('2000');
    const lottoes = purchase.createLottoArray();
    expect(lottoes).toHaveLength(2);
    expect(lottoes[0]).toHaveLength(6);
    expect(lottoes[0][0] < lottoes[0][5]).toBe(true);
  });
});
