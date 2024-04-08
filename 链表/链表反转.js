class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverseLinkedList(head) {
  let prev = null
  let current = head
  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
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

const reversedHead = reverseLinkedList(node1)

console.log('反转后链表:', printLinkedList(reversedHead))
