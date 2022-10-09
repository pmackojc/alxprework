// Mamy listę ksiązek

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

const books = [
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

  console.log("Zadanie 1");

  books.filter(work =>{
    if(work.category == 'fantasy') console.log(work.name);
  })

  console.log("Zadanie 2");

  books.filter(work =>{
    if(work.name.includes('er')) console.log(work.name);
  })

  console.log("Zadanie 3");

 const arrayOfLetters = books.map(size => {
   return size.name.length
 });

 console.log(arrayOfLetters)


  