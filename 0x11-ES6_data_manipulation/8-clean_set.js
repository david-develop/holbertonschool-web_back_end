export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const finalArr = [];
  const point = startString.length;
  set.forEach((element) => {
    if (startString && element.startsWith(startString)) {
      const finalStr = element.slice(point);
      finalArr.push(finalStr);
    }
  });
  return finalArr.join('-');
}
