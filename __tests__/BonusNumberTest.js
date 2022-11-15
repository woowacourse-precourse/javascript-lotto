const App = require("../src/App");

describe("당첨 번호 테스트", () => {
  const app = new App();
  app.winningNumber = [1, 2, 3, 4, 5, 6];

  test("당첨 번호내에 보너스 번호와 중복되는 숫자가 있다면 예외가 발생한다..", () => {
    expect(() => {
      app.bonusNumber = 1;
      app.bonusNumberValidate();
    }).toThrow('[ERROR] 당첨 번호내에 보너스 번호와 중복되는 숫자가 있습니다.');
  });

  test('보너스 번호가 숫자로 이루어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      app.bonusNumber = parseInt('a');
      app.bonusNumberValidate();
    }).toThrow('[ERROR] 보너스 번호는 숫자로 이루어져야 합니다.');
  });

  test('보너스 번호가 1에서 45사이의 숫자가 아니라면 예외가 발생한다. 1', () => {
    expect(() => {
      app.bonusNumber = 0;
      app.bonusNumberValidate();
    }).toThrow('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.');
  });

  test('보너스 번호가 1에서 45사이의 숫자가 아니라면 예외가 발생한다. 2', () => {
    expect(() => {
      app.bonusNumber = 46;
      app.bonusNumberValidate();
    }).toThrow('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.');
  });
});
