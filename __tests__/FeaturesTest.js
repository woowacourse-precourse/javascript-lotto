const App = require("../src/App");

describe('기능 테스트', () => {
    test('로또 구입 금액 예외 처리', () => {
        const app = new App();
        expect(() => app.isPurchaseAmountValid('1200')).toThrow(
            '[ERROR] 로또를 살 수 없는 금액입니다.'
        );
    });

    test('보너스 번호 중복 여부 예외 처리', () => {
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


})