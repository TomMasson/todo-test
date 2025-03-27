/**
 * Custom sort implements a bubble sort algorithm. It does not use native sort() or filter() functions.
 * It creates a copy of the list input parameter and return the sorted result
 *
 * @param {T[]} list - The input array we want to sort
 * @param {(a: T, b: T) => number} compareFn  - A comparison function that defines the sort order
 *
 * @returns {T[]} A new sorted array based on the comparison function
 */
export function customSort<T = unknown>(
	list: T[],
	compareFn: (a: T, b: T) => number
): T[] {
	const result = [...list];
	let swap;

	// for each list element
	for (let j = 0; j < result.length; j++) {
		swap = false;

		// we compare to another list element
		for (let i = 0; i < result.length - j - 1; i++) {
			if (compareFn(result[i], result[i + 1]) > 0) {
				// swap elements
				[result[i], result[i + 1]] = [result[i + 1], result[i]];
				swap = true;
			}
		}
	}

	return result;
}
