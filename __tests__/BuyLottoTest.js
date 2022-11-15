const BuyLotto = require("../src/BuyLotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

afterAll(() => {
  Console.close();
});

describe("로또 구매 클래스 테스트", () => {
  describe("입력된 금액 유효성 검사", () => {
    test("입력된 값에 숫자가 아닌 문자가 포함된 경우", () => {
      const input = "1000abc!";
      const isNumber = jest.fn(input => {
        if (!/^[0-9]g/.test(input)) return false;
      });

      expect(isNumber(input)).toBe(false);
    });
    test("입력된 값이 1000으로 나눠 떨어지지 않는 경우", () => {
      const input = 10200;
      const isUnitPrice = jest.fn(input => {
        if (input % 1000 !== 0) return false
      })

      expect(isUnitPrice(input)).toBe(false);
    });

    test("구입 수량을 구한다", () => {
      const input = 21000;
      const quantity = input / 1000;

      expect(quantity).toBe(21);
    });

    test("구입 수량만큼 랜덤으로 로또 번호 생성", () => {
      Random.pickUniqueNumbersInRange = jest.fn();
      Random.pickUniqueNumbersInRange.mockReturnValue([1,2,3,4,5,6])

      const input = 21;
      const lottoNumbers = [];
      const makeLottoNumbers = jest.fn((quantity) => {
        for (let i = 0; i < quantity; i++) {
          lottoNumbers.push(Random.pickUniqueNumbersInRange())
        }
      });

      makeLottoNumbers(input);

      expect(lottoNumbers.length).toBe(21);
      expect(lottoNumbers[0].length).toBe(6);
    })
  });
});
