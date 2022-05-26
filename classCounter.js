class Counter {
  constructor() {
    this.value = 0;
  }

  up() {
    this.value += 1;
  }
  
  down() {
    this.value -= 1;
  }

  resetValue() {
    this.value = 0;
  }

  getValue() {
    return this.value;
  }
}

class EvenCounter {
  constructor() {
    this.counter = new Counter;
    this.value = 0;
  }

  up() {
    this.counter.up();
    if (this.counter.getValue() % 2 == 0) {
      this.value += 1;
    };
  }

  getValue() {
    return this.value;
  }
}

let counter = new EvenCounter;
counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
console.log(counter.getValue()); // => 1と表示される
counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
counter.up(); // => ここではアップしない
console.log(counter.getValue()); // => 2と表示される