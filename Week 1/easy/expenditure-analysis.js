/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const sumByCat = [];
  transactions.forEach((some) => {
  const {category, price} = some;
  const index = sumByCat.findIndex((item) => item.category === category)

  if(index == -1){
      sumByCat.push({category, totalSpent:price})
  }
  else{
      sumByCat[index].totalSpent += price;
  }
  })

  return sumByCat;
}


module.exports = calculateTotalSpentByCategory;
