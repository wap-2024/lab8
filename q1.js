function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.add = function (val) {
    if (this.head == null) {
      this.head = new Node(val);
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new Node(val);
  };
  this.remove = function (val) {
    if (this.head == null) return;

    let node = new Node();
    node.next = this.head;
    let temp = node;

    while (temp.next) {
      if (temp.next.val == val) {
        temp.next = temp.next.next;
        break;
      }
      temp = temp.next;
    }
    this.head = node.next;
  };

  this.print = function () {
    if (this.head == null) return;
    let temp = this.head;
    let res = [];
    while (temp) {
      res.push(temp.val);
      temp = temp.next;
    }
    console.log(res.join(", "));
  };
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: LinkedList{1,2,3}
list.remove(3);
list.print(); // Output: LinkedList{1,3}
list.remove(2);
list.print(); // Output: LinkedList{1,3}
list.remove(1);
list.print(); // Output: LinkedList{1,3}
