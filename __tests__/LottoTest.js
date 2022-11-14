const Lotto = require("../src/Lotto");
const Player = require("../src/Player");
const { ERROR_INPUT_MESSAGE } = require("../src/constants");

describe("Lotto 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("Player 클래스 테스트", () => {
  test("입력 금액의 타입이 숫자가 아니면 예외 발생", () => {
    expect(() => {
      const player = new Player();
      player.buyTickets("a");
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("입력 금액이 1,000원 단위로 떨어지지 않으면 예외 발생", () => {
    expect(() => {
      const player = new Player();
      player.buyTickets(3500);
    }).toThrow(ERROR_INPUT_MESSAGE.UNIT);
  });
});
