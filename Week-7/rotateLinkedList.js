let head; // Head of list

/* Linked list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const rotate = (k) => {
    if (k == 0)
        return;

    let current = head;
    let count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }
    if (current == null)
        return;
    let kthNode = current;
    while (current.next != null)
        current = current.next;
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
}


function push(new_data) {
    /*
    1 & 2: Allocate the Node & Put in the data
    */
    let new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

function printList() {
    let temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}

/* Driver program to test above functions */

// create a list 10->20->30->40->50->60
for (i = 60; i >= 10; i -= 10)
    push(i);

console.log("Given list<br/>");
printList();

rotate(4);

console.log("Rotated Linked List<br/>");
printList();


