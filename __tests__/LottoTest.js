const Lotto = require("../src/Lotto");

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

  test("예외 조건에 걸리지 않으면 정상 동작한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });
  
  test("숫자 6개를 모두 맞추면 1등이다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const place = lotto.winWhatPlace([1, 2, 3, 4, 5, 6], 9);
    console.log(`등수는: ${place}등 입니다.`);
    expect(place).toEqual(1);
  });

  test("숫자 5개와 보너스 숫자를 맞추면 2등이다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const place = lotto.winWhatPlace([1, 2, 3, 4, 5, 7], 6);
    console.log(`등수는: ${place}등 입니다.`);
    expect(place).toEqual(2);
  });
  
  test("숫자 5개는 맞지만 보너스 숫자를 맞추지 못하면 3등이다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const place = lotto.winWhatPlace([1, 2, 3, 4, 5, 7], 8);
    console.log(`등수는: ${place}등 입니다.`);
    expect(place).toEqual(3);
  });

  test("숫자 6개를 모두 틀리면 아무것도 아니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const place = lotto.winWhatPlace([7, 8, 9, 10, 11, 12], 6);
    console.log(`등수는: ${place}등 입니다.`);
    expect(place).toEqual(0);
  });
});
