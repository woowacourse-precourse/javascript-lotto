const App = require("../src/App");
const User = require("../src/User");

describe("보너스 번호 유효성 테스트", () => {
  test("보너스 번호가 숫자가 아니면 false를 반환한다.", () => {
    const app = new App();
    expect(
      app.isValidBonusNumberInput("string")
    ).toBeFalsy();
  });

  test("보너스 번호가 1에서 45 사이의 수가 아니면 false를 반환한다.", () => {
    const app = new App();
    expect(
      app.isValidBonusNumberInput(100)
    ).toBeFalsy();
  });

  test("보너스 번호가 로또 번호와 중복되면 false를 반환한다.", () => {
    const user = new User(1000);
    user.createLottoList();
    const lottoList = user.getLottoList();
    const answer = lottoList[0][0];
    expect(
      lottoList.forEach(lotto => {
        if(lotto.includes(answer)) {
          return false;
        }
      })
    ).toBeFalsy();
  });
})