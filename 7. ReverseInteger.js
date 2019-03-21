const describe = 'https://leetcode-cn.com/problems/reverse-integer/'

// 2019-03-15


/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
// 	let xTemp = x.toString().split('')
// 	if (!(xTemp[0] === '-')) return xTemp.reverse().join('') >= (Math.pow(2, 31) - 1) ? 0 : xTemp.join('')
// 	else return xTemp.slice(1).reverse().join('') > Math.pow(2, 31) ? 0 : '-' + xTemp.slice(1).reverse().join('')
// }

// 执行用时 : 188 ms, 在Reverse Integer的JavaScript提交中击败了7.57% 的用户
// 内存消耗 : 36.2 MB, 在Reverse Integer的JavaScript提交中击败了0.97% 的用户


var reverse = function (x) {
	let res = 0
	const max = Math.pow(2, 31) - 1
	const min = -Math.pow(2, 31)
	while (x !== 0) {
		let pop = x % 10
		x /= 10
		x = parseInt(x)
		if ((res > max / 10 || (res === max / 10 && pop > 7
				)) ||
				(res < min / 10 || (res === min / 10 && pop < -8))
		)
			return 0
		res = res * 10 + pop
	}
	return res
}

//	124 ms	36.1 MB
