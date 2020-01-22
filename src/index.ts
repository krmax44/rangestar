export function rangeArray(STOP: number): number[];
export function rangeArray(
	START: number,
	STOP: number,
	STEP?: number
): number[];
export function rangeArray(START: number, STOP?: number, STEP = 1): number[] {
	let { start, step, length } = base(START, STOP, STEP);

	if (isNaN(length)) return [];

	const result = new Array(length);

	let n = start;
	let i = -1;
	while (length--) {
		result[++i] = n;
		n = normalizeNumber(n + step);
	}

	return result;
}

export function rangeGenerator(STOP: number): Generator<number>;
export function rangeGenerator(
	START: number,
	STOP: number,
	STEP?: number
): Generator<number>;
export function* rangeGenerator(
	START: number,
	STOP?: number,
	STEP = 1
): Generator<number> {
	let { start, step, length } = base(START, STOP, STEP);

	let n = start;
	while (length--) {
		yield n;
		n = normalizeNumber(n + step);
	}
}

function base(
	start: number,
	stop: number,
	step: number
): { start: number; stop: number; step: number; length: number } {
	if (stop === undefined) {
		stop = start;
		start = 0;
	}

	// Prevent infinite range
	step = start > stop && step > 0 ? -step : step;

	const length = Math.max(Math.ceil((stop - start) / (step || 1)), 0);

	return { start, stop, step, length };
}

function normalizeNumber(n: number): number {
	// Floating point fuzz
	return Number.isInteger(n) ? n : parseFloat(n.toPrecision(12));
}

export default rangeArray;

if (typeof module !== 'undefined') {
	module.exports = rangeArray;
	module.exports.rangeArray = rangeArray;
	module.exports.rangeGenerator = rangeGenerator;
}
