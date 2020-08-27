/**
 * Repalce spaces with '-'
 * Replace all non a-z A-Z 0-9 with ''
 */
export function stripSpecialCharacters(str: string) {
   if (str !=undefined)
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');
}
