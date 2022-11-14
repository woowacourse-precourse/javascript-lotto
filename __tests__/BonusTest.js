const Bonus = require("../src/Bonus");

describe("보너스 클래스 테스트", () => {
  test("로또 번호와 보너스번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], [6]);
    }).toThrow("[ERROR]");
  });

  test("보너스번호가 1~45의 번호를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], [46]);
    }).toThrow("[ERROR]");
  });
  
  test("보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1,2,3,4,5,6],[7, 8]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 개수가 1개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1,2,3,4,5,6],[" "]);
    }).toThrow("[ERROR]");
  });

  test("보너스번호가 숫자가 아니면 예외가 발생한다.(문자)", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], ["칠"]);
    }).toThrow("[ERROR]");
  });

  test("보너스번호가 숫자가 아니면 예외가 발생한다.(특수문자)", () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], ["#"]);
    }).toThrow("[ERROR]");
  });
});
