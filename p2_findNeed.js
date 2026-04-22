function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  return `found the needle at position ${position}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]),
);
