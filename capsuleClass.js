class Counter {
  #value
  
  constructor() {
    this.#value = 0;
  }

  addCounter() {
    this.#value+=1;
  }

  getCounter() {
    return this.#value;
  }
}

let counter = new Counter; // 数値をカウントアップするクラス
counter.addCounter(); //ここでcounterの値を一つ増やしたい
console.log(counter.getCounter());
counter.addCounter();  //ここでcounterの値を一つ増やしたい
console.log(counter.getCounter());