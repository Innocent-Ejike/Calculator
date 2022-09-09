function calculate(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
 
    let oper = document.querySelector("#operator").value;
    //console.log(oper);
   // console.log(b);
   let calculate;
   if(oper === "add"){
    calculate = a + b;
    }
    else if(oper ==="sub"){
    calculate = a - b;
    }
   else if(oper === "div"){
    calculate = a / b;
   }
   else if(oper === "mul"){
    calculate = a * b;
   }
   document.querySelector(".result").innerHTML = calculate;
}