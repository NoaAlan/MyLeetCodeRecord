const describe = 'https://leetcode-cn.com/problems/palindrome-number/'

//2019-03-15

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
// if (x < 0 || (x % 10 == 0 && x != 0)) return false
// 	return x == x.toString().split('').reverse().join('') ? true : false
// };
// 执行用时 : 444 ms, 在Palindrome Number的JavaScript提交中击败了30.26% 的用户
// 内存消耗 : 45.7 MB, 在Palindrome Number的JavaScript提交中击败了0.88% 的用户

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false

	let xTemp = x
	let res = 0
	while (xTemp !== 0) {
		res = res * 10 + xTemp % 10
		xTemp = parseInt((xTemp - xTemp % 10) / 10)
	}
	return res === x
}

console.log(isPalindrome(121))
