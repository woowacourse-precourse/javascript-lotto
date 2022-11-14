const Purchase = require("../src/Purchase.js");

describe("Purchase 클래스 테스트", () => {
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

  test("구입액에 따라 발행된 로또 갯수를 반환한다.", () => {
    const nums = new Purchase(5000).getPublishCount();
    expect(nums).toEqual(5);
  });
});