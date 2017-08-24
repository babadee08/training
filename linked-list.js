function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);

    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;

    this.head = this.head.next;
    if(this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    return val;
}

LinkedList.prototype.removeTail = function () {
    if(!this.tail) return null;

    var val = this.tail.value;
    this.tail = this.tail.prev;

    if(this.tail) {
        this.tail = null;
    } else {
        this.head = null;
    }
    return val;
}

LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;

    while (currentNode) {
        if (searchValue == currentNode.value) {
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function (value) { 
    var currentNode = this.head;
    var result = [];
    var position = 0;
    
    while (currentNode) {
        if (value == currentNode.value) {
            result.push(position);
        }
        currentNode = currentNode.next;
        position++;
    }
    return result;
};

/**
 * The code below is for testing
 * the above functions
 */

var ll = new LinkedList();

/*ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(50);
ll.addToTail(300);
ll.addToTail(93);
ll.addToTail('weed');

// console.log(ll.removeHead());
// console.log(ll.removeTail());
// console.log(ll);

console.log(ll.search('weed'));*/

ll.addToHead(3);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(8);

console.log(ll.indexOf(3));