function sumRange(num) {
    if (num === 1) return 1; // Base Case
    return num + sumRange(num-1); // Different inputs
}
sumRange(10);
