class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function swapPairs(head) {
  const dummy = new ListNode(0)
  dummy.next = head
  let current = dummy
  while (current.next && current.next.next) {
    const firstNode = current.next
    const secondNode = current.next.next
    firstNode.next = secondNode.next
    current.next = secondNode
    current.next.next = firstNode
    current = current.next.next
  }
  return dummy.next
}

function printLinkedList(head) {
  let current = head
  const result = []
  while (current) {
    result.push(current.val)
    current = current.next
  }
  return result.join(' -> ')
}

// 测试
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log('原始链表:', printLinkedList(node1))

const swappedHead = swapPairs(node1)

console.log('两两交换后链表:', printLinkedList(swappedHead))
