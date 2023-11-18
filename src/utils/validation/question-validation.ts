export const questionValidation = (value: string) => {
  if (value.length === 0) {
    return "記入してください";
  }

  if (value.length > 200) {
    return "200文字以内で記入してください";
  }

  return null;
};
