//basic operations + - * / 
function add(a,b){ 
    return a + b;
}
function substract(a,b){ 
    return a - b;
}
function mutliply(a,b){ 
    return a * b;
}
function divide(a,b){ 
    return a / b ;
}
//funcation that takes object {f:"operatro sign ",a:first num , b: second num}
/*
object={ 
    f:'+',
    a:10,
    b:20
}
*/
function operate(num1,num2,operator){
    let res;
    if(operator=='+') { 
        res = add(num1,num2);
    }
    else if (operator == '-'){ 
         res = substract(num1,num2)
    }
    else if (operator == '*'){ 
         res = mutliply(num1,num2)
    }
    else if (operator == '/'){
        if(num2==0){ 
            alert('can not divide by zero!!')
        } 
         res =  divide(num1,num2)
    }
    else if (operator == '%'){ 
        if(num2==0){ 
            alert('can not divide by zero!!')
        } 
        res = num1 %num2;
    }
    if(Number(res) === res && res % 1 !== 0){
        Math.floor(res* 100) / 100
    }

    return res;

}
// test 12 + 7 - 5 * 3 = 42
let obj = {a:null, b:null ,f:'' , result:null};
let btns = Array.from(document.querySelectorAll("button"))
let digits = btns.filter(btn=>btn.className =="digit");
let operators =  btns.filter(btn=>btn.className =="operate");
let point = Array.from(document.querySelector('.point'));
//put somthing on the screeen.
function populate(pressed){
    
    let  display = document.querySelector('.result .box');
    let value= pressed;
    display.textContent=value;    
}
let digit1 = 0;
let digit2 = 0;
let result ;
digits.map(digit=>{
    digit.addEventListener('click',function(e){ 
        if(!digit1){ 
            digit1 = digit.textContent;
        }
        else{ 
            digit1 += digit.textContent ;
        }
        if(parseInt(digit1) > 10000000000){ 
            alert('very large number ')
            populate("Error press CE")

        }
        else {
            populate(digit1);
            digit1 = parseInt(digit1);
        }
    })
})
let operation;
operators.map(operator=>{ 
    operator.addEventListener('click',function(){ 
        if(!digit2){ 
            operation = operator.textContent;
            digit2 = digit1 ; 
            digit1 = 0 ; 
        }
        else if (!operation){ 
            operation = operator.textContent
        }
        else{
            
            result = operate(digit2,digit1,operation);
            populate(result)
            digit1 = 0 ;
            digit2 = result;
            operation = operator.textContent; 

        }
        
    })
})

document.querySelector('.clear').addEventListener('click',function(){ 
    digit1 = 0 ;
    digit2 = 0 ;
    result = 0 ; 
    operation = null ;
    populate(0)
})
document.querySelector('.equal').addEventListener('click',function(){
    result = operate(digit2,digit1,operation);
    populate(result)
    digit2 = result;
            
   console.log(digit2,digit1,operation,result)
    populate(digit2);
    digit1  = 0 ;
    result = 0 ;
    operation = null ; 

})