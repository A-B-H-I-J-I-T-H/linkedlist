const linkedlist = () => {
    let first = null,last = null,temp;

    const append = value => {
        const newnode = node(value);
        newnode.nextnode = null;
        if (first == null) {
            first = newnode;
            last = newnode;
        }
        else {
            last.nextnode = newnode;
            last = newnode;
        }
    }

    const prepend = value => {
        const newnode = node(value);
        newnode.nextnode = null;
        if (first == null) {
            first = newnode;
            last = newnode;
        }
        else {
            newnode.nextnode = first;
            first = newnode;
        }
    }

    const size = () => {
        let n=1;
        temp = first;
        if (temp==null)
            return 0;
        while(temp.nextnode!=null) {
            temp = temp.nextnode;
            n++;
        }
        return n;
    }

    const head = () => {
        return first;
    }

    const tail = () => {
        return last;
    }

    const at = index => {
        temp = first;
        if (temp==null)
            return null;
        for (let i=0;i<index;i++) {
            if (temp.nextnode==null)
                return null;
            temp = temp.nextnode;
        }
        return temp;
    }

    const pop = () => {
        temp = first;
        if (temp==null)
            return;
        if (temp.nextnode==null) {
            first = null;
            last = null;
            return;
        }
        while (temp.nextnode!=last) {
            temp = temp.nextnode;
        }
        temp.nextnode = null;
        last = temp;
    }

    const contains = value => {
        temp = first;
        if (temp==null)
            return false;
        while (temp!=last) {
            if (temp.value == value)
                return true;
            temp = temp.nextnode;
        }
        if (temp.value == value)
            return true;
        else
            return false;
    }

    const find = value => {
        temp = first;
        let n=0;
        if (temp==null)
            return false;
        n=1;
        while (temp!=last) {
            if (temp.value == value)
                return n;
            temp = temp.nextnode;
            n++;
        }
        n++;
        if (temp.value == value)
            return n;
        else
            return null;
    }

    const tostring = () => {
        temp = first;
        let s = "";
        if (temp==null) {
            s+="null";
            console.log(s);
            return;
        }
        while(temp!=last) {
            s+=`( ${temp.value} ) -> `;
            temp = temp.nextnode;
        }
        s+=`( ${temp.value} ) -> `;
        s+="null";
        console.log(s);
    }

    const insertAt = (value,index) => {
        let n = size();
        if (index==0)
            prepend(value);
        else if (index==n-1)
            append(value);
        else if (index<n-1) {
            reqnode = at(index-1);
            const newnode = node(value);
            newnode.nextnode = reqnode.nextnode;
            reqnode.nextnode = newnode;
        }
    }

    const removeAt = index => {
        let n = size();
        if (index==0) {
            first = first.nextnode;
        }
        else if (index<n-1) {
            reqnode = at(index-1);
            if (reqnode.nextnode==null)
                return;
            temp = reqnode.nextnode
            if(temp.nextnode==null) {
                reqnode.nextnode = null;
                last = reqnode;
                return;
            }
            reqnode.nextnode = temp.nextnode;
        }
    }

    return { first,last,temp,append,prepend,size,head,tail,at,pop,contains,find,tostring,insertAt,removeAt};
}

const node = (value) => {
    let nextnode=null;

    return { value,nextnode};
}

const flow = (() => {
    const list = linkedlist();
    let value,index,n,exit = 0;
    do {
        n = prompt("enter choice");
        switch(n) {
            case "1":
                value = prompt("enter value");
                list.append(value);
                break;
            case "2":
                value = prompt("enter value");
                list.prepend(value);
                break;
            case "3":
                console.log(list.size());
                break;
            case "4":
                console.log(list.head());
                break;
            case "5":
                console.log(list.tail());
                break;
            case "6":
                index = prompt("enter index");
                console.log(list.at(index));
                break;
            case "7":
                list.pop();
                break;
            case "8":
                value = prompt("enter value");
                console.log(list.contains(value));
                break;
            case "9":
                value = prompt("enter value");
                console.log(list.find(value));
                break;
            case "10":
                list.tostring();
                break;
            case "11":
                value = prompt("enter value");
                index = prompt("enter index");
                list.insertAt(value,index);
                break;
            case "12":
                index = prompt("enter index");
                list.removeAt(index);
                break;
            case "13":
                exit = 1;
            default:
                console.log("error");
                break;
        }
    }while(exit==0);
})();