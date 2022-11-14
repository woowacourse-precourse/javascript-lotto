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
  test("로또 번호는 1~45 사이의 값이어야 한다. (1) 46이상 값 포함", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 1~45 사이의 값이어야 한다. (1) 1미만 값 포함", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 당첨 테스트 :: calcWinning", () => {
  test("로또 0개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","9","10","12","13","14"]);
    console.log(lotto.WinningNumber);
    expect(lotto.WinningNumber).toEqual(0);
  });

  test("로또 1개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","9","10","12","13","14"]);
    expect(lotto.WinningNumber).toEqual(1);
  });

  test("로또 2개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","2","10","12","13","14"]);
    expect(lotto.WinningNumber).toEqual(2);
  });

  test("로또 3개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 5, 6, 7]);
    lotto.calcWinning(["1","2","4","6","13","14"]);
    expect(lotto.WinningNumber).toEqual(3);
  });

  test("로또 4개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","2","4","6","13","14"]);
    expect(lotto.WinningNumber).toEqual(4);
  });

  test("로또 5개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","2","3","4","5","14"]);
    expect(lotto.WinningNumber).toEqual(5);
  });

  test("로또 6개 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calcWinning(["1","2","3","4","5","6"]);
    expect(lotto.WinningNumber).toEqual(6);
  });
});

describe("로또 보너스 당첨 테스트 :: matchBonus", () => {
  test("보너스 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.matchBonus(1);
    expect(lotto.bonus).toEqual(true);
  });

  test("보너스 당첨 X", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.matchBonus(45);
    expect(lotto.bonus).toEqual(false);
  });
});
