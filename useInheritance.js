
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

  addBook(book) {
    // 自分自身（this）のcanAddBookメソッドを呼び出す
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

class RejectedBocchanBookshelf extends Bookshelf {
  canAddBook(book) {
    return book.title == "坊ちゃん" ? false : true;
  }
} 

let RejectedBookshelf = new RejectedBocchanBookshelf
if (!RejectedBookshelf.addBook(new Book("坊ちゃん", 520))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${RejectedBookshelf.size()}`);
}

