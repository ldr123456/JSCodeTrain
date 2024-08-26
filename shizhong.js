function findMatchingTime() {
  let slowHour = 0 // 慢时钟的小时
  let fastHour = 0 // 快时钟的小时
  let slowMinutes = 0 // 慢时钟的分钟
  let fastMinutes = 0 // 快时钟的分钟
  let time = 0
  while (true) {
    slowMinutes += 58 // 慢时钟每小时慢2分钟
    fastMinutes += 61 // 快时钟每小时快1分钟
    time += 3 // 两时钟相差的时间，如果问快时钟快多少改成1，慢时钟改成2

  //  240小时
   if (slowMinutes >= 60) {
      slowMinutes -= 60
      slowHour = (slowHour + 1) % 12 // 慢时钟每次跨越一小时
    }
    if (fastMinutes >= 60) {
      fastMinutes -= 60
      fastHour = (fastHour + 1) % 12 // 快时钟每次跨越一小时
      if (fastMinutes >= 60) {
        fastMinutes -= 60
        fastHour = (fastHour + 1) % 12 // 快时钟每次跨越一小时
      }
    }
    if (slowHour === fastHour && slowMinutes === fastMinutes) {
return `${slowHour}:${slowMinutes < 10 ? '0' + slowMinutes : slowMinutes},时间差：${time}分`
    }
  }
}
// 写这个新的试试，
const matchingTime = findMatchingTime()
console.log(`第一次显示相同时间为 ${matchingTime}。`)
