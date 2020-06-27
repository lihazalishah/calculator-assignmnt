// number fun
function getNumber(num){
    
    var result=document.getElementById("input");
    result.value +=num;  // + for concatinayion
}
// square root methode
function squareRoot(){    
var result=document.getElementById("input")
    result.value=Math.sqrt(result.value);

}
// square methode
function square(){    
    var result=document.getElementById("input")
       result.value= result.value *result.value;
       return result.value;
    
    }
// cube methode
function Cube(){    
    var result=document.getElementById("input")
        result.value= (result.value *result.value)* result.value;
    
    }

// log fun
function Log(){    
    var result=document.getElementById("input")
        result.value=Math.log(result.value);
      
    }

    // sin fun
function Sin(){    
    var result=document.getElementById("input")
    result.value=Math.sin(result.value);
           
  }

  // tan fun
   function Ten(){    
  var result=document.getElementById("input")
   result.value=Math.tan(result.value);
           
 }
 // tan fun
 function Cos(){    
    var result=document.getElementById("input")
     result.value=Math.cos(result.value);
             
   }
        
// clear screen fun
function clearResult(){
    var result= document.getElementById("input");
    result.value = "";
}

// result fun
function getResult(){
    var result= document.getElementById("input");
    result.value=eval(result.value);// eval() for calculating values 
    result.value=result.toFixed(5)

}
