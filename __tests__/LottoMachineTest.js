const LottoMachine = require("../src/LottoMachine");

describe("로또 기계 클래스 테스트", () => {
    test("6개 수를 가진 로또가 생성된다.", () => {
        expect(LottoMachine.createLotto().length).toEqual(6);
    });
})