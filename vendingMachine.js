// 商品を扱うクラス
class Item 
{
  // 初期化時に使われるコンストラクタ
  constructor(productName, cash) {
    this.productName = productName;
    this.cash = cash;
  }

  // 以下はクラス内の情報（プロパティや属性と呼ばれる）の操作

  // ProductNameのゲッター
  getProductName() {
    return this.productName
  }

  // Cashのゲッター
  getCash() {
    return this.cash;
  }
}

// 自動販売機（商品を格納する）クラス
class VendingMachine {
  constructor() {
    this.items = [];
  }

// 商品をnumの数だけ補充
  addItem(item, num) {
    for(let i = 0; i < num; i++) {
      this.items.push(item);
    }
  }

  // 商品名から商品のインデックスを決定
  findItemIndexByProductName(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getProductName() === productName) return i;
    }
    return null;
  }

  // 商品の購入
  buy(productName, cash) {
    const num = this.findItemIndexByProductName(productName);
    // 商品インデックスから商品決定
    const item = this.items[num]
    // 例外処理条件
    if (num == null) { throw new Error('在庫がありません'); }
    if (item.getCash() > cash) { throw new Error('お金が足りません'); }
    // 販売機から商品取り出し
    this.items.splice(num, 1)

    return item
  }

  // 在庫確認
  canBuy(productName) {
    const num = this.findItemIndexByProductName(productName);
    const item = this.items[num];
    return Boolean(item);
  }
}

// 実装確認
const vendingMachine = new VendingMachine;
vendingMachine.addItem(new Item("コカコーラ", 120), 4);
vendingMachine.addItem(new Item("水", 90), 3);
vendingMachine.addItem(new Item("モンスター", 300), 1);
console.log(vendingMachine)
try {
  const buyItem1 = vendingMachine.buy("コカコーラ", 200);
  const buyItem2 = vendingMachine.buy("モンスター", 400);
  console.log(buyItem1);
  console.log(buyItem2);
} catch (e) {
 console.log(e);
}
// 例外：価格が足りない
try {
  const buyItem3 = vendingMachine.buy("水", 20);
  console.log(buyItem3);
} catch (e) {
  console.log(e);
}
// 例外：在庫がない
try {
  const buyItem4 = vendingMachine.buy("モンスター", 400);
  console.log(buyItem4);
} catch (e) {
  console.log(e);
}

console.log(vendingMachine)
console.log(vendingMachine.canBuy("コカコーラ"))
console.log(vendingMachine.canBuy("モンスター"))