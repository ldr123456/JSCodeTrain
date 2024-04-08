class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function hasCycle(head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true // 存在环
    }
  }
  return false // 不存在环
}

function detectCycle(head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      // 快慢指针相遇
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow // 返回环的入口点
    }
  }
  return null // 不存在环
}

// 测试
const node1 = new ListNode(3)
const node2 = new ListNode(2)
const node3 = new ListNode(0)
const node4 = new ListNode(-4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2 // 制造环

console.log('链表是否有环:', hasCycle(node1))

const cycleStart = detectCycle(node1)
console.log('环的入口点:', cycleStart ? cycleStart.val : 'None')
