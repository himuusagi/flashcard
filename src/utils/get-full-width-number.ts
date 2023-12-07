export const getFullWithNumber = (halfWidthNumber: number) => {
  const fullWidthNumber = String(halfWidthNumber).replace(/[0-9]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + 0xfee0);
  });
  return fullWidthNumber;
};
