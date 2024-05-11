class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new value to the end of the list
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to remove a value from the list
    remove(value) {
      if (!this.head) return;
  
      // If the head needs to be removed
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Method to print all values in the list
    print() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(`LinkedList{${values.join(',')}}`);
    }
  }
  
  // Use case
  let linkedlist = new LinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); //Expected Result: LinkedList{1,2,3};
  
  linkedlist.remove(2);
  linkedlist.print(); //Expected Result: LinkedList{1,3};
  