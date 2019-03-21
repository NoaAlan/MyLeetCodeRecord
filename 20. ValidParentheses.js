/**
 * @Description: https://leetcode-cn.com/problems/valid-parentheses/
 * @author Li Guochao
 * @date 2019/3/21
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	s = s.split('')
	let sTemp = [], length = s.length
	for (let i = 0; i < length; i++) {
		if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
			sTemp.push(s[i])
		} else {
			if (sTemp.length <= 0) return false
			if ((s[i] === ']' && sTemp[sTemp.length - 1] !== '[') || (s[i] === '}' && sTemp[sTemp.length - 1] !== '{') || (s[i] === ')' && sTemp[sTemp.length - 1] !== '(')) return false
			else sTemp.pop()
		}
	}
	return sTemp.length === 0
}

console.log(isValid('{[]}'))
