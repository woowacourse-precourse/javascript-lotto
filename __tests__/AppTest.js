const App = require("../src/App");

describe("App valid function 테스트", () => {
  test("로또 구입금액이 1000원 단위가 아니면 에러가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("2400");
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요");
  });

  test("로또 구입금액이 숫자가 아니면 에러가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("hi");
    }).toThrow("[ERROR] 숫자를 입력해 주세요");
  });

  test("보너스 번호가 숫자가 아니면 에러가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("hi");
    }).toThrow("[ERROR] 보너스 번호는 숫자여야 합니다.");
  });

  test("보너스 번호가 1~45 사이가 아니면 에러가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers(50);
    }).toThrow("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
  });
});
