var copyRandomList = function(head) {
    if (head == null) {
        return null;
    }
    let curr = head;
    while (curr != null) {
        //console.log('curr: ', curr)
        curr.next = new Node (curr.val, curr.next, null);
        curr = curr.next.next
    }
    curr = head;
    while (curr != null) {
        if (curr.random != null) {
            curr.next.random = curr.random.next;
        }
        else {
            curr.next.random = null;
        }
        curr = curr.next.next;
    }
    curr = head;
    let copy = head.next;
    let copyTraverse = copy;
    while (curr.next.next != null && copyTraverse.next.next != null) {
        curr.next = curr.next.next;
        copyTraverse.next = copyTraverse.next.next;
        curr = curr.next;
        copyTraverse = copyTraverse.next;
    }
    curr.next = null;
    curr = copy;
    while (curr != null) {
        curr = curr.next;
    }
    return copy;
};
