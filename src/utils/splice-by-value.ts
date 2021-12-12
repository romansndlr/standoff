export default function (arr: number[], value: number) {
  const index = arr.indexOf(value);

  if (index !== -1) {
    arr.splice(index, 1);
  }
}
