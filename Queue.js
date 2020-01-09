class _Node {
 constructor(value){
  this.value = value;
  this.next = null;
 }
}
class _NodeStack {
 constructor(data, next) {
     this.data = data;
     this.next = next;
 }
}
 class Stack {
  constructor(){
   this.top = null; 
  }
 
  push (data) { 
   if (this.top === null){ 
    this.top = new _NodeStack(data, null); 
    return this.top 
   }
  
   const node = new _NodeStack(data,this.top) 
   this.top = node;
  }
  pop (){
  
   const node = this.top;  
  
   this.top = node.next; 
   
   return node.data;
  }
 }
 

class _Node2 {
 constructor(value,previous){
  this.value = value;
  this.prev = previous;
  this.next = null
 }
}
class Queue {
 constructor() {
  this.first = null;
  this.last = null;
 }

 enqueue(data){
  const node = new _Node(data);

  if(this.first === null){
   this.first = node;

  }
  if (this.last){
   this.last.next = node;
  }
  this.last = node;
 }

 dequeue(){
  if (this.first === null) {
   return;
  }
  const node = this.first;
  console.log(node.value)
  this.first = this.first.next;
  if (node === this.last) {
     this.last = null;
  }
  return node.value;
 }

}

class QueueDouble {
 constructor() {
  this.first = null;
  this.last = null;
 }

 enqueue(data){
  let previous = null
  if(this.last){
   previous = this.last // if I did value here would not be circular
  }
  const node = new _Node2(data,previous);

  if(this.first === null){
   this.first = node;

  }
  if (this.last){
   this.last.next = node;
   
  }
  this.last = node;
 }

 dequeue(){
  if (this.first === null) {
   return;
  }
  const node = this.first;

  this.first = this.first.next;
  if (node === this.last) {
     this.last = null;
  }
  return node.value;
 }
}


function main() {
 const passengers = new QueueDouble
 const starTrekQ = new Queue



 starTrekQ.enqueue('Kirk')
 starTrekQ.enqueue('Spock')
 starTrekQ.enqueue('Uharu')
 starTrekQ.enqueue('Sulu')
 starTrekQ.enqueue('Checkov')
 

 function peek(Q){
  return Q.first.value
 }

 function isEmpty(Q){
  if(Q.first === null){
   return true
  } else return false
 }

 function display(Q){
  return JSON.stringify(Q)
 }

 //starTrekQ.dequeue()
 //starTrekQ.dequeue()
 //console.log(display(starTrekQ))

passengers.enqueue('Kirk')
passengers.enqueue('Spock')
passengers.enqueue('Uharu')
passengers.enqueue('Sulu')
passengers.enqueue('Checkov')


// 7. Double Linked List - check first one in queue
//console.log(peek(passengers))


}

main()


// 8. Queue made of two stacks

function Qstack(){
 const stack1 = new Stack
 const stack2 = new Stack 

 class QueueStackMade {

  constructor() {
   this.first = null;
   this.last = null;
  
  }
 
  enqueue(data){
  stack1.push(data)
  }
  dequeue(){
    if(stack2.top === null){
     while(stack1.top){
      stack2.push(stack1.pop())
     }
    }
    return stack2.pop()
  }
  front(){
   return stack2
  }
 }
 
 function peek(Q){
  return Q.first.value
 }
 const Qstar = new QueueStackMade
 Qstar.enqueue('Kirk')
 Qstar.enqueue('Spock')
 Qstar.enqueue('Uharu')
 Qstar.enqueue('Sulu')
 Qstar.enqueue('Checkov')
 Qstar.dequeue()
 Qstar.dequeue()
 Qstar.dequeue()
 //console.log(Qstar.front())
}

Qstack()

//9. Square dancing pairiing 

function dancePairing (){
 const M = new Queue
 const F = new Queue

 M.enqueue('Frank')
 M.enqueue('John')
 M.enqueue('Sherlock')
 M.enqueue('David')
 M.enqueue('Christopher')

 F.enqueue('Jane')
 F.enqueue('Madonna')
 F.enqueue('Beyonce')
 
 while(F.first){
  M.dequeue()
  F.dequeue()
 }
 
 //console.log(M)

}
//dancePairing()

// 10. Bank Q

function bankQ(){

 const BankQ = new Queue
BankQ.enqueue('Person1')
BankQ.enqueue('Person2')
BankQ.enqueue('Person3')
BankQ.enqueue('Person4')
BankQ.enqueue('Person5')


 function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(4));
}

function check(Q){

 while (BankQ.first){
  if (getRandomInt() > 0){
   Q.dequeue()
   console.log('next!')
  } else if (getRandomInt() <= 0){
   console.log('wrong paperwork!')
   Q.enqueue(Q.dequeue())
  }
 }
 
return Q

}
console.log(check(BankQ))

}
bankQ()