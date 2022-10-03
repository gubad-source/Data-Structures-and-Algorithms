class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let someKeyItem = bucket.find((item) => item[0] === key);
      if (someKeyItem) {
        someKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let someKeyItem = bucket.find((item) => item[0] === key);
      if (someKeyItem) {
        // return someKeyItem[1];
        console.log(someKeyItem[1]);
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let someKeyItem = bucket.find((item) => item[0] === key);
      if (someKeyItem) {
        bucket.splice(bucket.indexOf(someKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i}---->${this.table[i]}`);
      }
    }
  }
}

const table = new HashTable(66);
table.set("name", "Ted Bundy");
table.set("mane", "John Wayne Gacy");

table.set("age", 27);
table.display();

table.remove("mane");
table.display();

table.get("name");
