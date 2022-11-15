const { mockQuestion, EMPTY_CALLBACK } = require('../src/mock');
const User = require('../src/User');
const Lotto = require('../src/Lotto');

describe('유저 클래스 테스트', () => {
  const user = new User();

  test('구매 금액 입력이 숫자가 아니면 예외가 발생한다.', () => {
    const answer = '8000a';

    mockQuestion(answer);

    expect(() => {
      user.inputPurchaseMoney(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('구매 금액 입력이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    const answer = '7500';

    mockQuestion(answer);

    expect(() => {
      user.inputPurchaseMoney(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('구매 금액 입력이 1,000원 이하이면 예외가 발생한다.', () => {
    const answer = '750';

    mockQuestion(answer);

    expect(() => {
      user.inputPurchaseMoney(EMPTY_CALLBACK);
    }).toThrow('[ERROR]');
  });

  test('구매 금액에 따른 로또 개수가 발행 되는지 확인', () => {
    const answer = '2000';
    const lottoCount = user.getLottoCount(answer);
    const result = 2;

    expect(lottoCount).toBe(result);
  });
});

describe('로또 게임 클래스 테스트  / 당첨내역, 수익률', () => {
  const user = new User();

  test('당첨 내역과 수익률이 정상적으로 구해지는지 테스트', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 5, 9]),
      new Lotto([1, 2, 3, 4, 9, 8]),
    ];

    const resultWinning = {
      1: 1,
      2: 1,
      3: 2,
      4: 1,
      5: 0,
    };
    const resultEaringRate = 40661000;

    user.setLottos(lottos);
    const { winning, earningRate } = user.guessWinningDetail(
      winningNumber,
      bonusNumber,
    );

    expect(winning).toEqual(resultWinning);
    expect(earningRate).toBe(resultEaringRate);
  });
});
