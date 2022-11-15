const countNumber = (num1, num2) => {
  let cnt = 0;
  num1.forEach((v) => {
    if (num2.includes(v)) cnt++;
  });
  return cnt;
};

module.exports = countNumber;
