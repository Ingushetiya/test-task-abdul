export const sortData = <T, K extends keyof T>(arr: T[], typeSort: K) => {
  arr.sort((a, b) => a[typeSort] - b[typeSort]);
};
