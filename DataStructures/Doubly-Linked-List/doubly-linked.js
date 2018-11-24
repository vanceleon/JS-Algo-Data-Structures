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

}