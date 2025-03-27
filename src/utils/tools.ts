export function customSort<T = unknown>(
	list: T[],
	compareFn: (a: T, b: T) => number
): T[] {
	const result = [...list];

	for (let j = 0; j < result.length; j++) {
		for (let i = 0, swap; i < result.length - 1; i++) {
			if (compareFn(result[i], result[i + 1]) > 0) {
				swap = result[i + 1];
				result[i + 1] = result[i];
				result[i] = swap;
			}
		}
	}

	return result;
}

/*
customSort<T = unknown>(list: T[], compareFn:() => number): T[];

    const customSort = (list: Todo[], compareFn:() => number): Todo[] => {

    }*/
