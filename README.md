# Range\*

[![Build Status](https://img.shields.io/gitlab/pipeline/krmax44/rangestar)](https://gitlab.com/krmax44/rangestar/pipelines)
[![Coverage](https://gitlab.com/krmax44/rangestar/badges/master/coverage.svg?style=flat)](https://gitlab.com/krmax44/rangestar/pipelines)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/rangestar?label=size)](https://bundlephobia.com/result?p=rangestar)
[![npm version](https://img.shields.io/npm/v/rangestar)](https://npm.im/rangestar)

Another range array generator. Written in TypeScript, well tested, no floating-point BS, super fast and tiny.

## Installation

```bash
yarn add rangestar
```

## Examples

Supports generators...

```js
const range = require('rangestar');

for (const r of range.rangeGenerator(3)) {
	console.log(r);
}

// 0
// 1
// 2

for (const r of range.rangeGenerator(1, 3)) {
	console.log(r);
}

// 1
// 2
```

...and arrays...

```js
const a = range.rangeArray(3);
console.log(a);

// [0, 1, 2]

const b = rangeArray(3, 3.4, 0.1);
console.log(b);

// [3, 3.1, 3.2, 3.3]
```

...and humans:

```js
const lodashRange = require('lodash.range');
const c = lodashRange(3, 3.4, 0.1);
console.log(c);

// [3, 3.1, 3.2, 3.3000000000000003]
// WHAT THE F$#%?
```

## API

The `START` value will be included in the result, while `STOP` will **not**.

### Range generator

```ts
// From 0 to STOP:
range.rangeGenerator(STOP: number): Generator<number>

// From START to STOP with optional STEP:
range.rangeGenerator(START: number, STOP: number, STEP?: number): Generator<number>
```

### Range array

Same concept.

```ts
// From 0 to STOP:
range.rangeGenerator(STOP: number): number[]

// From START to STOP with optional STEP:
range.rangeGenerator(START: number, STOP: number, STEP?: number): number[]
```

## Benchmarks

Use `yarn benchmark` to run the benchmarks. Python and Bash are required.

| Library                                                                       | Results  |
| ----------------------------------------------------------------------------- | -------- |
| Range\*                                                                       | 14.424ms |
| [Lodash](https://www.npmjs.com/package/lodash.range)                          | 13.017ms |
| [range](https://www.npmjs.com/package/range)                                  | 19.874ms |
| [Python `range`](https://docs.python.org/3/library/functions.html#func-range) | 20.853ms |

## Credits

This library is based on [Lodash's](https://lodash.com) range function.
