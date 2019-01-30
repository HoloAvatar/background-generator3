const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

for (item of basket){
	console.log(item);

}


for (item in detailedBasket){
	console.log(item)
}

basket={
	0: 'apples',
	1: 'oranges',
	2: 'grapes'

}

Object.keys