const Lotto = require("../src/Lotto");
const LottoGame = require("../src/LottoGame");
const LottoResult = require("../src/LottoResult");
const LottoValidation = require("../src/LottoValidation");

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

  test("로또 번호에 1~45 범위 밖 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR]");
  });
  //유효성 검사
  test("입력이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkIsNumber("a");
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkIsNumber("b");
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkIsNumber("1a");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkDuplicate([1, 2, 3, 4, 5, 1]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkDuplicate([6, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("배열에 1~45 범위 밖 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkLottoRange([100, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkLottoRange([1, 2, 3, 4, 5, 67]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkBonusDuplicate(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkBonusDuplicate(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("입력이 0이면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkZero("0");
    }).toThrow("[ERROR]");
  });

  //result 검사
  test("로또 당첨 번호와 발행한 로또간 매칭 카운트를 반환해주는 getMatchCount 함수가 정상 작동한다.", () => {
    const winningNumbers = { winning: [1, 2, 3, 4, 5, 6], bonus: 7 };
    const lottery = new Set([1, 2, 3, 4, 11, 12]);

    const count = LottoResult.getMatchCount(winningNumbers, lottery);

    expect(count).toEqual("four");
  });

  test("당첨 번호와 추첨 번호를 비교하여 count하는 countMatch()함수가 정상 작동한다.", () => {
    const lottoResult = new LottoResult();
    const winningNumbers = { winning: [1, 2, 3, 4, 5, 6], bonus: 7 };
    const lotteries = [
      [1, 2, 3, 4, 6, 7],
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 11, 12, 13],
      [33, 32, 31, 34, 37, 38],
      [1, 2, 3, 4, 5, 6],
    ];

    lottoResult.countMatch(winningNumbers, lotteries);

    expect(lottoResult.lottoMatchCounter).toEqual({
      three: 1,
      four: 0,
      five: 1,
      fiveWithBonus: 1,
      six: 1,
      out: 1,
    });
  });

  test("누적 수익을 리턴하는 calculateProfit 함수가 정상 작동한다.", () => {
    const lottoResult = new LottoResult();
    lottoResult.lottoMatchCounter = {
      three: 1,
      four: 1,
      five: 1,
      fiveWithBonus: 1,
      six: 1,
      out: 1,
    };

    const totalProfit = lottoResult.calculateProfit();

    expect(totalProfit).toEqual(2031555000);
  });
});
