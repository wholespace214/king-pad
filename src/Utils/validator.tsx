export const isEmpty = (value: number | string) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const isEmail = (value: string) => {
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (value.match(validEmailRegex) != null) return true;
  else return false;
};

export const isPositiveReal = (value: number) => {
  return value > 0;
};

export const isZero = (value: number) => {
  return value === 0;
};
