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

class PointCalculator {
  #results
  constructor(results) {
    this.#results = results;
  }

  sumPoint() {
    let sumPoint = 0;
    for (let i = 0; i < this.#results.length; i++) {
      sumPoint += this.#results[i].point;
    }
    return sumPoint;
  }

  avePoint() {
    let sumPoint = this.sumPoint();
    let avePoint = 0;
    avePoint = sumPoint / this.#results.length;
    return avePoint;
  }

  maxPerson() {
    let max = 0;
    let maxPerson = 0;
    for (let i = 0; i < this.#results.length; i++) {
      if (max < this.#results[i].point ) {
        max = this.#results[i].point;
        maxPerson = this.#results[i].name
      }
    }
    return maxPerson;
  }
  addPerson(result) {
    this.#results.push(result);
    let sum = this.sumPoint();
    let ave = this.avePoint();
    let maxPerson = this.maxPerson();
    console.log(sum, ave)
    return maxPerson
  }
}

const counter = new Counter; // 数値をカウントアップするクラス
counter.addCounter(); //ここでcounterの値を一つ増やしたい
console.log(counter.getCounter());
counter.addCounter();  //ここでcounterの値を一つ増やしたい
console.log(counter.getCounter());

let results = [{ name: '鈴木', point: 80 }, { name: '田中', point: 92 }, { name: '佐藤', point: 75 }];
const point = new PointCalculator(results);
console.log(point.sumPoint());
console.log(point.avePoint());
console.log(point.maxPerson());
console.log(point.addPerson({ name: '阿部', point: 95 }));

// 堅牢にするアイデアは特に思い浮かびませんでした。

// sumPoint += this.#results[i].point;
// 上記のコードのpointをgetPoint()のようにpointを取得するメソッドの準備も考えましたが
// 堅牢という点で、どちらでも変わらないと自分は判断しました。
