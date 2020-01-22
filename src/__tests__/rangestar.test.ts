import test from 'ava';
import { rangeGenerator, rangeArray } from '..';

test('generate range from 0', t => {
	const r1 = rangeGenerator(3);
	t.is(r1.next().value, 0);
	t.is(r1.next().value, 1);
	t.is(r1.next().value, 2);
	t.is(r1.next().done, true);

	const r2 = rangeArray(3);
	t.deepEqual(r2, [0, 1, 2]);
});

test('generate range with stop', t => {
	const r1 = rangeGenerator(3, 5);
	t.is(r1.next().value, 3);
	t.is(r1.next().value, 4);
	t.is(r1.next().done, true);

	const r2 = rangeArray(3, 5);
	t.deepEqual(r2, [3, 4]);

	const r3 = rangeGenerator(5, 3);
	t.is(r3.next().value, 5);
	t.is(r3.next().value, 4);

	const r4 = rangeArray(5, 3);
	t.deepEqual(r4, [5, 4]);
});

test('generate range with step', t => {
	const r1 = rangeGenerator(3, 3.3, 0.1);
	t.is(r1.next().value, 3);
	t.is(r1.next().value, 3.1);
	t.is(r1.next().value, 3.2);
	t.is(r1.next().done, true);

	const r2 = rangeArray(3, 3.3, 0.1);
	t.deepEqual(r2, [3, 3.1, 3.2]);

	const r3 = rangeGenerator(3.3, 3, -0.1);
	t.is(r3.next().value, 3.3);
	t.is(r3.next().value, 3.2);
	t.is(r3.next().value, 3.1);
	t.is(r3.next().done, true);

	const r4 = rangeArray(3.3, 3, -0.1);
	t.deepEqual(r4, [3.3, 3.2, 3.1]);

	const r5 = rangeArray(3.3, 3, 0.1);
	t.deepEqual(r5, [3.3, 3.2, 3.1]);
});

test('strange inputs', t => {
	// @ts-ignore
	t.is(rangeGenerator().next().done, true);

	// @ts-ignore
	t.deepEqual(rangeArray(), []);
});
