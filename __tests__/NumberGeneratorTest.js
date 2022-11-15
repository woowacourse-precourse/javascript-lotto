const NumberGenerator = require("../src/lotto/domain/NumberGenerator");

describe("NumberGenerator 클래스 테스트", () => {
  test("길이를 체크하여 6자리가 생성되는지 확인한다.", () => {
    const numberGenerator = new NumberGenerator();
    expect(numberGenerator.createRandomNumbers().length).toEqual(6);
  });

  test("중복을 제거하여 서로 다른 숫자인지 확인한다.", () => {
    const numberGenerator = new NumberGenerator();
    const randomNumber = numberGenerator.createRandomNumbers();
    expect(new Set(randomNumber).size).toEqual(6);
  });

  test("범위를 설정하여 설정한 범위(1~45) 내의 값인지 확인한다.", () => {
    const numberGenerator = new NumberGenerator();
    const randomNumber = numberGenerator.createRandomNumbers();
    expect(randomNumber.every((number) => number > 0 && number < 46)).toEqual(
      true
    );
  });

  test.each([
    [
      [6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      [7, 5, 22, 11, 5, 33],
      [5, 5, 7, 11, 22, 33],
    ],
    [
      [123, 64564, 123432, 1, 0],
      [0, 1, 123, 64564, 123432],
    ],
  ])("기존: %s => 오름차순 정렬: %s", (array, sortArray) => {
    const numberGenerator = new NumberGenerator();
    expect(array.sort(numberGenerator.compareNumeric)).toEqual(sortArray);
  });
});
