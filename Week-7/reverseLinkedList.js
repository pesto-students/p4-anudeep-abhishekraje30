class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const reverseLinkedList = (head) => {
    let prev = null
    let next = null
    let current = head
    while (current != null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// prints linked list
const printList = (node) => {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log("Given Linked list")
printList(head);
head = reverseLinkedList(head);
console.log("Reversed linked list");
printList(head);