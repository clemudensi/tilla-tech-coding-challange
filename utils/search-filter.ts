import { matchSorter } from "match-sorter";

const searchFilter = <T> (
  array: T[],
  filterValue: string,
  keys: string[]
) => {
  const inputValues = filterValue.split(' ');

  if (!inputValues.length) {
    return array;
  }

  return inputValues.reduceRight((results, inputVal) => matchSorter(results, inputVal, { keys }), array);
};

export { searchFilter };
