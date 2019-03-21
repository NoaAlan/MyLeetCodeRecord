const describe = 'https://leetcode-cn.com/problems/add-two-numbers/'

// 2019-03-15

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let res = 0
	l1.map((el, i) => {
		if (i > 0) {
			res += el * (i * 10)
		} else {
			res += el
		}
	})

	l2.map((el, i) => {
		if (i > 0) {
			res += el * (i * 10)
		} else {
			res += el
		}
	})

	res = res.toString().split('').reverse()
	return res
	// return (parseInt(l1Temp) + parseInt(l2Temp)).toString().split('').reverse()
}


console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
