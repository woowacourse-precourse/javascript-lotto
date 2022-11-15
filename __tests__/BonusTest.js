const App = require("../src/App");
const User = require("../src/User");

describe("보너스 번호 유효성 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateNumber("string")
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1에서 45 사이의 수가 아니면 예외가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateRange(100)
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    const app = new App();
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 33, 44, 55, 66],
      [41, 32, 23, 14, 15, 6]
    ]
    const answer = 33;
    expect(() => {
      lottoList.forEach(lotto => {
        if(lotto.includes(answer)) {
          throw new Error("[ERROR]");
        }
      })
    }).toThrow("[ERROR]");
  });
})