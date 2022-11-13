const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkWinNumLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 당첨번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkWinNumDuplicate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 당첨번호는 중복되지 않아야 합니다");
  });

  test("로또 번호에 범위가 벗어난 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkWinNumRange([0, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 당첨번호는 1~45사의 숫자이어야합니다");
  });

  test("금액이 숫자이면서 1000의 배수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkMoney("1001");
    }).toThrow("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
  });

  test("금액이 숫자이면서 1000의 배수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkMoney("문자열");
    }).toThrow("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
  });

  test("입력받은 금액/로또가격 만큼의 배열이 반환된다", () => {
    // input
    const money = 3000;
    const price = 1000;
    // output
    const output = Lotto.genLottoNumArr(money).length;

    expect(output).toEqual(money / price);
  });

  test("보너스 번호가 1~45 사이의 수가 아니면 예외가 발생한다", () => {
    expect(() => {
      Lotto.checkBonusNum(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow(
      "[ERROR] 보너스번호는 1~45사이의 당첨번호와 중복되지않는 숫자이어야합니다"
    );
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다", () => {
    expect(() => {
      Lotto.checkBonusNum("문자열", [1, 2, 3, 4, 5, 6]);
    }).toThrow(
      "[ERROR] 보너스번호는 1~45사이의 당첨번호와 중복되지않는 숫자이어야합니다"
    );
  });

  test("보너스 번호가 당첨번호와 중복하면 예외가 발생한다", () => {
    expect(() => {
      Lotto.checkBonusNum(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow(
      "[ERROR] 보너스번호는 1~45사이의 당첨번호와 중복되지않는 숫자이어야합니다"
    );
  });

  test.only("로또 번호들중 당첨번호와 겹치는 번호들만을 반환한다", () => {
    // input
    const winNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const lottoNumaArr = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7, 8],
      [5, 6, 7, 8, 9, 10],
    ];
    //output
    const output = new Lotto(winNums, bonusNum, lottoNumaArr).filterMatchNum();

    expect(output).toEqual([
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7],
      [5, 6, 7],
    ]);
  });

  test.only("2등 번호를 제외한 번호들에게서 보너스번호를 삭제한다", () => {
    // input
    const winNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const lottoNumaArr = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7, 8],
      [5, 6, 7, 8, 9, 10],
    ];
    const bonusAndWinMatchNum = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7],
      [5, 6, 7],
    ];

    //output
    const output = new Lotto(
      winNums,
      bonusNum,
      lottoNumaArr
    ).deleteBonusNumExceptSecondLottery(bonusAndWinMatchNum);

    expect(output).toEqual([
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5],
      [5, 6],
    ]);
  });

  test.only("정해진 길이의 로또 번호들만 출력", () => {
    // input
    const winNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const lottoNumaArr = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7, 8],
      [5, 6, 7, 8, 9, 10],
    ];
    const onlyMatchNum = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5],
      [5, 6],
    ];
    const matchCount = "FOURTH_LOTTERY";

    //output
    const output = new Lotto(winNums, bonusNum, lottoNumaArr).classifyLottery(
      onlyMatchNum,
      matchCount
    );

    expect(output).toEqual([[1, 2, 4, 5]]);
  });

  test.only("6개 길이의 로또들에서 보너스 번호 포함 여부를 구분하여 객체로 출력", () => {
    // input
    const winNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const lottoNumaArr = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 4, 5, 7, 8],
      [5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6],
    ];
    const resultLottery = {
      FIFTH_LOTTERY: [],
      FOURTH_LOTTERY: [[1, 2, 4, 5]],
      THIRD_LOTTERY: [],
      FIRST_OR_SECOND_LOTTERY: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
      ],
    };

    //output
    const output = new Lotto(
      winNums,
      bonusNum,
      lottoNumaArr
    ).splitFirstandSecondLottery(resultLottery);

    expect(output).toEqual({
      SECOND_LOTTERY: [[1, 2, 3, 4, 5, 7]],
      FIRST_LOTTERY: [[1, 2, 3, 4, 5, 6]],
    });
  });
});
