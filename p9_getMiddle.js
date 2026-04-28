function getMiddle(s) {
  const strToArr = s.split("");
  let indexAll = [];
  let arrLength = strToArr.length;

  if (arrLength % 2 !== 0) {
    let index = Math.floor(arrLength / 2);
    indexAll.push(index);
  }
  let index = arrLength / 2;
  indexAll.push(index, index - 1);

  const result = strToArr.filter((el, i) => indexAll.includes(i));

  return result.join("");
}

// console.log(getMiddle("testin"));


// best practices
function getMiddle(s) {
  const len = s.length;

  if (len % 2 === 0) {
    return s[len / 2 - 1] + s[len / 2];
  } else {
    return s[Math.floor(len / 2)];
  }
}

