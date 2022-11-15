const Lotto = require("../src/Lotto");
const checkError = require('../src/controller/CheckError')

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

describe('구입 금액 1,000원 단위 확인 테스트', () => {
  test('구입 금액이 1,000원으로 나누어 떨어진다.', () => {
    expect(checkError.isDivideZero(14000)).toEqual(true)
  })
  
  test('구입 금액이 1,000원으로 나누어 떨어지지 않는다.', () => {
    expect(() => {
      checkError.isDivideZero(14500)
    }).toThrow('[ERROR]')
  })

  test('구입 금액 타입이 숫자가 아닌 경우', () => {
    expect(() => {
      checkError.isDivideZero('aabb1')
    }).toThrow('[ERROR]')
  })
})
