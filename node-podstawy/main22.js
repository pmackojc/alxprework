// ! ------- POZOSTALE FUNKCJE w PROG FUNKCYJNYM ----------

// find

const books4 = [
    {
      name: "Harry Potter",
      category: "adventure"
    },
    {
      name: 'Alice in Wonderland',
      category: 'fantasy'
    },
    {
      name: 'Lord of the Rings',
      category: 'fantasy'
    }
  ]
  
  // Find sluzy do zlapania pierwszego elementu znalezionego
  
  const fantasyBook = books4.find(book => book.category === 'adventure')
  
  console.log(fantasyBook)
  
  // reduce
  
  const shopping3 = [
    {
      name: "banan",
      price: 3.99
    },
    {
      name: "Wiśnie",
      price: 19.99
    },
    {
      name: "Chleb",
      price: 4.99
    },
  ]
  
  const price3 = shopping3.reduce((accumulator, product) => {
   // console.log(accumulator);
  
    return accumulator - product.price;
  }, 0)
  
  console.log(price3)
  
  // Sort
  
  const sortedShoppingList = shopping3.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  })
  
  console.log(sortedShoppingList)
  
  // 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
  // 2. Za pomoca funkcji find, sprawdz cene chleba
  // 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]

  //Zadanie 1

  console.log("ZADANIE 1");

  const biggestShoppingPrice = shopping3.sort((a, b) => {
    return a.price < b.price ? 1 : -1;
  })
  
  console.log(biggestShoppingPrice[0])

  //Zadanie 2

  console.log("ZADANIE 2");

  const productChleb = shopping3.find(bread => bread.name === 'Chleb')
  
  console.log(productChleb.price)
  
  //Zadanie 3
  console.log("ZADANIE 3");

  const classHeight =[178, 164, 199]

  const height = classHeight.reduce((accumulator, number) => {
  
    const h = accumulator + number;
    return h;
  }, 0)

  console.log(height/3)

