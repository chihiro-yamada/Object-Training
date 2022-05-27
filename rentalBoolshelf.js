class Book {
  constructor(title, pageSize) {
    this.title = title;
    this.pageSize = pageSize;
  }

  getTitle() {
    return this.title;
  }

  setTitle(value) {
    this.title = value;
  }

  getPageSize() {
    return this.pageSize;
  }

  setPageSize(value) {
    this.pageSize = value;
  }
}


class Bookshelf {
  constructor() {
    this.books = [];
  }

  static valueOf(arrayOfHash) {
    let bookshelf = new this;

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i];
      let book = new Book(hash.title, hash.pageSize);
      bookshelf.addBook(book);
    }
    return bookshelf;
  }

  addBook(book) {
    if (!this.canAddBook(book)) return false;

    this.books.push(book);
    return true;
  }

  findBookByTitle(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0;
    for (let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  canAddBook(book) {
    return true; 
  }
}

class RentalBookshelf extends Bookshelf {
  constructor() {
    super();
    this.rentalBooks = [];
  }

  rentBook(book) {
    if (this.isRented(book)){
      console.log("貸出中です")
    } else {
      this.rentalBooks.push(book);
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].getTitle() === book.title) this.books.splice(i, 1);;
      }
    }
  }

  returnBook(book) {
    this.books.push(book);
    for (let i = 0; i < this.rentalBooks.length; i++) {
      if (this.rentalBooks[i].title === book.title) this.rentalBooks.splice(i, 1);;
    }
  }

  listRentedBooks() {
    return this.rentalBooks;
  }

  isRented(book) {
    for (let i = 0; i < this.rentalBooks.length; i++) {
      if (this.rentalBooks[i].title === book.title) {
        return true;
      }
    }
    return false;
  }
}

let books = [
  { title: "坊ちゃん", pageSize: 520 },
  { title: "我輩は猫である", pageSize: 454 },
  { title: "こころ", pageSize: 876 },
  { title: "門", pageSize: 320 },
  { title: "羅生門", pageSize: 354 },
  { title: "少年", pageSize: 476 }
];

let bookshelf = RentalBookshelf.valueOf(books);

bookshelf.rentBook(books[0]);
bookshelf.rentBook(books[1]);
bookshelf.rentBook(books[2]);
bookshelf.rentBook(books[3]);
bookshelf.rentBook(books[4]);
bookshelf.rentBook(books[3]);
bookshelf.returnBook(books[2]);
bookshelf.returnBook(books[4]);
console.log(bookshelf.listRentedBooks());
console.log(bookshelf.isRented(books[3]));
console.log(bookshelf.isRented(books[4]));
