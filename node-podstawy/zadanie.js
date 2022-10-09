const shopping = [
    {
      id: 1,
      name: "banan",
      quantity: 3,
      price: 3.99
    },
    {
      id: 2,
      name: "Chleb",
      quantity: 1,
      price: 4.99
    },
    {
      id: 3,
      name: "Wiśnie",
      quantity: 0.5,
      price: 19.99
    }
  ]

  let sum = 0;

  shopping.forEach(product => {
      sum += product.quantity;
     });
  console.log(sum);

  const sume = shopping.filter(product => {
      return product.name.includes('e');
  });

  
 
  
