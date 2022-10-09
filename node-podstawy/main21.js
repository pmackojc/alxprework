// !---------------- Funkcje ------------------------

function sumDigits(a, b) {
    return a + b;
  }
  
  console.log(sumDigits(2, 3));
  console.log(sumDigits(5, 7));
  console.log(sumDigits(1, 10));
  
  
  // Stworz funkcje, ktora bedzie zwracac informacje, czy w danym stringu znajduje sie dany ciag znakow
  
  
  const isInString = (string, phrase) => {
    return string.includes(phrase);
  }
  
  const includesEr = isInString('Harry Potter', 'er');
  
  console.log(includesEr)
  
  const searchElement = (string, phrase) => {
    if(string.includes(phrase)) {
      return string;
    }
  }
  
  const foundElement = searchElement('Harry Potte', 'er');
  
  
  // Uzywanie kolekcji (array obiektow) w funkcji
  
  const books2 = [
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
  
  // PURE FUNCTION
  const filterElements = (collection, phrase) => {
    return collection.filter(element => {
      return element.name.includes(phrase)
    })
  }
  
  console.log(filterElements(books2, 'er'));

  // 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

// const books2 = [
//   {
//     name: "Harry Potter",
//     category: "adventure"
//   },
//   {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//   },
//   {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//   }
// ]

// moja wersja

//zadanie 1

console.log("ZADANIE 1");

function multiply(a,b){
    return a*b;
}

console.log(multiply(2, 3));

console.log("ZADANIE 2");

function checkLetter(name){
    return name.length;
}

console.log(checkLetter('Damianek'));

console.log("ZADANIE 3");

function findByCategory(collection, category){
    const books = collection.filter(element => {
        return element.category.includes(category)
      })
      if(books.length === 0) return 'no books';
      return books;
}

console.log(findByCategory(books2,'adventure'));
console.log(findByCategory(books2,'horror'));

// 4. Rozszerz zadanie 3 o warunek, ze jesli nie znajdziemy zadnej ksiazki o podanej kategorii, to funkcja wyswietli napis "No books"

//wersja prowadzącego

// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

const multiply = (a,b) => a * b;

// function multiply(a, b) {
//   return a * b;
// }

console.log(multiply(3,3))


// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

const checkLetter = string => string.length;

// function checkLetter(string) {
//   return string.length;
// }

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

const books3 = [
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

const findByCategory = (collection, category) => {
  return collection.filter(item => {
    return item.category === category
  });
}

console.log(findByCategory(books3, 'fantasy'));

// 4. Rozszerz zadanie 3 o warunek, ze jesli nie znajdziemy zadnej ksiazki o podanej kategorii, to funkcja wyswietli napis "No books"

const findByCategoryExtended = (collection, category) => {
  const filteredCollection = collection.filter(item => {
    return item.category === category
  });

  if(filteredCollection.length === 0) {
    return 'No Books'
  }

  return filteredCollection
}

console.log(findByCategoryExtended(books3, 'fantasy'));
console.log(findByCategoryExtended(books3, 'fantas'));