/**
 * @Description: https://leetcode-cn.com/problems/roman-to-integer/
 * @author Li Guochao
 * @date 2019/3/19
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
	let res = 0
	s = s.split('')
	s.map((item, index) => {
		if (index < s.length - 1 && map[item] < map[s[index + 1]]) {
			res -= map[item]
		} else {
			res += map[item]
		}
	})
	return res
}

console.log(romanToInt('MCMXCIV'))
