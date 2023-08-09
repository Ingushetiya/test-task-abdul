export const isEmpty = <T>(obj: Record<string, T>): boolean => {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      return false;
    }
  }
  return true;
};
