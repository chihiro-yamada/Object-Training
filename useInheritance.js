
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

class ThinBookshelf extends Bookshelf {
  constructor(maxPage = 20) {
    super();
    this.maxPage = maxPage;
  }

  canAddBook(book) {
    return book.pageSize < this.maxPage;
  }
}


class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super(); // 親のconstructorを呼びます
    this.maxSize = maxSize;
    this.rejectedCount = 0;
  }

  addBook(book) {
    // 自分自身（this）のcanAddBookメソッドを呼び出す
    if (!this.canAddBook(book)) {
      this.rejectedCount++;
      return false;
    }
    this.books.push(book);
    return true;
  }

  canAddBook(book) {
    return this.books.length < this.maxSize;
  }

  rejectedCount() {
    return this.rejectedCount
  }
}

const RejectedBookshelf = new RejectedBocchanBookshelf
RejectedBookshelf.addBook(new Book("我輩は猫である", 454));
RejectedBookshelf.addBook(new Book("こころ", 876));
if (!RejectedBookshelf.addBook(new Book("坊ちゃん", 520))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${RejectedBookshelf.size()}`);
}

const thinBookshelf = new ThinBookshelf
thinBookshelf.addBook(new Book("我輩は猫である", 454));
thinBookshelf.addBook(new Book("こころ", 876));
if (thinBookshelf.addBook(new Book("坊ちゃん", 19))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${thinBookshelf.size()}`);
}

const bookshelf = new LimitedBookshelf;
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));
console.log(bookshelf.rejectedCount)