import { merge } from "./merge";

describe("merge", () => {
  test("merges two sorted arrays", () => {
    expect(merge([1, 5], [0, 4])).toEqual([0, 1, 4, 5]);
  });

  test("merges two sorted arrays of different lengths", () => {
    expect(merge([1, 5, 7], [0, 4])).toEqual([0, 1, 4, 5, 7]);
  });

  test("merges two sorted arrays of different lengths", () => {
    expect(merge([1, 5], [0, 4, 7])).toEqual([0, 1, 4, 5, 7]);
  });

  test("merges two empty arrays", () => {
    expect(merge([], [])).toEqual([]);
  });

  test("merges an empty array with a non-empty array", () => {
    expect(merge([], [1, 2])).toEqual([1, 2]);
  });

  test("merges a non-empty array with an empty array", () => {
    expect(merge([1, 2], [])).toEqual([1, 2]);
  });

  test("merges two arrays with the same elements", () => {
    expect(merge([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("merges two arrays with the same elements", () => {
    expect(merge([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  });

  test("merges two arrays with negative numbers", () => {
    expect(merge([-2, -1, 0], [-3, -1, 1])).toEqual([-3, -2, -1, -1, 0, 1]);
  });

  test("merges two arrays with negative numbers", () => {
    expect(merge([-3, -1, 1], [-2, -1, 0])).toEqual([-3, -2, -1, -1, 0, 1]);
  });

  test("merges two arrays with negative numbers", () => {
    expect(merge([-3, -2, -1], [-3, -2, -1])).toEqual([-3, -3, -2, -2, -1, -1]);
  });

  test("merges two arrays with negative numbers", () => {
    expect(merge([-3, -2, -1], [-3, -2, -1])).toEqual([-3, -3, -2, -2, -1, -1]);
  });

  test("merges two arrays with positive and negative numbers", () => {
    expect(merge([-3, -2, -1], [0, 1, 2])).toEqual([-3, -2, -1, 0, 1, 2]);
  });
});
