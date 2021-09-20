export default function deepObjectNullish<
  T extends Record<string, string | Record<string, any>>
>(obj: T): boolean {
  if (obj === null) {
    return true;
  }
  if (typeof obj !== "object") {
    return false;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== null && typeof value !== "object") {
        return false;
      }
      if (!deepObjectNullish(value)) {
        return false;
      }
    }
  }
  return true;
}
