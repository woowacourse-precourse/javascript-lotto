const MissionUtils = require('@woowacourse/mission-utils')

const getInput = (message) => {
  return new Promise((resolve,reject)=>{
    MissionUtils.Console.readLine(message, (answer)=>{
      resolve(answer)
    })
  })
}

module.exports = getInput