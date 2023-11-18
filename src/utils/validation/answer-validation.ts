export const answerValidation = (value: string) => {
  if (value.length === 0) {
    return "記入してください";
  }

  if (value.length > 400) {
    return "400文字以内で記入してください";
  }

  return null;
};
