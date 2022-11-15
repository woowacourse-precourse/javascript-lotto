const Game = require("../src/Game");

describe("게임 클래스 테스트", () => {

  test("숫자 배열을 받아 문자 배열을 리턴한다.", () => {
    const game = new Game();    
    expect(() => {
      game.numArraytoStringArray([1, 2, 3, 4, 5, 6, 7]);
    }).toEqual("[1, 2, 3, 4, 5, 6, 7]");
    
  });



});
