const App = require("../src/App");

describe("App 클래스 테스트", () => {
    test("구매 금액 입력 검증 : 문자 입력", () => {
        expect(() => {
          const app = new App();
          app.input_exception('string');
        }).toThrow("[ERROR]");
    });

    test("구매 금액에 따른 수량 계산 검증 : 1000으로 나누어 떨어지지 않음", () => {
        expect(() => {
          const app = new App();
          app.get_quantity_exception(1001);
        }).toThrow("[ERROR]");
    });

    test("구매 금액에 따른 수량 계산 검증 : 문자 입력", () => {
        expect(() => {
          const app = new App();
          app.get_quantity_exception("string");
        }).toThrow("[ERROR]");
    });

    test("구매 수량에 따른 로또 번호 발행 : 반환되는 길이 검사", () => {
        const app = new App();
        const result = app.publish_lotto(5);
        expect(result.length).toEqual(5);
    });

    test("당첨 번호 입력 검증 : 문자 입력", () => {
        expect(() => {
          const app = new App();
          app.input_arrangement("k,2,3,4,5,6");
        }).toThrow("[ERROR]");
    });
  });