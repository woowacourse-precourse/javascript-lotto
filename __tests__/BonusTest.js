const Bonus = require("../src/Model/Bonus");
const Lotto = require("../src/Model/Lotto");

describe("보너스 번호 클래스 테스트", () => {
  test("번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus('가');
    }).toThrow("[ERROR]");
  });
  
  test("번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(44.9);
    }).toThrow("[ERROR]");
  });

  test("번호가 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(1);
      new Lotto([1, 2, 3, 4, 5, 6])
    }).toThrow("[ERROR]");
  });

  test("번호가 범위 밖이면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(0);
    }).toThrow("[ERROR]");
    expect(() => {
      new Bonus(46);
    }).toThrow("[ERROR]");
  });
});