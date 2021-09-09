export default function appendToEachArrayValue(array, appendString) {
  const resArr = [];
  for (let value of array) {
    value = appendString + value;
    resArr.push(value);
  }
  return resArr;
}
