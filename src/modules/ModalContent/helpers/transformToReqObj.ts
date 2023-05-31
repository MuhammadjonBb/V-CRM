interface IContact {
  select: string;
  value: string;
}

export default function transformArrayToObject(arr: IContact[]) {
  return arr.map(({ select, value }) => ({ [select]: value }));
}
