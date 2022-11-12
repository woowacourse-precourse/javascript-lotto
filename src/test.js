const { Console } = require('@woowacourse/mission-utils');
const printSummary = (arr) => {
  const descriptionArr = [
    '3개 일치',
    '4개 일치',
    '5개 일치',
    '5개 일치, 보너스 볼 일치',
    '6개 일치',
  ];
  const prizeMoneyArr = [
    '5,000',
    '50,000',
    '1,500,000',
    '30,000,000',
    '2,000,000,000',
  ];

  arr.forEach((value, index) => {
    const script = `${descriptionArr[index]} (${prizeMoneyArr[index]}원) - ${value}개`;
    Console.print(script);
  });
};

module.exports = printSummary;
