const { LottoValidator } = require("../../src/validators");

describe("LottoValidator.validateLottoNumbers", () => {
  test("입력받은 번호들의 개수가 로또 번호의 개수(6)와 다르다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    // when
    // then
    expect(() => {
      LottoValidator.validateLottoNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들에 중복되는 수가 있다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, 1, 2, 3, 4, 5];

    // when
    // then
    expect(() => {
      LottoValidator.validateLottoNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들이 숫자로만 이루어지지 않았다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, "2", 3, 4, 5, 6];

    // when
    // then
    expect(() => {
      LottoValidator.validateLottoNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들이 1~45 사이의 수가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [0, 1, 2, 3, 4, 5];

    // when
    // then
    expect(() => {
      LottoValidator.validateLottoNumbers(numbers);
    }).toThrow();
  });
});

describe("LottoValidator.validateWinningNumbers", () => {
  test("입력받은 번호들의 개수가 로또 번호의 개수(6)와 다르다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    // when
    // then
    expect(() => {
      LottoValidator.validateWinningNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들에 중복되는 수가 있다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, 1, 2, 3, 4, 5];

    // when
    // then
    expect(() => {
      LottoValidator.validateWinningNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들이 숫자로만 이루어지지 않았다면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [1, "2", 3, 4, 5, 6];

    // when
    // then
    expect(() => {
      LottoValidator.validateWinningNumbers(numbers);
    }).toThrow();
  });

  test("입력받은 번호들이 1~45 사이의 수가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const numbers = [0, 1, 2, 3, 4, 5];

    // when
    // then
    expect(() => {
      LottoValidator.validateWinningNumbers(numbers);
    }).toThrow();
  });
});

describe("LottoValidator.validateBonusNumber", () => {
  test("입력받은 번호가 숫자가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const number = "text";

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("입력받은 번호가 1~45 사이의 수가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const number = 0;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("입력받은 번호가 당첨 번호에 포함된다면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const number = 5;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("당첨번호의 개수가 로또 번호의 개수(6)와 다르다면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6, 7];
    const number = 8;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("당첨번호에 중복되는 수가 있다면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, 1, 2, 3, 4, 5];
    const number = 8;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("당첨번호가 숫자로만 이루어지지 않았다면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [1, "2", 3, 4, 5, 6];
    const number = 8;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });

  test("당첨번호가 1~45 사이의 수가 아니라면 예외가 발생해야 한다.", () => {
    // given
    const winningNumbers = [0, 1, 2, 3, 4, 5];
    const number = 8;

    // when
    // then
    expect(() => {
      LottoValidator.validateBonusNumber(number, winningNumbers);
    }).toThrow();
  });
});
