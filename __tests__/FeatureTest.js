const App = require("../src/App");

const MissionUtils = require("@woowacourse/mission-utils");

describe("로또", () => {
  test("monyValidate", () => {
    const app = new App();
    app.moneyValidate(3000);
    expect(app.lottoAmount).toBe(3);
  });

  test("validateBonusNumber", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumber(99);
    }).toThrow();
  });

  test("findIntersection", () => {
    const app = new App();
    app.lottoNumber = [1, 2, 3, 4, 5, 6];
    app.findIntersection([1, 2, 3, 4, 5, 6]);

    expect(app.sixWin.length).toBe(1);
  });

  test("findFiveAndBonusWin", () => {
    const app = new App();
    app.lottoNumber = [1, 2, 3, 4, 5, 6];
    app.bonusNumber = 7;
    app.fiveWin = [[1, 2, 3, 4, 5, 7]];
    app.findFiveAndBonusWin();

    expect(app.fiveAndBonusWin.length).toBe(1);
  });
});
