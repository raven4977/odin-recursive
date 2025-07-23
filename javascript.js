function fibs(num) {
  const numArray = [];
  if (num <= 0) return [];
  if (num >= 1) numArray.push(0);
  if (num >= 2) numArray.push(1);
  for (let i = 2; i < num; i++) {
    numArray.push(numArray[i - 1] + numArray[i - 2]);
  }
  return numArray;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const numArray = fibsRec(num - 1);
  numArray.push(numArray[num - 2] + numArray[num - 3]);
  return numArray;
}

console.log(fibsRec(8));
