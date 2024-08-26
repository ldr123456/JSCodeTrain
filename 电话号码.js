// 1.找到相同的电话号码和重复数量
// 电话机按键中英文字母（除Q和Z外）和电话号码之间存在如下对应关系：
// A,B,C -> 2
// D,E,F -> 3
// G,H,I -> 4
// J,K,L -> 5
// M,N,O -> 6
// P,R,S -> 7
// T,U,V -> 8
// W,X,Y -> 9
// 美国标准的电话号码格式为xxx-xxxx，其中x表示0-9中的一个数字。有时为方便记忆，会将电话号码中的数字转变为英文字母，如263-7422为America。有时还会加上“-”作为分隔符，如449-6753记成Hi-World。当然，没有必要将所有的数字都转变为字母，所以474-6635可以记作iPhone-5。
// 总之，一个方便记忆的电话号码由数字和除Q、Z外的英文字母组成，并且可以在任意位置插入任意多的“-”符号。
// 现在有一个电话号码列表，记录着许多方便记忆的电话号码。不同的方便记忆的电话号码可能对应相同的标准号码，你能找出它们吗?
//
// 输入：字符串数组，每一项是一个方便记忆的电话号码
//
// 输出：
// 输出包括若干行，每行包括一个标准电话号码（xxx-xxxx）以及它重复出现的次数k（k >= 2），中间用空格分隔。输出的标准电话号码需按照升序排序。
// 如果没有重复出现的标准电话号码，则输出一行“No duplicates.”。
//
// 样例输入：
// [‘4873279’,
// ‘ITS-EAS--Y-‘,
// ’888-4567’,
// ‘3-10-10-10’,
// ‘888-GLO-P’,
// ‘TUT-GLOP’,
// ‘967-11-11’,
// ‘310-GI--NO’,
// ‘F101010’,
// ‘888-1200’,
// ‘-4-8-7-3-2-7-9-‘,
// ‘487-3279’
// ]
//
// 样例输出：
// 310-1010 2
// 487-3279 4
// 888-4567 3
//
function numbers(phone) {
  const map = {
    A: '2',
    B: '2',
    C: '2',
    D: '3',
    E: '3',
    F: '3',
    G: '4',
    H: '4',
    I: '4',
    J: '5',
    K: '5',
    L: '5',
    M: '6',
    N: '6',
    O: '6',
    P: '7',
    R: '7',
    S: '7',
    T: '8',
    U: '8',
    V: '8',
    W: '9',
    X: '9',
    Y: '9'
  }
  return phone.replace(/[A-Z]/g, (char) => map[char])
}
function phones(phones) {
  const count = {}
  phones.forEach((item) => {
    const number = numbers(item)
    const start = number.replace(/-+/g, '')
    const end = start.slice(0, 3) + '-' + start.slice(3)
    if (count[end]) {
      count[end]++
    } else {
      count[end] = 1
    }
  })
  const arr = Object.keys(count).filter((key) => count[key] > 1)
  if (arr.length === 0) {
    console.log('No duplicates.')
  } else {
    arr.sort().forEach((item) => {
      console.log(`${item} ${count[item]}`)
    })
  }
}
const phone = [
  '4873279',
  'ITS-EAS--Y-',
  '888-4567',
  '3-10-10-10',
  '888-GLO-P',
  'TUT-GLOP',
  '967-11-11',
  '310-GI--NO',
  'F101010',
  '888-1200',
  '-4-8-7-3-2-7-9-',
  '487-3279'
]
phones(phone)

// 体验部  客服业务（对接公司内所有业务） 租车业务（第三方车辆租赁）
// 注意代码规范
