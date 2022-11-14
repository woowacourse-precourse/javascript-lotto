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

  test("당첨 번호가 범위(1~45)를 벗어나는 경우", () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 6개 보다 적은 경우", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 6개 보다 적은 경우", () => {
    expect(() => {
      new Lotto([ ]);
    }).toThrow("[ERROR]");
  });

  test("당첨번호가 숫자가 아닌 경우", () => {
    expect(() => {
      new Lotto(['일','이','삼','사','오','육']);
    }).toThrow("[ERROR]");
  });

  test("당첨번호가 숫자가 아닌 경우", () => {
    expect(() => {
      new Lotto(["?","!","#","$","%","@"]);
    }).toThrow("[ERROR]");
  });

});
