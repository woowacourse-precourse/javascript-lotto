const App = require("../src/App");

describe("당첨 번호 테스트", () => {
  const app = new App();

  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      app.winningNumber = '1,2,3,4,5,6,7'.split(',').map(Number);
      app.winningNumberVaildate();
    }).toThrow("[ERROR] 당첨 번호는 6개여야 합니다.");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      app.winningNumber = '1,2,3,4,5,5'.split(',').map(Number);
      app.winningNumberVaildate();
    }).toThrow("[ERROR] 당첨 번호는 중복되면 안됩니다.");
  });

  test('당첨 번호가 숫자로 이루어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      app.winningNumber = '1,a,3,4,5,6'.split(',').map(Number);
      app.winningNumberVaildate();
    }).toThrow('[ERROR] 당첨 번호는 숫자로 이루어져야 합니다.');
  });

  test('로또 번호가 1에서 45사이의 숫자가 아니라면 예외가 발생한다. 1', () => {
    expect(() => {
      app.winningNumber = '0,1,2,3,4,5'.split(',').map(Number);
      app.winningNumberVaildate();
    }).toThrow('[ERROR] 당첨 번호는 1에서 45사이의 숫자여야 합니다.');
  });

  test('로또 번호가 1에서 45사이의 숫자가 아니라면 예외가 발생한다. 2', () => {
    expect(() => {
      app.winningNumber = '1,2,3,4,5,46'.split(',').map(Number);
      app.winningNumberVaildate();
    }).toThrow('[ERROR] 당첨 번호는 1에서 45사이의 숫자여야 합니다.');
  });
});
