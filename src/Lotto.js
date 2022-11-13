class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

const getLottoNumber = (count) => {
  const numbers = [];
  for(let i = 0; i < count; i++) {
    numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  // MissionUtils.Console.print(numbers);   
  return numbers;
}

const MissionUtils = require("@woowacourse/mission-utils");
MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (money) => {
  const count = Math.floor(money / 1000);
  let winNumbers = [];
  let bonusNumber;
  MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  const numbers = getLottoNumber(count);
  numbers.forEach(lotto => {
    MissionUtils.Console.print(lotto);
  });

  MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
    numbers = numbers.split(',');
    // MissionUtils.Console.print(numbers);
    let intNumber = numbers.map((x) => parseInt(x));
    // MissionUtils.Console.print(intNumber);
    winNumbers = intNumber;
    // MissionUtils.Console.print('\n');
    // MissionUtils.Console.close();
  });
  MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
    bonusNumber = bonus;
    MissionUtils.Console.print('\n');
  });

});
// getLottoNumber(3);
// const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
module.exports = Lotto;
