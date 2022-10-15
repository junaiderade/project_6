let example = []
example.unshift(9); //technically O(N)
let shifted = example.shift() //technically you would use with push if you wanted a queue


function bubbleSort(arr){//O(n)^2 & O(1)
  for(let i = 0;i<arr.length-1;i++){
      let swapped = false;
      for(let j = 0;j<arr.length-1;j++){
          if(arr[j]>arr[i]){
              arr[j] = temp;
              arr[j] = arr[i];
              arr[i] = temp;
              swapped = true;
          }
      }
      if(!swapped) break;
  }
  return arr;
}

function insertionSort(nums){//O(n)^2 & O(1)
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j+1] = nums[j]
      j--
    }
    nums[j+1] = temp
  }
  return nums
}

function selectionSort(arr){//O(n)^2 & O(1)
  for(let i = 0;i<arr.length;i++){
      let min = i;
      for(let j = i+1;j<arr.length;j++){
          if(arr[j]<arr[min]){
              min = j;
          }
      }
      if (min!==i){
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
      }
  }
  return arr;
}

function binary_search_rotated(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <=right){
      let mid = left + Math.floor((right - left) / 2);
      
      if(nums[mid]==target){
        return mid;
      }
      
      if(nums[left]<=nums[right]){
        if(nums[mid]<target){
            left=mid+1;
        }else{
            right = mid-1;
        }
      }
      else if(nums[mid]>=nums[left]){
        if(nums[left]<=target && nums[mid]>target){
            right = mid-1;
        }else{
            left = mid+1;
        }
      }
      
      else
      {
        if(nums[right]>=target && nums[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
      }
    }
    
    return -1;
};
  
function binary_search_fist_last(nums,target){
  let left = 0;
  let right = nums.length -1;
  let first = -1;
  let last = -1;

  while(left <=right){
    let mid = left + Math.floor((right - left) / 2);
    
    if(nums[mid]==target){
        first = mid;
        right = mid -1;
    }else if(nums[mid] < target){
        left = mid + 1;
    }else{
        right = mid -1;
    }
  }

  if(first==-1){
      return [-1,-1];
  }

  left = first;
  right = nums.length-1;

  while(left <=right){
    let mid = left + Math.floor((right - left) / 2);
    
    if(nums[mid]==target){
        last = mid;
        left = mid + 1;
    }else if(nums[mid] < target){
        left = mid + 1;
    }else{
        right = mid -1;
    }
  }

  return [first,last];
}

  function merge(arr1,arr2){ //this is the function just to merge 2 arrays, no the entire mergeSort, the params must be ORDERED arrays
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){ 
        if(arr2[j] >= arr1[i]){ //notice that here it is greater than OR equal to to capture the case of equality
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j])
            j++;
        }
    }

    while (i<arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while (j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr){ //this is recursive
if (arr.length<=1){
    return arr;
}
let mid = Math.floor(arr.length/2); //finds midpoint
let left = mergeSort(arr.slice(0,mid)); //does merge sort on left half
let right = mergeSort(arr.slice(mid)); //does merge sort on right half
return merge(left,right);
}

function partition(arr,start,end){//the start & end intervals. end is also where the pivot is
  console.log('Before: ' +arr, 'Start: '+ start, 'End: '+end);
  let pivot = arr[end];//you actually do NOTHING to the pivot till the end, you just sort the array based on its value
  let i = start-1;//note: i is NOT the same a pivot
  for(let j = start;j<end;j++){//this for loop uses multiple pointers to make all the numbers < pivot go to the front!
      if(arr[j]<pivot){//if current element is < than pivot (which starts as end), we swap it with pivot
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
  }
                      
  let temp = arr[i+1];//i was the last position of a number less than pivot so pivot belongs in i + 1
  arr[i+1] = arr[end];
  arr[end] = temp;
  console.log('After: '+arr,'Pivot: ' + pivot);
  return i + 1;//it returns the index after the correct position of the pivot
}

function quickSort(arr,start,end){
  if(start<end){//when start = end our interval is over
      let idx = partition(arr,start,end); //this gives us our index to partition from
      quickSort(arr,start,idx-1);//sorts everything to the left of idx
      quickSort(arr,idx+1,end);//sorts everything to the right of idx
  }
  return arr;
}

function selectPartition(arr,start,end){
  console.log('Before: '+arr,start,end);
  let pivot = arr[end]
  let pivotloc = start;
  for(let i = start;i<=end;i++){
      if(arr[i] < pivot){
          let temp = arr[i];
          arr[i] = arr[pivotloc];
          arr[pivotloc] = temp;
          pivotloc++;
      }
  }
  let temp = arr[end];
  arr[end] = arr[pivotloc];
  arr[pivotloc] = temp;
  console.log('After: '+arr)+',Pivot: '+pivotloc;
  return pivotloc;
}

function kthSmallest(arr,start,end,k){
  let pivot = selectPartition(arr,start,end);

  if(pivot === k){
      return arr[pivot];
  }else if(pivot < k){
      return kthSmallest(arr,pivot+1,end,k);
  }else{
      return kthSmallest(arr,start,pivot-1,k);
  }
}

function getDigit(num, i) { //returns the digit in num at the given place value (basically the index backwards)
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function digitCount(num) { //returns num of digits int the number
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
//* Math.log10 asks 10 to what power gives us the number
//ex: Math.log10(1000) = 3
}

function mostDigits(nums) { //returns the number of digits of the value with the most digits
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort (numbers){
  let maxDigits = mostDigits(numbers);
  for (var k = 0; k < maxDigits; k++){
      let digitBuckets = Array.from({length:10}, () => []); //this creates an array of 10 empty arrays (1 per digit 0-9)
      for (let i = 0;i < numbers.length; i++){
          let digit = getDigit(numbers[i],k); //gets the digit at a 10^i place value
          digitBuckets[digit].push(numbers[i]); //pushes the number, not the digit, into the matching array in the array of arrays
      }
      numbers = [].concat(...digitBuckets); //this creates one array from all the arrays within digitBuckets. pay attention to the .. operator
      //and assigns it to the original array
  }
  return numbers;
}

function binarySearchIterative(arr,val){
  let left = 0;
  let right = arr.length-1;
 
  while(left <= right){
      let mid = Math.floor((right+left)/2);
      if(arr[mid]===val){
          return mid;
      }
      if(arr[mid]>val){
          right = mid-1;
      }else{
          left = mid+1;
      }
  }

  return -1;
}

function binarySearchRecursive(arr,val,left,right){
  if(right>=1){
      let mid = Math.floor(right+left)/2;
      console.log(mid);
      if(arr[mid]===val){
          return mid;
      }
      if(arr[mid]>val){
          return binarySearchRecursive(arr,val,left,mid-1);
      }else{
          return binarySearchRecursive(arr,val,mid+1,right);
      }
  }else{
      return -1;
  }
}