const { ValidationError } = require("../../src/errors");

describe("ValidationError 테스트", () => {
  test("ValidationError는 에러를 던질 수 있어야 한다.", () => {
    // given
    const validationError = () => {
      throw new ValidationError();
    };

    // when, then
    expect(validationError).toThrow();
  });

  test("ValidationError는 에러 객체를 상속 해야한다.", () => {
    // given
    const validationError = new ValidationError();

    // when, then
    expect(validationError instanceof Error).toBe(true);
  });

  test("ValidationError는 constructor와 동일한 이름을 가져야 한다.", () => {
    // given
    const validationError = new ValidationError();

    // when, then
    expect(validationError.name).toEqual(validationError.constructor.name);
  });

  test("ValidationError는 '[ERROR]'로 시작하는 에러 문구를 가져야 한다.", () => {
    // given
    const validationError = () => {
      throw new ValidationError();
    };

    // when, then
    expect(validationError).toThrow("[ERROR]");
  });

  test("ValidationError는 입력받은 에러 문구를 출력할 수 있어야 한다.", () => {
    // given
    const testMessage = "에러 테스트";
    const validationError = () => {
      throw new ValidationError(testMessage);
    };

    // when, then
    expect(validationError).toThrow(`[ERROR] ${testMessage}`);
  });
});
