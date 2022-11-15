const Payment = require("../src/Payment");

describe("페이먼트 클래스 테스트", () => {
  test("구매금액이 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Payment(1000.5);
    }).toThrow("[ERROR]");
  });





});

// validatePaymentInteger(numbers) {
//     if (!Number.isInteger(numbers)) {
//       throw new Error("[ERROR] 구매금액은 정수여야 합니다.");
//     }
//   }

//   validatePaymentMultipleOfThousand(numbers) {
//     if (numbers % 1000 !== 0) {
//       throw new Error("[ERROR] 구매금액은 1000원 단위여야 합니다.");
//     }
//   }

//   validatePaymentNotNegative(numbers) {
//     if (numbers < 0) {
//       throw new Error("[ERROR] 구매금액은 0 이상이어야 합니다.");
//     }
//   }