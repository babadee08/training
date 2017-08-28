function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

var myHT = new HashTable(30);
console.log(myHT);
//console.log(myHT.hash('Becca'));

// charCodeAt and Modulus operator
/*console.log('hello world'.charCodeAt(5));
console.log(7 % 3);*/