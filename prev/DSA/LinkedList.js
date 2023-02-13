class ListNode{
    constructor(val){
      this.val = val;
      this.next = null;
    }
}

function insert_listnode(head,val){
    while(head.next){
      head = head.next;
    }
    head.next = new ListNode(val);
  }
  
function reverse_listnode(head){
    let ret = null;
    while(head){
        next = head.next;
        head.next = ret;
        ret = head;
        head = next;
    }
    return ret;
}

function detect_cycle_listnode(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
        return true
        }
    }
    return false;
}

function print_listnode(head){
    while(head){
        console.log(head.val);
        head = head.next;
    }
}