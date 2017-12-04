'use strict';

class LinkedList{
  //new LinkedList()...
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    // vinicio - we know we are at the last element if there is no next
    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  //TODO : Homework
  find(value){
    console.log(value, this.value, this);
    if(this.value === value) {
      return this;
    } else if (this.next === null){
      return null;
    } else {
      return this.next.find(value);
    }
  }



  //vinicio - remove has( intentionally n_o), a bug. Can you find it?
  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if(!this.next)
      return this;
    if(this.next === node){
      //vinicio - here we know we need to remove the NEXT node
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}

module.exports = LinkedList;
