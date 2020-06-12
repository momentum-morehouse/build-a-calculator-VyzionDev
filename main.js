

 function compute(value) 
 { 
     document.getElementById("result").value+=value
 } 
   //displays the value of operations

 function solve() 
 { 
     let x = document.getElementById("result").value 
     let y = eval(x) 
     document.getElementById("result").value = y 
 } 
  //solves the logic
   

 function clear() 
 { 
     document.getElementById("result").value = "" 
 } 
 //will clear

 function wrong() {

    document.getElementById("result").value+=value
     if (value % 2 != 0 || value % 2 != 1)
     {
        document.getElementById("result").value = "error"
     }
 }