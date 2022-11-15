const {
  validateBonusNum,
  validateMoney,
} = require("../src/CheckValidationOfBonusAndMoney");
const Lotto = require("../src/Lotto");
const calculationOfLottoGame = require("../src/CalculationOfLottoGame");
const { ERROR, RESULT } = require("../src/data/Constants");

describe("로또게임 입력값 타당성검사 에러작동 테스트", () => {
  test("금액을 입력했을 때_1000원 단위가 아닐 때 에러발생", () => {
    expect(() => validateMoney(1100)).toThrow(ERROR.ERROR_MONEY_UNIT);
  });
  test("금액을 입력했을 때_0원 미만일 때 에러발생", () => {
    expect(() => validateMoney(0)).toThrow(ERROR.ERROR_MONEY_MINIMUM);
  });

  test("당첨 번호를 입력했을 때_숫자가 아닌 다른걸 입력 했을 때 에러발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, "a"])).toThrow(
      ERROR.ERROR_WINNING_NUM_ONLY_NUM
    );
  });

  test("당첨 번호를 입력했을 때_콤마(,)가 연속으로 입력됐을 때 에러발생", () => {
    expect(() => new Lotto([``, 1, 2, 3, 4, 5])).toThrow(
      ERROR.ERROR_WINNING_NUM_COMMA
    );
  });
  test("당첨 번호를 입력했을 때_입력값이 1미만 45초과 일때 에러발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 56])).toThrow(
      ERROR.ERROR_WINNING_NUM_RANGE
    );
  });

  test("당첨 번호를 입력했을 때_6개가 입력되지 않았을 때 에러발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      ERROR.ERROR_WINNING_NUM_LENGTH
    );
  });

  test("당첨 번호를 입력했을 때_중복되는 값이 있을 때 에러발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR.ERROR_WINNING_NUM_DUPLICATION
    );
  });

  test("보너스 번호를 입력했을 때_1미만 45초과 일때 에러발생", () => {
    const bonusNum = 46;
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow(
      ERROR.ERROR_BONUS_RANGE
    );
  });

  test("보너스 번호를 입력했을 때_숫자가 아닌 다른걸 입력 했을 때 에러발생", () => {
    const bonusNum = "a";
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow(
      ERROR.ERROR_BONUS_NUMBER
    );
  });

  test("보너스 번호를 입력했을 때_당첨 번호와 중복되는 보너스 번호를 입력 했을 때 에러발생", () => {
    const bonusNum = 1;
    const winningNum = [1, 2, 3, 4, 5, 6];

    expect(() => validateBonusNum(bonusNum, winningNum)).toThrow(
      ERROR.ERROR_BONUS_DUPLICATION
    );
  });
});

describe("로또 게임 계산 테스트", () => {
  test("1000으로 나눈 몫을 반환", () => {
    expect(calculationOfLottoGame.HowManyCanBuyLotto(11000)).toBe(11);
  });

  test("중복이 없고 길이가 6인 배열 생성_길이가 6인지 테스트", () => {
    const Arr = calculationOfLottoGame.makeUsersLotto(1);
    expect(Arr[0].length).toBe(6); //길이가 6인지 테스트
  });

  test("중복이 없고 길이가 6인 배열 생성_중복 유무 테스트", () => {
    const Arr = calculationOfLottoGame.makeUsersLotto(1);
    let checkArr = [];

    function checkDuplication() {
      Arr[0].forEach((number) => {
        if (checkArr.includes(number)) {
          return false;
        }
        checkArr.push(number);
      });
      //중복있으면 false 없으면 true

      return true;
    }

    expect(checkDuplication()).toBeTruthy();
  });

  test("유저가 가지고있는 로또 번호 배열 중 당첨번호의 개수를 배열로 리턴 하는 함수 테스트", () => {
    const usersLotto = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const winLotto = ["5", "7", "11"];

    expect(
      calculationOfLottoGame.makeWinningOfLottoArr(usersLotto, winLotto)
    ).toEqual([0, 1, 1]);
  });

  test("배열과 숫자를 배열로 합쳐주는 함수 테스트", () => {
    const arr = [1, 2, 3];
    const num = 4;

    expect(calculationOfLottoGame.makeArrayOfArrayPlusNum(arr, num)).toEqual([
      1, 2, 3, 4,
    ]);
  });

  test("유저의 로또번호 중 보너스 당첨 번호가 있는지 확인 함수 테스트", () => {
    const userLotto = [
      [1, 2, 3, 4],
      [11, 22, 33, 44],
    ];
    const bonusNum = 1;
    const index = 0;
    const winLotto = new Map();
    winLotto.set("있음", 0);
    winLotto.set("없음", 0);

    function checkOfBonusNumHave(usersLotto, bonusNum, { index }, winLotto) {
      if (usersLotto[index].includes(parseInt(bonusNum)) === true) {
        return winLotto.set("있음", winLotto.get("있음") + 1);
      }
      return winLotto.set("없음", winLotto.get("없음") + 1);
    }
    checkOfBonusNumHave(userLotto, bonusNum, { index: index }, winLotto);

    expect(winLotto.get("있음")).toBe(1);
  });

  test("총 당첨금액 계산 함수 테스트", () => {
    const result = [
      ["5등", 1],
      ["4등", 1],
      ["3등", 1],
      ["2등", 1],
      ["1등", 1],
    ];

    expect(calculationOfLottoGame.makeAmountOfWinningMoney(result)).toBe(
      2031555000
    );
  });
});
