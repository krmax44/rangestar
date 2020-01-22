const range = require('../dist');

console.time('range*');

for (let i = 0; i < 1000; i++) {
	const p = range.rangeArray(1000);
}

console.timeEnd('range*');
