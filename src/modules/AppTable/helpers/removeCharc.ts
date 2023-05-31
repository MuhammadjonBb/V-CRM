export default function removeCharactersFromString(str: string): string {
  console.log(str);
  return str.replace(/["{}]/g, '').trim().replace(/:/g, ': ')
}
