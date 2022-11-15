const MyNumberGenerator = require("../src/model/Generator");

describe("값 생성기 테스트", () => {
  test("인자에 돈(숫자)를 넣으면 그만큼 복권이 생성되는데, 길이는 나누기 1000과 같다", () => {
    const generator = new MyNumberGenerator();
    expect(generator.generateMyLottoNumber(1000).length).toEqual(1);
  });

  test("인자에 돈(숫자)를 넣으면 그만큼 복권이 생성되는데, 길이는 나누기 1000과 같다", () => {
    const generator = new MyNumberGenerator();
    expect(generator.generateMyLottoNumber(100000).length).toEqual(100);
  });

  test("인자에 돈(숫자)를 넣으면 그만큼 복권이 생성되는데, 길이는 나누기 1000과 같다", () => {
    const generator = new MyNumberGenerator();
    expect(generator.generateMyLottoNumber(3000).length).toEqual(3);
  });
});
