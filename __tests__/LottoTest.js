const Lotto = require("../src/Lotto");
const Constant = require("../src/Constant");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
  });

  // 아래에 추가 테스트 작성 가능
  test("구입한 금액에 맞춰 몇장을 샀는지 체크해야한다.", () => {
    //given
    const purchaseAmount = 8000;
    //when
    let result = Lotto.countLotto(purchaseAmount);
    //then
    expect(result).toBe(8);
  });

  test("로또 구매갯수에 맞춰 랜덤 번호를 생성해야한다.", () => {
    //given
    const countOfLotto = 8;
    //when
    let result = Lotto.makeRandomArray(countOfLotto);
    //then
    expect(result).toHaveLength(countOfLotto);
  });
});
