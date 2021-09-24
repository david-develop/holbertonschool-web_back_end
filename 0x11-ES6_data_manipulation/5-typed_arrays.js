export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);
  view[position] = value;
  const dataViewObj = new DataView(buffer);
  return dataViewObj;
}
