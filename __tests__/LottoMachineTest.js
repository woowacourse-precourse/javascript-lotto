const LottoMachine = require("../src/LottoMachine");

describe("로또 기계 클래스 테스트", () => {
    test("6개 수를 가진 로또가 생성된다.", () => {
        expect(LottoMachine.createLotto().length).toEqual(6);
    });

    test("정렬된 배열을 반환한다.", () => {
        const unsortedNumbers = [45, 35, 26, 10, 33, 2]
        expect(LottoMachine.sortNumbersAscending(unsortedNumbers)).toEqual([2, 10, 26, 33, 35, 45]);
    });

    test("전달된 개수만큼 로또를 생성한다.", () => {
        const amounts = [1, 2, 3, 4, 5];
        amounts.map((amount) => {
            expect(LottoMachine.createLottos(amount).length).toEqual(amount);
        })
    });
})