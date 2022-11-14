/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const User = require('../../src/domains/User');
const Lotto = require('../../src/Lotto');

const mockLottos = (lottos) => {
  Lotto.fromRandom = jest.fn();
  lottos.reduce((acc, lotto) => acc.mockReturnValueOnce(lotto), Lotto.fromRandom);
};

describe('유저 도메인 테스트', () => {
  test('로또를 정상적으로 구매할 수 있어야 한다.', () => {
    const createRandomNumbers = () =>
      Array(Lotto.NUMBER_COUNT)
        .fill()
        .map((_, index) => Lotto.NUMBER_MIN + index)
        .sort(() => 0.5 - Math.random());

    const lottos = [
      new Lotto(createRandomNumbers()),
      new Lotto(createRandomNumbers()),
      new Lotto(createRandomNumbers()),
    ];
    mockLottos(lottos);

    const user = new User();
    user.buyLottos(Lotto.PRICE * 3);

    expect(user.getLottos()).toEqual(lottos);
  });

  test('로또를 1장도 사지 못할 돈으로 로또를 구매할 시 예외가 발생해야 한다.', () => {
    const user = new User();

    expect(() => {
      user.buyLottos(Lotto.PRICE - 1);
    }).toThrow('[ERROR]');
  });
});
