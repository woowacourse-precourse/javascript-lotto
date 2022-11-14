const {
  checkDuplicatedLotto,
  checkAscendingLotto,
  checkLottoResult,
} = require("../src/Core/Lotto.util");

describe("checkDuplicatedLotto", () => {
  test("is check duplicated number return true", () => {
    // given
    const input = [1, 2, 3, 4, 5, 5];
    // when
    const expectResult = checkDuplicatedLotto(input);
    // then
    expect(expectResult).toBe(true);
  });

  test("is check duplicated number return false", () => {
    // given
    const input = [1, 2, 3, 4, 5, 6];
    // when
    const expectResult = checkDuplicatedLotto(input);
    // then
    expect(expectResult).toBe(false);
  });
});

describe("checkAscendingLotto", () => {
  test("is check ascending lotto number return true", () => {
    // given
    const input = [1, 2, 3, 4, 5, 6];
    // when
    const expectResult = checkAscendingLotto(input);
    // then
    expect(expectResult).toBe(true);
  });

  test("is check ascending lotto number return false", () => {
    // given
    const input = [6, 5, 4, 3, 2, 1];
    // when
    const expectResult = checkAscendingLotto(input);
    // then
    expect(expectResult).toBe(false);
  });
});

describe("checkLottoResult", () => {
  const answerLotto = [1, 2, 3, 4, 5, 6];
  const bonusLotto = 7;

  const checkLottoResultHelper = (input) =>
    checkLottoResult(input, answerLotto, bonusLotto);

  test("is return lotto correct num 1", () => {
    // given
    const input = [1, 7, 8, 9, 10, 11];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(1);
  });

  test("is return lotto correct num 2", () => {
    // given
    const input = [1, 2, 7, 8, 9, 10];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(2);
  });

  test("is return lotto correct num 3", () => {
    // given
    const input = [1, 2, 3, 7, 8, 9];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(3);
  });

  test("is return lotto correct num 4", () => {
    // given
    const input = [1, 2, 3, 4, 7, 8];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(4);
  });

  test("is return lotto correct num 5", () => {
    // given
    const input = [1, 2, 3, 4, 5, 8];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(5);
  });

  test("is return lotto correct num 6", () => {
    // given
    const input = [1, 2, 3, 4, 5, 6];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(6);
  });

  test("is return lotto correct num 7", () => {
    // given
    const input = [1, 2, 3, 4, 5, 7];
    // when
    const expectResult = checkLottoResultHelper(input);
    // then
    expect(expectResult).toBe(7);
  });
});
