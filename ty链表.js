// 面试题
// **合并两个有序链表** 
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例:
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 已知 List 定义
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createList(arr) {
  if(arr.length === 0){
    return null
  }
  // 要求实现该函数
	// arr 是排好序的数字数组，返回值是 ListNode
  let dummy = new ListNode(0)
  let current = dummy
  for(let i = 0;i < arr.length;i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode
    current = current.next
  }
  return dummy.next
}
function mergeTwoLists(l1, l2) {
	// 要求实现该函数
	// l1, l2 是排好序的 ListNode，返回值是合并后的有序的 ListNode
  let dummy = new ListNode(0)
  let current = dummy
  while(l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      current.next = l1;
      l1 = l1.next
    }else{
      current.next = l2;
      l2 = l2.next
    }
    current = current.next
  }
  if(l1 === null){
    current.next = l2
  }else if(l2 === null){
    current.next = l1
  }
  return dummy.next
}

function printList(l1) {
	// 要求实现该函数
	// l1 是 ListNode，将列表打印为类似 1->2->3 形式
  if(l1 === null){
    return console.log(null);
  }
  if(l1.next === null){
    return console.log(li.val)
  }
  let result = ''
  let current = l1
  while(current !== null){
    result += current.val
    if(current.next !== null){
      result += '->'
    }
    current = current.next
  }
  return console.log(current);
}

// 创建链表 1->2->4
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

// 创建链表 1->3->4
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

// 合并两个链表
let merged = mergeTwoLists(l1, l2);


// 打印合并后的链表
while (merged !== null) {
  console.log(merged.val);
  merged = merged.next;
}
