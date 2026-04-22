function rentalCarCost(d) {
  

    let discountAmount = 0

    if(d >= 7){
        discountAmount = 50
    }
    if(d >= 3 && d <7){
        discountAmount = 20
    }

    return (d * 40) - discountAmount
}

console.log(rentalCarCost(0))