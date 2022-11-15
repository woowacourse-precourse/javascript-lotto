const {random} = require("../src/common/util")

describe('랜덤 숫자 생성 함수 테스트', () => {
  let lottoNumber;
  beforeEach(() => {
    lottoNumber = random();
  })
  test('반환되는 배열의 길이가 6인지 검사', () => {
    expect(lottoNumber).toHaveLength(6);
  });

  test('반환되는 값 중에 중복된 숫자가 있는지 검사', () =>{
    const set = new Set(lottoNumber);
    expect([...set]).toHaveLength(6);
  })
});