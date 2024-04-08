class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverseKGroup(head, k) {
  if (!head || k <= 1) return head

  let dummy = new ListNode(0)
  dummy.next = head

  let prev = dummy
  while (prev) {
    prev = reverseNextK(prev, k)
  }

  return dummy.next
}

function reverseNextK(prev, k) {
  let last = prev
  for (let i = 0; i < k + 1; i++) {
    last = last.next
    if (!last && i !== k) {
      return null // 不足 k 个节点，不需要反转
    }
  }

  let tail = prev.next
  let curr = prev.next.next
  while (curr !== last) {
    let next = curr.next
    curr.next = prev.next
    prev.next = curr
    tail.next = next
    curr = next
  }

  return tail
}

function printList(head) {
  let curr = head
  while (curr) {
    process.stdout.write(curr.val.toString() + ' -> ')
    curr = curr.next
  }
  process.stdout.write('null\n')
}

// 测试
let head = new ListNode(1)
let current = head
for (let i = 2; i <= 8; i++) {
  current.next = new ListNode(i)
  current = current.next
}

console.log('原始链表:')
printList(head)

head = reverseKGroup(head, 3)

console.log('每 3 个节点反转后的链表:')
printList(head)
