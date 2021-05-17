var deleteDuplicates = function(head) {
    let num = {};
    let curr = head;
    while (curr != null) {
        num[curr.val] || (num[curr.val] = 0)
        num[curr.val] = num[curr.val] + 1;
        curr = curr.next;
    }
    curr = head;
    let pointer = head;
    while (curr != null) {
        if (num[curr.val] > 1) {
            if(curr == head) {
                head = head.next;
                curr = head;
                pointer = head;
                num[curr.val] = num[curr.val] - 1;
            }
            else {
                pointer.next = curr.next;
                num[curr.val] = num[curr.val] - 1;
                
            }
        }
        if (curr != head && pointer.next != curr.next) {
            pointer = pointer.next;
        }
        curr = curr.next;
    }
    return head;
};
