const Lotto = require("../src/Lotto/Lotto");
const Bonus = require("../src/Lotto/Bonus");
const { ERROR } = require("../src/Constants");

const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus({ numbers: [46], winningNumbers: lotto });
    }).toThrow(ERROR.number_out_of_range);
  });

  test("보너스 번호와 로또 번호에 중복되는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus({ numbers: [1], winningNumbers: lotto });
    }).toThrow(ERROR.has_duplicate_number);
  });

  test("보너스 번호가 정한 개수보다 많이 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus({ numbers: [1, 2], winningNumbers: lotto });
    }).toThrow(ERROR.incorrect_number_of_bonus_number);
  });

  test("getNumbers() 테스트", () => {
    expect(
      new Bonus({ numbers: [45], winningNumbers: lotto }).getNumbers()
    ).toEqual([45]);
  });
});
