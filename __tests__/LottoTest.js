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

  // 아래에 추가 테스트 작성 가능
  test("로또 구매 갯수 Check TEST", () => {
    const lotto = new Lotto();
    lotto.myPay = 10000;
    expect(lotto.getLottoAmount(lotto.myPay)).toEqual(10);
  });

  test("로또 번호는 1~45 이내의 중복 없는 숫자 TEST", () => {
    const lotto = new Lotto();
    expect(lotto.pickLottoNumbers()).toHaveLength(6);
  });

  test("로또 번호 오름차순 정렬 후 Array 에 저장 TEST", () => {
    const lotto = new Lotto();
    const array = [4, 8, 10, 20, 30, 44];
    lotto.sortLotto([44, 30, 20, 10, 8, 4]);
    expect(lotto.myLottoNumbers[0]).toMatchObject(array);
  });
});
