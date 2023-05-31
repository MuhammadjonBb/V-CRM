export default function transformArray(arr: any[]) {
  const transformedArr: any[] = [];
  arr.forEach((obj) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    const transformedObj = {
      select: key.charAt(0).toUpperCase() + key.slice(1),
      value
    };
    transformedArr.push(transformedObj);
  });
  return transformedArr;
}
