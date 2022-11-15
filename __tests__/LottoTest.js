const App = require("../src/App");
const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {


  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validatePrice(100);
    }).toThrow("[ERROR] 1000단위의 수를 입력해주세요.");
  });
  
  // 로또 번호 검사
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되서는 안됩니다.");
  });
  test("로또 번호에 범위외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  // 보너스 번호 검사
  test("보너스 번호가 숫자가아니면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber('hello');
    }).toThrow("[ERROR] 보너스 번호는 숫자여야합니다.");
  });
  test("보너스 번호가 로또번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber(6);
    }).toThrow("[ERROR] 로또 번호와 중복된 숫자입니다.");
  });
  test("보너스 번호에 범위외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber(50);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

});

