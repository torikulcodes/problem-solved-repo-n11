function twoSort(s) {
  console.log(s);
  return s.sort()[0].split("").join("***");
}

// console.log(twoSort(["banana", "Apple", "apple"]));
console.log(["banana", "Apple", "apple"].sort((a, b) => a.localeCompare(b)));
