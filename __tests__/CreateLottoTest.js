const LottoGame = require("../src/LottoGame.js");
const Lotto = require("../src/Lotto.js");
const { Console } = require("@woowacourse/mission-utils");

describe("LottoGame.createLottos", () => {
  afterEach(() => Console.close());

  test("input 숫자로 생성된 로또의 개수는 input과 같아야 한다.", () => {
    // given
    const input = 8;
    // when
    const lottoGame = new LottoGame();
    lottoGame.createLottos(input);
    const result = lottoGame.lottos;
    // then
    expect(result).toHaveLength(input);
  });

  test("생성된 로또는 모두 Lotto클래스의 instance여야 한다.", () => {
    const lottoGame = new LottoGame();
    lottoGame.createLottos(5);

    lottoGame.lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
