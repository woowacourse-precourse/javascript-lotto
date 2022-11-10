const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1-45가 아닌 수가 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 50, 45, 8]);
    }).toThrow("[ERROR]");
  });
});

describe("출력 테스트", () => {
  test("수익률 계산 - 3등", () => {
    const def = new Lotto([1, 2, 3, 4, 5, 6]);
    const winArr = [0,0,1,0,0];
    const basemoney = 5000;
    expect(def.yieldCalculation(winArr, basemoney)).toEqual('30000.0');
  });

  test("수익률 계산 - 아무것도 당첨되지 않을때", () => {
    const def = new Lotto([1, 2, 3, 4, 5, 6]);
    const winArr = [0,0,0,0,0];
    const basemoney = 5000;
    expect(def.yieldCalculation(winArr, basemoney)).toEqual('0.0');
  });

  test("수익률 계산 - 5등", () => {
    const def = new Lotto([1, 2, 3, 4, 5, 6]);
    const winArr = [0,0,0,0,1];
    const basemoney = 5000;
    expect(def.yieldCalculation(winArr, basemoney)).toEqual('100.0');
  });
})

