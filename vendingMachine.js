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

  // 商品名から商品を決定
  findItemListByProductName(productName) {
    const item = this.items.filter(function (value) {
      return value.getProductName() === productName
    })
    return item
  }

  // 商品の購入
  buy(productName, cash) {
    const item = this.findItemListByProductName(productName);
    // 例外処理条件
    if (item.length == 0) { throw new Error('在庫がありません'); }
    if (item[0].getCash() > cash) { throw new Error('お金が足りません'); }
    // 販売機から商品取り出し
    const num = this.items.indexOf(item[0]);
    this.items.splice(num, 1);

    return item[0];
  }

  // 在庫確認
  canBuy(productName) {
    const item = this.findItemListByProductName(productName);
    return Boolean(item.length);
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