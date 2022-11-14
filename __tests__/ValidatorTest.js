const Validator = require("../src/utils/Validator");

describe("Validator Util Class", () => {
  test("인풋 값이 숫자가 아니라면 예외가 발생한다.", () => {
    const errors = ["", " ", "a", "!^&"];
    errors.forEach((error) => {
      expect(() => {
        Validator.isNumber(error);
      }).toThrow();
    });
  });

  test("인풋 값의 길이가 일치하지 않는다면 예외가 발생한다.", () => {
    const targets = ["hi", "hello", "", " "];
    const lengths = [3, 1, 2, 3];

    targets.forEach((target, index) => {
      expect(() => {
        Validator.isLength(target, lengths[index]);
      }).toThrow();
    });
  });

  test("인풋 값의 범위가 일치하지 않는다면 예외가 발생한다.", () => {
    const numbers = [34, 21];
    const starts = [1, 22];
    const ends = [3, 24];

    numbers.forEach((number, index) => {
      expect(() => {
        Validator.isRange({
          targe: number,
          start: starts[index],
          end: ends[index],
        });
      }).toThrow();
    });
  });

  test("중복이 존재한다면 예외가 발생한다.", () => {
    const duplicated = [1, 1, 2, 3, 4, 5, 6];
    expect(() => {
      Validator.isDuplicated(duplicated);
    }).toThrow();
  });

  test("나눠서 나머지가 존재한다면 예외를 발생한다.", () => {
    const target = 1200;
    const unit = 1000;
    expect(() => {
      Validator.isDivisible(target, unit);
    }).toThrow();
  });

  test("크거나 같지 않다면 예외를 발생한다.", () => {
    const targets = [-1000, 999];
    const unit = 1000;

    targets.forEach((target) => {
      expect(() => {
        Validator.isGreaterOrEqual(target, unit);
      }).toThrow();
    });
  });
});
