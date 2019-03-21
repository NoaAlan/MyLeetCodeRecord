/**
 * @Description: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @author Li Guochao
 * @date 2019/3/20
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
	0: '',
	1: '*',
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz'
}
var letterCombinations = function (digits) {
	if (digits === '') return []
	digits = digits.split('')
	let res = []
	if (digits.length <= 1) {
		return map[digits[0]].split('')
	}
	let length = digits.length
	for (let i = 0; i < length; i++) {
		digits[i] = map[digits[i]]
	}
	res = getStringWithFor(digits, 0, res, '')
	return res
}

function getStringWithFor(s, i, res, temp) {
	if (i < s.length - 1) {
		for (let j = 0; j < s[i].length; j++) {
			res = getStringWithFor(s, i + 1, res, temp + s[i][j])
		}
	} else {
		for (let j = 0; j < s[i].length; j++) {
			res.push(temp + s[i][j])
		}
	}
	return res
}

console.log(letterCombinations('234'))
