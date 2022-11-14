const Lotto = require("../src/Lotto");

const sample = Array(46).fill(0);
sample[1] += 2;
sample[2] += 2;
sample[3] += 2;
sample[4] += 2;
sample[5] += 2;
sample[6] += 2;
sample[7] += 1;

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
    test("로또 번호 정상 출력 확인.", () => {
        const input = new Lotto([1, 2, 3, 4, 5, 6]);
        expect(input.print()).toEqual("[1, 2, 3, 4, 5, 6]");
    });

    test("로또 등수 정상 출력 확인 - 1등", () => {
        const input = new Lotto([1, 2, 3, 4, 5, 6]);
        expect(input.check(sample)).toEqual(5);
    });

    test("로또 등수 정상 출력 확인 - 2등", () => {
        const input = new Lotto([1, 2, 3, 4, 5, 7]);
        expect(input.check(sample)).toEqual(4);
    });

    test("로또 등수 정상 출력 확인 - 3등", () => {
        const input = new Lotto([1, 2, 3, 4, 5, 8]);
        expect(input.check(sample)).toEqual(3);
    });

    test("로또 등수 정상 출력 확인 - 4등", () => {
        const input = new Lotto([1, 2, 3, 4, 8, 9]);
        expect(input.check(sample)).toEqual(2);
    });

    test("로또 등수 정상 출력 확인 - 5등", () => {
        const input = new Lotto([1, 2, 3, 7, 8, 9]);
        expect(input.check(sample)).toEqual(1);
    });

    test("로또 등수 정상 출력 확인 - 미당첨", () => {
        const input = new Lotto([10, 11, 12, 4, 8, 9]);
        expect(input.check(sample)).toEqual(0);
    });
});
