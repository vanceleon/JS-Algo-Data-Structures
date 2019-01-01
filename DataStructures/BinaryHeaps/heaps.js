class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent; 
            idx = parentIdx;
            
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        // trickle down
        return max;


    }

    sinkDown(index) {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIndex = 2 * idx + 1;
            let rigthChildIndex = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if(rigthChildIndex < length) {
                rightChild = this.values[rigthChildIndex];
            }
            if (swap === null) break;
        }
    }
}


let heap = new MaxBinaryHeap();
heap.insert(55);