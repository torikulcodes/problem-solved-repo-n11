

function getSum(a, b)
{
  
   let min = Math.min(a,b)
   let max = Math.max(a,b)
   let sumNumbers = []

   for(let i = min;i<=max;i++){
         sumNumbers.push(i)
   }

   return sumNumbers.reduce((a,b)=>a+b,0)
}

// console.log(getSum(8,2))


const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

console.log(GetSum(8,2))