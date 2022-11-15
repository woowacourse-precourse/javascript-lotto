const Comparator = require("../src/Comparator");

describe("비교기 클래스 테스트", () => {
  test("6개 일치 1개, 3개 일치 3개", () => {
    const comparator = new Comparator();
    let listOfNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [4, 5, 6, 7, 8, 9],
      [2, 3, 4, 8, 9, 10],
      [11, 12, 13, 14, 15, 16],
    ];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 3,
      four: 0,
      five: 0,
      fivePlusBonus: 0,
      six: 1,
    });
  });

  test("6개 일치", () => {
    const comparator = new Comparator();
    let listOfNumbers = [[1, 2, 3, 4, 5, 6]];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 0,
      four: 0,
      five: 0,
      fivePlusBonus: 0,
      six: 1,
    });
  });

  test("5개 + 보너스 번호 일치", () => {
    const comparator = new Comparator();
    let listOfNumbers = [[1, 2, 3, 4, 5, 7]];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 0,
      four: 0,
      five: 0,
      fivePlusBonus: 1,
      six: 0,
    });
  });

  test("5개 일치", () => {
    const comparator = new Comparator();
    let listOfNumbers = [[1, 2, 3, 4, 5, 8]];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 0,
      four: 0,
      five: 1,
      fivePlusBonus: 0,
      six: 0,
    });
  });

  test("4개 일치", () => {
    const comparator = new Comparator();
    let listOfNumbers = [[1, 2, 3, 4, 7, 8]];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 0,
      four: 1,
      five: 0,
      fivePlusBonus: 0,
      six: 0,
    });
  });

  test("3개 일치", () => {
    const comparator = new Comparator();
    let listOfNumbers = [[1, 2, 3, 7, 8, 9]];
    let winningNumbers = "1, 2, 3, 4, 5, 6";
    let bonusNumber = 7;
    const result = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual({
      three: 1,
      four: 0,
      five: 0,
      fivePlusBonus: 0,
      six: 0,
    });
  });
});
