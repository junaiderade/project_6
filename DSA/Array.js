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