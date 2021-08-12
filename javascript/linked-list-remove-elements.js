var removeElements = function(head, val) {
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
    if (!head) {
        return head;
    }
    
    let current = head;
    while (current) {
        let next = current.next;
        while (next) {
            if (next.val === val) {
                next = next.next;
                current.next = next;
            } else {
                break;
            }
        }
        
        current = current.next;
    }
    
    return head;
};
