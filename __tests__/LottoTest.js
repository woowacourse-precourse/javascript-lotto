const Bonus = require("../src/Bonus.js");
const Lotto = require("../src/Lotto.js");
const Purchase = require("../src/Purchase.js");

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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 숫자가 아닌게 있다면 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위에 맞지 않는 숫자가 있다면 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 90]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호에 범위에 맞지 않는 숫자가 있다면 발생한다.", () => {
    expect(() => {
      new Bonus(90, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 발생한다.", () => {
    expect(() => {
      new Bonus('!', [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 겹치면 발생한다.", () => {
    expect(() => {
      new Bonus(1, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("구입액이 1000원 단위로 나눠떨어지지 않으면 발생한다.", () => {
    expect(() => {
      new Purchase(1500);
    }).toThrow("[ERROR]");
  });

  test("구입액이 숫자가 아니면 발생한다.", () => {
    expect(() => {
      new Purchase('apple');
    }).toThrow("[ERROR]");
  });
});
