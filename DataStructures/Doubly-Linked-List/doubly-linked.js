class Node{
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
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            
        }else{
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
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;

        }
        this.length--;
        return poppedNode;
    }
    shift() {
        let oldHead = this.head;
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index) {
        
        if (index < 0 || index >= this.length) return null;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }else {
            while(count != index) {
                current = current.next;
                count--;
            }
        }
        return current;
    }
}