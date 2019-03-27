class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let poppedNode = null;
    // let newTail = null;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    let oldHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }


    // get(index){
    //     if(index < 0 || index >= this.length) return null;
    //     var count, current;
    //     if(index <= this.length/2){
    //         count = 0;
    //         current = this.head;
    //         while(count !== index){
    //             current = current.next;
    //             count++;
    //         }
    //     } else {
    //         count = this.length - 1;
    //         current = this.tail;
    //         while(count !== index){
    //             current = current.prev;
    //             count--;
    //         }
    //     }
    //     return current;
    // }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return this.unshift(val);
    } else if (index === this.length) {
      return this.push(val);
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    
    // newNode.prev and newNode.next should be together
    // .val is removed from the list
    let removedNode = this.get(index);
    let prevNode = this.get(index - 1);
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    

    this.length--;
    return removedNode;

  }

}


let list = new DoublyLinkedList()
list.push("Harry")
list.push("Potter")
list.push("Ronald")
list.push("Voldamort")
