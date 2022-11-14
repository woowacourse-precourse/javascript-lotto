const MissionUtils = require('@woowacourse/mission-utils');
const { lottoStatistics } = require('../lottoFunction/lottoResult');
const Lotto = require('../../Lotto');

const accountInput = () => {
  MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
    checkAccountValidation(input);
    lottoPrint(input);
    generateNumber(input);
  });
};

const lottoPrint = (account) => {
  MissionUtils.Console.print(`\n${account / 1000}개를 구매했습니다.`);
};

const checkAccountValidation = (input) => {
  const account = Number(input);

  if (input.length !== String(account).length) {
    throw new Error('[ERROR] 잘못된 입력입니다.');
  }
  if (account < 1000) {
    throw new Error('[ERROR] 1000원 이상 입력해주세요.');
  }
  if (account % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
  }
};

const generateNumber = (count) => {
  const lottos = [];
  const lottoCount = count / 1000;

  for (let i = 0; i < lottoCount; i++) {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    lottos.push(lotto);
  }

  printLottoNumber(lottos);
};

const printLottoNumber = (tickets) => {
  for (const ticket of tickets) {
    let output = '';
    for (const num of ticket) {
    }
  }
  tickets.map((element) =>
    MissionUtils.Console.print(`[${element.join(', ')}]`),
  );
  winningNumberInput(tickets);
};

const winningNumberInput = (tickets) => {
  MissionUtils.Console.readLine(
    '\n당첨 번호를 입력해 주세요.\n',
    (winningNumber) => {
      const lotto = new Lotto(winningNumber);
      bonusNumberInput(winningNumber, tickets);
    },
  );
};

const bonusNumberInput = (winningNumber, tickets) => {
  winningNumber = winningNumber.split(',').map((num) => Number(num));
  MissionUtils.Console.readLine(
    '\n보너스 번호를 입력해 주세요.\n',
    (bonusNumber) => {
      checkBonusValidation(bonusNumber, winningNumber);
      lottoStatistics(tickets, winningNumber, bonusNumber);
    },
  );
};

const checkBonusValidation = (bonusNumber, winningNumber) => {
  bonusNumber = Number(bonusNumber);
  if (isNaN(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 숫자만 입력 가능합니다.');
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
  }
  winningNumber.map((num) => {
    if (num === bonusNumber) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.');
    }
  });
};

module.exports = {
  accountInput,
  winningNumberInput,
  bonusNumberInput,
  checkAccountValidation,
  checkBonusValidation,
};
