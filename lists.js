class LinkedList {
    constructor (data) {
        this.data = data;
        this.next = null;
    }

    append(value) {
        let head = this;
        let current = head

        while (current.next) {
            current = current.next;
        }

        let node = new LinkedList(value);
        current.next = node;
    }

    prepend(value) {
        let head = new LinkedList(value);
        head.next = this;
        return head;
    }

    size() {
        let current = this;
        let length = 1;

        while (current.next) {
            current = current.next;
            length ++;
        }
        return length;
    }

    head() {
        return this;
    }

    tail() {
        let head = this;
        let current = head

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        let current = this;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
    
        return current;
    }

    pop() {
        if (!this) return;

        let current = this;
        let prev = null;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        if (prev) prev.next = null;
        else {
            this.data = null;
            this.next = null;
        }
    }

    contains(value) {
        let current = this;

        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this;
        let currentIndex = 0;

        while (current) {
            if (value === current.data) return currentIndex;
            current = current.next;
            currentIndex++;
        }
    
        return null;
    }

    toString() {
        let string = '';
        let current = this;
        let node = current;

        while (current) {
            string += `( ${current.data} ) -> `;
            current = current.next;
        }

        string += `( ${node.data} ) -> null `;
        return string;
    }

    insertAt(value, index) {
        let node = new LinkedList(value);
        let prev = null;
        let currentIndex = 0;
        let current = this;

        if (index === 0) {
            let head = new LinkedList(value);
            head.next = this;
            return head;
        }



        while (current) {
            if (currentIndex === index) break;
            prev = current;
            current = current.next;
            currentIndex++;
        }

        prev.next = node;
        node.next = current;

        return this;
    }

    removeAt(index) {
        let prev = null;
        let currentIndex = 0;
        let current = this;
        
        if (index === 0) {
            let next = current.next;
            next.next = current.next.next;
            current.next = null;
           return next;
        }



        while (current) {
            if (currentIndex === index) break;
            prev = current;
            current = current.next;
            currentIndex++;
        }

        prev.next = current.next;

        return this;
    }
}

let myList = new LinkedList(1);
myList.append(2);
myList.append(30);
myList = myList.prepend(8)
let size = myList.size();
let head = myList.head();
let tail = myList.tail();
let at = myList.at(0);
myList = myList.insertAt(45, 0);
myList = myList.removeAt(1);

console.log(myList);

