function kthLargestElement(nums, k) {
  sort(nums);
  return nums[nums.length - k];
}

function sort(arr) {
  maxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }
}

function maxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, n, i) {
  // i is the root node between a root-left-right triplet
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {     // make sure left/right are a node in the heap
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, largest, i);
    heapify(arr, n, largest);
  }
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/*
sort using heap sort
    use nums as heap
    turn nums into max heap
        define heapify function
            in a root-left-right triplet, move the largest of triplet to the root
            if a swap was made
                run heapify with the swapped node as the root
        run heapify on every root node, starting with the lowest root
    for each i starting at end,
        swap i with start(max)
        heapify smaller heap


get element at nums.length - k
*/
