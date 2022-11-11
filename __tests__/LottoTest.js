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
  test("(금액 / 1000)개만큼의 복권을 발행한다.", () => {
    const lotto = new Lotto();
    const useMoney = (lotto.useMoney = 10000);
    expect(lotto.lottoCountReturn(useMoney)).toEqual(10);
  });

  test("복권을 발행 할 때 중복 되지 않는 숫자 6개를 1~45의 범위에서 발행", () => {
    const lotto = new Lotto();
    expect(lotto.lottoNumber()).toHaveLength(6);
  });

  test("발행한 복권을 오름차순으로 정렬하고 배열에 따로 저장", () => {
    const lotto = new Lotto();
    const array = [4, 8, 10, 20, 30, 44];
    lotto.lottoSort([10, 4, 30, 20, 8, 44]);
    expect(lotto.myLotto[0]).toMatchObject(array);
  });
});
