const { NUMBER } = require('../../constant/constant');

const calculateTicketRank = (basic, bonus) => {

  let result = basic + bonus;

  if (result === 6) 
    if (bonus === 0) 
      result += 1;
  return String(NUMBER[result]);
  
};

module.exports = calculateTicketRank;
