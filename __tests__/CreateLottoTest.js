const LottoGame = require("../src/LottoGame.js");
const { Console } = require("@woowacourse/mission-utils");

describe("LottoGame.createLottos", () => {
  const lottoGame = new LottoGame();

  afterEach(() => Console.close());

  test("input 숫자로 생성된 로또의 개수는 input과 같아야 한다.", () => {
    // given
    const input = 8;
    // when
    lottoGame.createLottos(input);
    const result = lottoGame.lottos;
    // then
    expect(result).toHaveLength(input);
  });
});
