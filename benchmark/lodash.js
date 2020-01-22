const range = require('lodash.range');

console.time('lodash');

for (let i = 0; i < 1000; i++) {
	const p = range(1000);
}

console.timeEnd('lodash');
