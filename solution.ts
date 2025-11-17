const formatValue = (value: number | string | boolean) => {
    if (typeof value == "string") {
        return value.toLocaleUpperCase();
    } else if (typeof value == "number") {
        return value * 10;
    } else {
        return false;
    }
}


const getLength = (value: string | number[]) => {
    if (Array.isArray(value)) {
        return value.length
    }
    else {
        return value.length
    }
};


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}




const filterByRating = (books: { title: string; rating: number }[]) => {
    return books
        .filter(book => book.rating > 4)
        .map(book => ({
            ...book,
            rating: book.rating.toFixed(1)
        }));
};




const filterActiveUsers = (users: { id: number; name: string; email: string; isActive: boolean }[]) => {
    return users
        .filter(user => user.isActive === true)
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book:Book)=>{
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
}




const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const basePrice = product.price * product.quantity;
      const discountAmount = product.discount
        ? (basePrice * product.discount) / 100
        : 0;
      return basePrice - discountAmount;
    })
    .reduce((total, current) => total + current, 0);
};