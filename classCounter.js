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

let counter = new Counter;
let counter_2 = new Counter;
counter.up();
console.log(counter.getValue());
counter.up();
console.log(counter.getValue()); 
counter_2.up();
console.log(counter_2.getValue());
counter_2.down();
console.log(counter_2.getValue()); 
