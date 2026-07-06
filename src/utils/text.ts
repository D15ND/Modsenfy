export const sliceText = (text: string) => {
  return text.length <= 16 ? text : text.slice(0, 16) + '...';
};
