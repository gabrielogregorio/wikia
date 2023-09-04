export const normalizeNfd = (value?: string): string =>
  value
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s{1,}/g, '')
    .replace(/[^a-zA-Z0-9]{1,}/g, '') || '';