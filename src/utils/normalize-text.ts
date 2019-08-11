export const normalizeText = (text: string) => {
  return text.replace(/[^a-zA-Z_-]/g, '_');
}
