function removeDuplication(userInput) {
  const removeArr = userInput.filter((v, i) => {
    return userInput.indexOf(v) === i;
  });

  return removeArr;
}

exports.removeDuplication = removeDuplication;
