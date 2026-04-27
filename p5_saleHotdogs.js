function saleHotdogs(n){
  const price =  n<5 ? 100 : n>=5 && n<10 ? 95 : n>=10 ? 90 : 0  

  return price * n
}

console.log(saleHotdogs(20))