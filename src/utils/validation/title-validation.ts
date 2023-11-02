export const titleValidation = (value: string) => {
  if (value.length === 0) {
    return "記入してください";
  }

  if (value.length > 20) {
    return "20文字以内で記入してください";
  }

  return null;
};
