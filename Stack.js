
//Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

class _Node {
 constructor(data, next) {
     this.data = data;
     this.next = next;
 }
}
class Stack {
 constructor(){
  this.top = null; 
 }

 push (data) { // orange string goes in // now apple goes in 
  if (this.top === null){ // yes would be null in this case // does not equal null
   this.top = new _Node(data, null); // then top = newNode(orange, null)
   return this.top // exit the function with the new value for top
  }
  //console.log(this.top)
  const node = new _Node(data,this.top) // node = newNode(apple,next = top) ? orange node
  this.top = node; // this.top = newNode(apple, this.next =this.top)
 }
 pop (){
 // console.log(this.top) // apple -orange
  const node = this.top;  
  // node is the whole thing 
  this.top = node.next; 
  // take orange to be the new top
  return node.data;
 }
}

function main(){

const starTrek = new Stack
starTrek.push('Kirk')
starTrek.push('Scotty')
starTrek.push('Spock')

function peek(){
 return starTrek.top.data
}

console.log(peek())
function isEmpty (){
 if (starTrek.top === null){
  return true
 } else {
  return false
 }
}
function display(){
return JSON.stringify(starTrek)
}
//console.log(isEmpty())
//console.log(display())

function is_palindrome(s) { /// -------------------------> exploiting natural reverse
 s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
 const word = s.split('')
 const stk = new Stack 
 // make 3 variables for 1 string based on letters 
 // D  -> word[0]
 // A  --> word[1]
 // D  -> word[2]
 for (let i=0; i<word.length; i++){
     stk.push(word[i])
    // console.log(stk.top.data)
 }
    let natRev = stk.top
    let down = []
    
    while(natRev){
        
       down.push(natRev.data)
        natRev = natRev.next 
    }

if (s === down.join('')){
    return true
} else {
    return false
}
}
// True, true, true, false
//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));

// 4. Arithmatic expression parser 

function parser2(exp){
    const stk = new Stack 
    let positionN = null
    let positionC = null
    let positionS = null
    let counterN = 0
    let counterS = 0
    let counterC = 0
    let error = ''
    for(let i=0; i<exp.length;i++){
        if(exp[i] === '('){
            positionN = i
            stk.push(exp[i])
            counterN ++
        } 
        if(exp[i] === ')'){
           
            if(stk.top == null){
                positionN = i
                console.log('missing (')
                console.log(positionN)
                return false
            }
            if(stk.top.data === '('){
                stk.pop(exp[i])
            } 
            if(counterN <= 0){
                positionN = i
                console.log(positionN)
                console.log('missing (')
                return false
            }
          
        }
        if(exp[i] === '['){
            positionS = i
            stk.push(exp[i])
            counterS ++
        } 
        if(exp[i] === ']'){
            if(stk.top == null){
                positionS = i
                
               console.log(positionS)
               console.log('missing [')
                return false
            }
            if(stk.top.data === '['){
                stk.pop(exp[i])
            }
            if(counterS <= 0){
                positionS = i
                console.log('missing [')
                console.log(positionS)
                return false
            }
           
        }
        if(exp[i] === '{'){
            positionC = i
            stk.push(exp[i])
            counterC ++
        } 
        if(exp[i] === '}'){
            if(stk.top == null){
                positionC = i
                console.log(positionC)
                console.log('missing {')
                return false
            }
            if(stk.top.data === '{'){
                stk.pop(exp[i])
            }
            if(counterC <= 0){
                positionC = i
                console.log(positionC)
                console.log('missing {')
                return false
            }
        }
    }
 
    if(stk.top == null){
        console.log('balanced')
        return true 
    } else if (stk.top.data == '('){
        console.log(positionN)
        console.log('missing )')
        return false 
    }else if (stk.top.data == '['){
        console.log('missing ]')
        console.log(positionS)
        return false 
    }else if (stk.top.data == '{'){
        console.log('missing }')
        console.log(positionC)
        return false 
    }
  
}


//console.log(parser2(`[{2+2}]`))

// 5. Sort Stack 
function sortStack(){
    let s2 = new Stack
    let s1 = new Stack
    s1.push(11)
    s1.push(32)
    s1.push(4)
    while(s1.top){
        let tmp = s1.pop()
        while(s2.top && s2.top.data < tmp){
            s1.push(s2.pop())
        }
        s2.push(tmp)
    }
   return s2
}
console.log(sortStack())

}// --> MAIN Function 
main()