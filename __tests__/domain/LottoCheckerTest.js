const { LottoChecker, Lotto } = require("../../src/domain");
const { ConsoleAdapter } = require("../../src/adapters");

describe("LottoChecker 클래스 테스트", () => {
  afterAll(() => {
    new ConsoleAdapter().close();
  });

  const lottoTickets = [
    new Lotto([8, 21, 23, 41, 42, 43]),
    new Lotto([3, 5, 11, 16, 32, 38]),
    new Lotto([7, 11, 16, 35, 36, 44]),
    new Lotto([1, 8, 11, 31, 41, 42]),
    new Lotto([13, 14, 16, 38, 42, 45]),
    new Lotto([7, 11, 30, 40, 42, 43]),
    new Lotto([2, 13, 22, 32, 38, 45]),
    new Lotto([1, 3, 5, 14, 22, 45]),
  ];
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  describe("LottoChecker.getLottoRankings", () => {
    test("로또 순위를 반환할 수 있어야 한다.", () => {
      // given
      const lottoChecker = new LottoChecker(
        lottoTickets,
        winningNumbers,
        bonusNumber,
      );

      // when
      const ranks = lottoChecker.getLottoRankings();

      // then
      expect(ranks).toEqual({
        FIFTH: 1,
        FOURTH: 0,
        THIRD: 0,
        SECOND: 0,
        FIRST: 0,
      });
    });

    test("일치하는 번호가 3개 이하라면 모두 꽝이다.", () => {
      // given
      const lottoChecker = new LottoChecker(
        lottoTickets,
        [1, 10, 20, 30, 40, 45],
        bonusNumber,
      );

      // when
      const ranks = lottoChecker.getLottoRankings();

      // then
      expect(ranks).toEqual({
        FIFTH: 0,
        FOURTH: 0,
        THIRD: 0,
        SECOND: 0,
        FIRST: 0,
      });
    });
  });

  test("일치하는 번호가 5개일 때, 보너스 번호가 일치하면 2등이다.", () => {
    // given
    const lottoChecker = new LottoChecker(
      lottoTickets,
      [3, 21, 23, 41, 42, 43],
      8,
    );

    // when
    const ranks = lottoChecker.getLottoRankings();

    // then
    expect(ranks).toEqual({
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 1,
      SECOND: 1,
      FIRST: 0,
    });
  });
});
