var mergeTwoLists = function(l1, l2) {
    let curr1 = l1
    let curr2 = l2;
    let mergedList = null;
    let pointer;
    let pointer2;
    if (!curr1) {
        return curr2;
    }
    if (!curr2) {
        return curr1;
    }
    while (curr1 != null || curr2 != null) {
        //console.log('central merged: ', mergedList)
        if(mergedList == null && curr1 == l1 && curr1.val <= curr2.val) {
            mergedList = curr1;
            pointer = mergedList;
            curr1 = curr1.next;
            //console.log(mergedList.val)
            //console.log(curr1, curr2)
        }
        if(mergedList == null && curr2 == l2 && curr2.val <= curr1.val) {
            mergedList = curr2;
            pointer = mergedList;
            curr2 = curr2.next;
            //console.log(mergedList.val)
            //console.log(curr1, curr2)
        }
        if(mergedList != null) {
            if (!curr1) {
                pointer.next = curr2;
                return mergedList
            }
            if(!curr2) {
                pointer.next = curr1;
                return mergedList
            }
            if(curr1 && curr2 && curr1.val <= curr2.val) {
                //console.log('before: ', curr1, curr2)
                pointer.next = curr1;
                pointer = pointer.next;
                //console.log('pointer: ', pointer)
                curr1 = curr1.next;
                //console.log('after: ', curr1, curr2)
                //console.log('merged: ', mergedList)
            }
            if(curr2 && curr1 && curr2.val < curr1.val) {
                //console.log('before: ', curr1, curr2)
                pointer.next = curr2;
                pointer = pointer.next;
                //console.log('pointer: ', pointer)
                curr2 = curr2.next;
                //console.log('after: ', curr1, curr2)
                //console.log('merged: ', mergedList)
            }
        }
    } 
    return mergedList;
};
