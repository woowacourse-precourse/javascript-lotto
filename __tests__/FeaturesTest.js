const App = require("../src/App");

describe('App 클래스 테스트', () => {
    test('로또 구입 금액이 가격(1000원)으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
        const app = new App();
        expect(() => app.isPurchaseAmountValid('1200')).toThrow(
            '[ERROR] 로또를 살 수 없는 금액입니다.'
        );
    });

    test('보너스 번호가 당첨 번호와 중복되었을 경우 예외가 발생한다.', () => {
        const app = new App();
        expect(() => app.isBonusDuplicated(1, [1, 2, 3, 4, 5, 6])).toThrow(
            '[ERROR] 중복된 번호입니다.'
        );
    });

    test('당첨 번호와 로또가 몇 개 숫자가 일치하는지 알 수 있다.', () => {
        const app = new App();
        expect(app.getSingleResult([3, 5, 12, 31, 40, 41], [1, 2, 3, 4, 5, 6, 7])).toBe(
            2
        );
    });

    test('3개 숫자가 일치할 경우 5등에 해당한다.', () => {
        const app = new App();
        expect(app.getSingleResult([1, 3, 4, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7])).toBe(
            3
        );
    });

    test('4개 숫자가 일치할 경우 4등에 해당한다.', () => {
        const app = new App();
        expect(app.getSingleResult([1, 3, 4, 5, 11, 12], [1, 2, 3, 4, 5, 6, 7])).toBe(
            4
        );
    });

    test('5개 숫자가 일치할 경우 3등에 해당한다.', () => {
        const app = new App();
        expect(app.getSingleResult([1, 3, 4, 5, 6, 12], [1, 2, 3, 4, 5, 6, 7])).toBe(
            5
        );
    });

    test('5개 숫자가 일치하고 보너스 번호가 일치할 경우 2등에 해당한다.', () => {
        const app = new App();
        expect(app.getSingleResult([1, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])).toBe(
            7
        );
    });

    test('6개 숫자가 일치할 경우 1등에 해당한다.', () => {
        const app = new App();
        expect(app.getSingleResult([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).toBe(
            6
        );
    });

    test('구입 금액과 당첨 내역을 통해 수익률을 알 수 있다.', () => {
        const app = new App();
        expect(app.getYield([0, 1, 0, 0, 0], 1000)).toBe(
            150
        );
    });

})