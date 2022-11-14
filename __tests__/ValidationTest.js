const App = require("../src/App.js");

describe("App 내부의 Validation 메서드에 대한 테스트", () => {
  test("입력한 돈이 숫자가 아닐 때 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateMoney("abcde");
    }).toThrow("[ERROR] 숫자가 아닙니다.");
  });
  test("입력한 돈이 unit(1000) 단위로 나누어 떨어지지 않을 때 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateMoney("1200");
    }).toThrow("[ERROR] 1000원 단위로 금액을 입력해주세요.");
  });
  test("입력한 당첨 번호가 6자리가 아닐 경우 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateWinningNumbers("1, 2, 3, 4, 5, 6, 7");
    }).toThrow("[ERROR] 당첨 로또 번호의 길이는 6개입니다.");
  });
  test("입력한 당첨 번호 중 1~45의 범위 외의 숫자가 포함되어 있으면 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateWinningNumbers("1,2,3,4,5,50");
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
  test("입력한 당첨 번호 중 숫자가 포함되어 있지 않을 경우 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateWinningNumbers("a,1,2,3,4,5");
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
  test("입력한 당첨 번호 중 1~45의 범위 외의 숫자가 포함되어 있으면 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateWinningNumbers("1,1,2,3,4,5");
    }).toThrow("[ERROR] 동일한 숫자가 포함되어 있습니다.");
  });
  test("입력한 보너스 번호가 숫자가 아닐 경우 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateBonusNumber("a");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });
  test("입력한 보너스 번호가 1~45의 범위를 초과할 경우 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateBonusNumber("50");
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
  test("입력한 보너스 번호가 당첨번호의 번호와 겹칠 경우 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateBonusNumber("1", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 동일한 숫자가 포함되어 있습니다.");
  });
});
