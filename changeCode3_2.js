// 本の情報を扱うクラス
class Book {
  // 初期化時に使われるコンストラクタ
  constructor(title, pageSize) {
    this.title = title;
    this.pageSize = pageSize;
  }

  // 以下はクラス内の情報（プロパティや属性と呼ばれる）の操作

  // titleのゲッター
  getTitle() {
    return this.title;
  }

  // titleのセッター
  setTitle(value) {
    this.title = value;
  }

  // pageSizeのゲッター
  getPageSize() {
    return this.pageSize;
  }

  // pageSizeのセッター
  setPageSize(value) {
    this.pageSize = value;
  }
}

// 本棚として本を格納するクラスの基底クラス
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
    const book = this.books.filter(function(value) {
      return value.getTitle() === title 
    })
    return book
  }
  // reduceメソッド使用した場合
  sumPageSize() {
    let size = this.books.reduce(function (sum, value) {
      return sum + value.getPageSize();
    },0)
    return size;
  }

  size() {
    return this.books.length;
  }

  // 今この本を追加できますか？」というチェックを行えるメソッド
  canAddBook(book) {
    return true; // デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  }
}

// 格納できる本の数が指定できる本棚クラス
class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super(); // 親のconstructorを呼びます
    this.maxSize = maxSize;
  }

  // 親クラスが作っているメソッドを上書き（オーバーライド）できます。
  canAddBook(book) {
    return this.books.length < this.maxSize;
  }

  // 明示的にメソッドを書かれていませんがBookshelfのメソッドを呼び出すことができます。
  // 10行程度でほぼ同じ機能を持ちながら、少し動きの違う仕組みを導入できました。
}

class DebugBookshelf extends LimitedBookshelf {
  addBook(book) {
    console.debug('addBookParameter():' + JSON.stringify(book));
    const returnValue = super.addBook(book);
    console.debug(`addBook(): ${returnValue}`);
    return returnValue
  }

  canAddBook(book) {
    console.debug('canAddBookParameter():' + JSON.stringify(book));
    const returnValue = super.canAddBook(book)
    console.debug(`canAddBook(): ${returnValue}`);
    return returnValue;
  }

  findBookByTitle (title) {
    console.debug(`findBookByTitleParameter(): ${title}`);
    const returnValue = super.findBookByTitle(title)
    console.debug(`findBookByTitle():` + JSON.stringify(returnValue));
    return returnValue;
  }
}

function createBook() {
  if (process.env.NODE_ENV == 'development') {
    return new DebugBookshelf; 
  } else {
    return new LimitedBookshelf; 
  }
}

console.log(process.env.NODE_ENV);

let bookshelf = createBook()

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}

console.log(bookshelf.findBookByTitle("こころ"));
console.log(bookshelf.sumPageSize());