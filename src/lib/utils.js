const convertAnswerIntoArray = (answer) => {
  return answer.split(',').map((item) => Number(item));
};

module.exports = { convertAnswerIntoArray };
