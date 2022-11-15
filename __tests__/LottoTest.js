const Lotto = require("../src/Lotto");
const Issuer = require("../src/Issuer");
const Drawer = require("../src/Drawer");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 발행 시 잘못된 금액이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      const issuer = new Issuer();
      const input = 1234;
      issuer.issue(input);
    }).toThrow("[ERROR]");
  });

  test("입력한 금액에 맞게 로또가 발행되는지 테스트.", () => {
    const issuer = new Issuer();
    const input = 5000;
    const result = issuer.issue(input).length;
    expect(result).toEqual(5);
  });

  test("당첨 번호 중복 테스트", () => {
    expect(() => {
      const drawer = new Drawer();
      drawer.validateWinningNumbers("[1,1,2,3,4,5]");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 유효 길이 테스트", () => {
    expect(() => {
      const drawer = new Drawer();
      drawer.validateWinningNumbers("[1,2,3,4,5,6,7]");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 유효성 테스트", () => {
    expect(() => {
      const drawer = new Drawer();
      drawer.validateWinningNumbers("[1,2,3,4,5,10]");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 중복 테스트", () => {
    expect(() => {
      const drawer = new Drawer();
      drawer.winningNumber = [1, 2, 3, 4, 5, 6];
      drawer.validateBonusNumber(6);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 유효성 테스트", () => {
    expect(() => {
      const drawer = new Drawer();
      drawer.winningNumber = [1, 2, 3, 4, 5, 6];
      drawer.validateBonusNumber(0);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 확인 기능 테스트.", () => {
    const drawer = new Drawer();

    drawer.bonusNumber = 5;
    const input = [1, 2, 3, 4, 5, 6];
    const result1 = drawer.checkBonusNumber(input);

    drawer.bonusNumber = 10;
    const result2 = drawer.checkBonusNumber(input);

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });

  test("당첨 번호 확인 기능 테스트.", () => {
    const drawer = new Drawer();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    drawer.winningNumber = [1, 2, 3, 4, 5, 6];
    drawer.bonusNumber = 10;

    const result1 = drawer.compareNumbers(lotto);

    lotto.numbers = [1, 2, 3, 4, 5, 10];
    const result2 = drawer.compareNumbers(lotto);

    expect(result1).toEqual(6);
    expect(result2).toEqual(7);
  });
});
