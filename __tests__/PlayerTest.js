const { Player } = require("../src/Player");
const { ERROR } = require("../src/Error");
describe("금액 validation 테스트", () => {
  test("금액이 숫자가 아닐 경우 예외 발생", () => {
    expect(() => {
      const player = new Player("asdf");
    }).toThrow(ERROR.notNumber);
  });

  test("숫자가 1000으로 나누어 떨어지지 않을 경우 예외 발생", () => {
    expect(() => {
      const player = new Player("123123");
    }).toThrow(ERROR.cannotDivide);
  });

  test("입력한 금액만큼 로또번호 생성", () => {
    expect(() => {
      const player = new Player();
      player.makeLottoNumbers("5000");
    });
  });
});
