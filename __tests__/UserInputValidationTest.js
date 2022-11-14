const Validation = require("../src/Validation.js");

describe("Validation.isEmptyInput", () => {
  test("input이 없는 경우, true를 반환해야 한다.", () => {
    const input = "";

    const result = Validation.isEmptyInput(input);

    expect(result).toBe(true);
  });
});

describe("Validation.hasOnlyNumber", () => {
  test("input에 숫자외에 문자가 포함된 경우, false를 반환해야 한다.", () => {
    const input = ["팔", "천", "원"];

    const result = Validation.hasOnlyNumber(input);

    expect(result).toBe(false);
  });

  test("input에 공백이 포함된 경우, false를 반환해야 한다.", () => {
    const input = [" ", "8", "0", "0", "0", " "];

    const result = Validation.hasOnlyNumber(input);

    expect(result).toBe(false);
  });

  test("input이 모두 숫자일 경우, true를 반환해야 한다.", () => {
    const input = ["8", "0", "0", "0"];

    const result = Validation.hasOnlyNumber(input);

    expect(result).toBe(true);
  });
});

describe("Validation.isStartedZero", () => {
  test("input이 0으로 시작하면, true를 반환해야 한다.", () => {
    const input = "0";

    const result = Validation.isStartedZero(input);

    expect(result).toBe(true);
  });

  test("input이 0이 아닌 수로 시작하면, false를 반환해야 한다.", () => {
    const input = "8000";

    const result = Validation.isStartedZero(input);

    expect(result).toBe(false);
  });
});

describe("Validation.isDivisibleByLottoPrice", () => {
  test("input이 로또가격으로 나누어 떨어지지 않는 경우, false를 반환해야 한다.", () => {
    const input = "8800";

    const result = Validation.isDivisibleByLottoPrice(input);

    expect(result).toBe(false);
  });

  test("input이 로또가격으로 나누어 떨어지는 경우, true를 반환해야 한다.", () => {
    const input = "8000";

    const result = Validation.isDivisibleByLottoPrice(input);

    expect(result).toBe(true);
  });
});

describe("Validation.isValidLottoNumberLength", () => {
  test("로또 번호가 지정된 길이보다 긴 경우, false를 반환해야 한다.", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];

    const result = Validation.isValidLottoNumberLength(input);

    expect(result).toBe(false);
  });

  test("로또 번호가 지정된 길이보다 짧은 경우, false를 반환해야 한다.", () => {
    const input = [1, 2, 3, 4, 5];

    const result = Validation.isValidLottoNumberLength(input);

    expect(result).toBe(false);
  });
});

describe("Validation.hasUniqueLottoNumber", () => {
  test("로또 번호에 중복된 숫자가 있으면, false를 반환해야 한다.", () => {
    const input = [1, 2, 3, 4, 5, 5];

    const result = Validation.hasUniqueLottoNumber(input);

    expect(result).toBe(false);
  });
});

describe("Validation.isValidLottoNumberRange", () => {
  test("각 로또 번호 중 하나라도 지정된 범위를 벗어나면, false를 반환해야 한다.", () => {
    const input = [1, 2, 3, 4, 5, 50];

    const result = Validation.isValidLottoNumberRange(input);

    expect(result).toBe(false);
  });
});

describe("Validation.isUniqueBonusNumber", () => {
  test("보너스번호가 당첨번호와 중복되면, false를 반환해야 한다.", () => {
    const bonusNumber = "6";
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const result = Validation.isUniqueBonusNumber(bonusNumber, winningNumbers);

    expect(result).toBe(false);
  });
});
