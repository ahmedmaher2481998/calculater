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
function operate(array,operator){
    let res;
    if(operator=='+') { 
        res = add(array[0],array[1]);
    }
    else if (operator == '-'){ 
         res = substract(array[0],array[1])
    }
    else if (operator == '*'){ 
         res = mutliply(array[0],array[1])
    }
    else if (operator == '/'){
        if(array[1]==0){ 
            alert('can not divide by zero!!')
        } 
         res =  divide(array[0],array[1])
    }
    else if (operator == '%'){ 
        res = array[0] %array[1];
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
let clear  = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let point = Array.from(document.querySelector('.point'));
// evnt listner to digits 

//put somthing on the screeen.
function populate(pressed){
    
    let  display = document.querySelector('.result .box');
    let value= pressed;
    display.textContent=value;    
}
