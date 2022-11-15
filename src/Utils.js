function parseAnswerInput(userInput) {
  return userInput.split(",").map((singleUserInput) => Number(singleUserInput));
}

function parseBonusInput(userInput) {
  return Number(userInput);
}

module.exports = { parseAnswerInput, parseBonusInput };
