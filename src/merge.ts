export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  const result: number[] = [];
  let collection_1_index = 0;
  let collection_2_index = 0;

  while (
    collection_1_index < collection_1.length &&
    collection_2_index < collection_2.length
  ) {
    if (collection_1[collection_1_index] < collection_2[collection_2_index]) {
      result.push(collection_1[collection_1_index]);
      collection_1_index++;
    } else {
      result.push(collection_2[collection_2_index]);
      collection_2_index++;
    }
  }

  while (collection_1_index < collection_1.length) {
    result.push(collection_1[collection_1_index]);
    collection_1_index++;
  }

  while (collection_2_index < collection_2.length) {
    result.push(collection_2[collection_2_index]);
    collection_2_index++;
  }

  return result;
}

console.log(merge([1, 5], [0, 4]));
