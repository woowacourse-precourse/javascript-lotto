const { Player } = require("../src/Player");
const { ERROR } = require("../src/Error");
describe("금액 validation 테스트", () => {
  test("금액이 한글일 경우 예외 발생", () => {
    const player = new Player();
    expect(() => {
      player.validateMoney("한글입니다");
    }).toThrow(ERROR.notNumber);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("숫자가 1000으로 나누어 떨어지지 않을 경우 예외 발생", () => {
    expect(() => {
      const player = new Player();
      player.validateMoney("100123");
      player.validateMoney("210000");
    }).toThrow(ERROR.cannotDivide);
  });
  // 아래에 추가 테스트 작성 가능
});
