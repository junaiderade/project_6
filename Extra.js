/*
when you pass an array/object in a backtracking style function,
the array/object is referenced in each call, but you don't have this problem
with strings

look at the difference of how you'd do this problem in python because the referencing rules may be diff

Read about primitive vs reference values in js

https://www.geeksforgeeks.org/primitive-and-reference-value-in-javascript/#:~:text=Reference%20Value%3A%20JavaScript%20provides%20three,actual%20value%20that%20is%20stored.
*/

//how to make a copy of a map becuase map is a reference variable and doesn't work when passing in dfs for example

let lookup = new Map()
//do operations and change map
let copy = new Map(lookup)


var pseudoPalindromicPaths  = function(root) {

    
    //helper_str(root,"")
    helper_arr(root,[])
    return 0;
};

function helper_str(node, str){
    str+=node.val;
    if(node.left){
        helper_str(node.left,str);
    }
    if(node.right){
        helper_str(node.right,str)
    }
    if(!node.right && !node.left){
        console.log(str)
    }
}

function helper_arr(node,arr){
    arr.push(node.val)
    if(node.left){
        helper_arr(node.left,arr);
    }
    if(node.right){
        helper_arr(node.right,arr)
    }
    if(!node.right && !node.left){
        console.log(arr)
    }
}