export default function removeCharactersFromString(str: string): string {
  return str.replace(/["{}]/g, '').trim().replace(/:/g, ': ')
}
