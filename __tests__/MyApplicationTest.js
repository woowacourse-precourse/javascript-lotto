const App = require("../src/App");
const Lotto = require("../src/Lotto");

describe("App 클래스 추가 테스트", () => {
  test("사용자가 입력한 구입금액에 숫자가 아닌 값이 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      new App().isValidate("rsfa");
    }).toThrow("[ERROR]");
  });

  test("사용자가 원하는 수 만큼의 로또를 발행해야한다.", () => {
    expect(new App().issueLotto(3).length).toBe(3);
  });

  test("사용지가 6개가 넘는 당첨번호를 입력했을 경우 예외처리한다.", () => {
    expect(
      new App().getWinnerNumber(
        "1,2,3,4,5,6,7",
        new Lotto([1, 2, 3, 4, 5, 6]),
        1000
      ).state
    ).toBe("exception");
  });

  test("정확하게 당첨 결과가 계산되는지 확인한다.", () => {
    expect(
      new App().getWinningDetails(
        [new Lotto([1, 2, 3, 4, 5, 7])],
        [1, 2, 3, 4, 5, 6],
        7
      )
    ).toMatchObject({
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveMatchesWithBonus: 1,
      sixMatches: 0,
    });
  });
});
