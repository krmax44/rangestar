const range = require('range');

console.time('range');

for (let i = 0; i < 1000; i++) {
	const p = range.range(1000);
}

console.timeEnd('range');
