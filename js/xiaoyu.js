var allA = document.getElementsByTagName('a')
for (i = 0; i < allA.length; i++) {
	allA[i].addEventListener('click', function () {
		var flag = true
		var count = 1
		var anwser
		while (flag) {
			if (count === 1) {
				anwser = prompt('小余是不是最可爱的？')
			} else if (count === 2) {
				anwser = prompt('再问一遍，小余是不是最可爱的？')
			} else {
				anwser = prompt('最后问一遍，小余是不是最可爱的？')
			}
			switch (anwser) {
				// case null:
				// 	flag = false
				// 	break
				case '是':
					alert('啊哈，你还挺自信的哟，不过你说的对')
					flag = false
					break
				case '否':
					if (count === 1) {
						alert('你再好好想想')
						count++
					} else if (count === 2) {
						alert('你在想啥呢？当然是啊')
						count++
					} else {
						alert('不和你玩了，你无药可救了')
						flag = false
					}
					break
				default:
					alert('请输入 是 or 否 ')
					break
			}
		}
	})
}
