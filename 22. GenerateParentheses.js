/**
 * @Description: https://leetcode-cn.com/problems/generate-parentheses/
 * @author Li Guochao
 * @date 2019/3/21
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let res = []

	func(res, '', 0, 0, n)

	return res
}

function func(res, sTemp, left, right, n) {
	if (left > n || right > n) return res
	// console.log(`left:${left},right:${right},sTemp:${sTemp}`)
	if (left === n && right === n) {
		res.push(sTemp)
		return
	}

	if (left < right) {
		func(res, sTemp + '(', left + 1, right, n)
	}
	if (right < left) {
		func(res, sTemp + ')', left, right + 1, n)
	}
}

console.log(generateParenthesis(1))
