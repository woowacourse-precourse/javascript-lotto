const Lotto = require("../src/Lotto");
const App = require("../src/App");

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
  test("로또 구매를 1000원 단위로 했을 경우", () => {
    expect(() => {
      const app = new App();
      app.checkPurchaseAmount(8000);
    }).toBeTruthy();
  });

  test("로또 구매를 1000원 단위로 하지 않았을 경우", () => {
    expect(() => {
      const app = new App();
      app.checkPurchaseAmount(8500);
    }).toThrow("[ERROR] 1,000원 단위로만 구매 가능합니다.");
  });

  test.only("금액에 따른 로또 생성 횟수 테스트", () => {
    const app = new App();
    app.createRandomLotto(8);

    expect(app.lottoArray.length).toBe(8);
  });
});
