console.log("hello world")

// let means the verb let. let there be light, let x = 1
let name = "Dizzy"
let age = 32
let isAwesome = true

function add(a, b){
  return a + b
}

console.log(add(1, 2))


for(let i = 0; i < 10; i++){
  console.log(i)
}

let stuff = 69
if(stuff === 69){
  console.log("Good times had by all")
}
else{
  console.log("Aw man")
}




let x = 5
console.log("x = " + x)
x = "Llama"
console.log("x = " + x)
x = true
console.log("x = " + x)
x = 5.343
console.log("x = " + x)




let inputBox = document.getElementById("inputBox");
let resultBox = document.getElementById("resultBox");
document.getElementById("submitButton").onclick = (()=>{
  console.log("clcick")
  let s = inputBox.value
  resultBox.value = s
})

function click(){
  console.log()
}
