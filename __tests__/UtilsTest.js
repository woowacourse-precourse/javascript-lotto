const App = require("../src/App.js");

describe("App의 메서드 중 유틸리티의 역할을 하는 메서드 테스트", () => {
  test("입력한 숫자가 1~45이라면 true를 반환한다.", () => {
    const app = new App();
    expect(app.isInRange(1)).toBe(true);
  });
  test("입력한 숫자가 1~45를 초과한다면 false 반환한다.", () => {
    const app = new App();
    expect(app.isInRange(-1)).toBe(false);
    expect(app.isInRange(50)).toBe(false);
  });

  test("입력한 배열이 1~45 내의 숫자 중 두 번 이상 반복된다면 true를 반환한다.", () => {
    const app = new App();
    expect(app.isReapted([1, 1, 1, 1])).toBe(true);
    expect(app.isReapted([1, 2, 2, 3, 4])).toBe(true);
  });
  test("입력한 배열이 1~45 내의 숫자 중 중복이 없다면 false를 반환한다.", () => {
    const app = new App();
    expect(app.isReapted([1])).toBe(false);
    expect(app.isReapted([1, 2, 3, 4, 5])).toBe(false);
  });

  test("첫번째 인자의 값이 두번째 인자의 배열의 내부에 존재한다면 1을 반환한다.", () => {
    const app = new App();
    expect(app.compareElem(1, [1, 2, 3])).toBe(1);
    expect(app.compareElem("c", ["a", "b", "c"])).toBe(1);
  });
  test("첫번째 인자의 값이 두번째 인자의 배열의 내부에 존재하지 않는다면 0을 반환한다.", () => {
    const app = new App();
    expect(app.compareElem(99, [1, 2, 3])).toBe(0);
    expect(app.compareElem("z", ["a", "b", "c", "d"])).toBe(0);
  });

  test("첫번째 인자로 받은 배열과 두번째 인자로 받은 배열에서 겹치는 요소의 수를 반환한다.", () => {
    const app = new App();
    expect(app.compareArr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(5);
    expect(
      app.compareArr(["a", "b", "c", "d"], ["d", "e", "f", "g", "h"])
    ).toBe(1);
  });

  test("소수점 2번째 자리에서 반올림하여 얻은 수익률을 반환합니다.", () => {
    const app = new App();
    expect(app.getRateOfReturn(1000, 1000)).toBe("100.0");
    expect(app.getRateOfReturn(8000, 5000)).toBe("62.5");
  });
});
