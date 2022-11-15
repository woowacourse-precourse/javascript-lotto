function parseAnswerInput(userInput) {
  return userInput.split(",").map((singleUserInput) => Number(singleUserInput));
}

module.exports = { parseAnswerInput };
