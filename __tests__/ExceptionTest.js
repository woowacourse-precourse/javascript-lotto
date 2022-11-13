const App = require('../src/App');
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

describe('사용자의 구입 금액 입력 기능', () => {
    test('로또 구입 금액이 1,000원으로 나누어 떨어지지 않을 때 예외가 발생한다.', () => {
        const input = '100234';
 
        expect(() => app.isInDivisible(input))
        .toThrow("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    });
})