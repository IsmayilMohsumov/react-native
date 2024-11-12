export const getFontFamily = (baseFont = 'Inter', weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}_18pt-Thin`;
    case '200':
      return `${baseFont}_18pt-Light`;
    case 'normal':
      return `${baseFont}_18pt-Bold`;
    case '300':
      return `${baseFont}_24pt-Bold`;
    default:
      return `${baseFont}_18pt-Regular`;
  }
};
