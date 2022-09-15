class TreeNode
{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function in_order_iterative(root) {//O(N) and O(N)
    let arr = [];
    let stack = [];
    while(root || stack.length > 0){
        while(root){
            stack.push(root)
            root = root.left;
        }
        root = stack.pop();
        arr.push(root.val);
        root = root.right;
    }
    return arr;
}

function is_symmetric(root) {//O(N) and O(N)
    return is_mirror(root,root);

    function is_mirror(node1,node2){
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        return (node1.val == node2.val) && is_mirror(node1.right,node2.left) && is_mirror(node1.left,node2.right);
    }
}

function max_depth(root) {//O(N) and O(N)
    if(!root){
        return 0
    }
    return 1 + Math.max(max_depth(root.left),max_depth(root.right));
};

function insert_BST(root,val){
    if(!root){
        return new TreeNode(val);
    }
    if(val < root.val){
        root.left = insert_BST(root.left,val);
    }else{
        root.right = insert_BST(root.right,val);
    }
    return root;
}

function invert(root){
    if(!root){
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    root.left = invertTree(root.left)
    root.right = invertTree(root.right)
    return root;
}

function level_order_tree_bfs(root){
    let ret = [];
    let queue = [root];
    while(queue.length > 0){
        let level = [];
        let next_level = [];
        while(queue.length > 0){
        let shifted = queue.shift();
        level.push(shifted.val);
        if(shifted.left){
            next_level.push(shifted.left);
        }
        if(shifted.right){
            next_level.push(shifted.right);
        }
        }
        ret.push(level);
        queue = next_level;
    }
    return ret;
}

function print_tree(root){
    if(!root){
        return;
    }
    console.log(root.val);
    print_tree(root.right);
    print_tree(root.left);
}