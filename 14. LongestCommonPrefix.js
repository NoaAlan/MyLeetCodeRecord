/**
 * @Description: https://leetcode-cn.com/problems/longest-common-prefix/
 * @author Li Guochao
 * @date 2019/3/19
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let length = strs.length
	if (length <= 0) return ''
	for (let i = 0; i < length; i++) {
		strs[i] = strs[i].split('')
	}
	let res = ''
	for (let i = 0; i < strs[0].length; i++) {
		let raw = strs[0][i]
		let judge = true
		for (let j = 1; j < strs.length; j++) {
			if (i > strs[j].length || raw !== strs[j][i]) {
				judge = false
				break
			}
		}
		if (!judge) break
		else res += raw
	}
	return res
}

console.log(longestCommonPrefix(['a', 'a', 'a']))
