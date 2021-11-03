//basic operations
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
function operate(obj){
    let res;
    if(obj.f=='+') { 
        res = add(obj.a,obj.b);
    }
    else if (obj.f == '-'){ 
         res = substract(obj.a,obj.b)
    }
    else if (obj.f == '*'){ 
         res = mutliply(obj.a,obj.b)
    }
    else if (obj.f == '/'){ 
         res =  divide(obj.a,obj.b)
    }
    else if (obj.f == '%'){ 
        res = obj.a % obj.b ;
    }
    else if (obj.f == '+/-'){ 
        obj.a = - obj.a ;
        res = obj.b
    }
    return res;

}
// test 12 + 7 - 5 * 3 = 24
let obj = {a:0,b:0,f:''};
let result = 0 ;
let btns = document.querySelectorAll("button")
btns = Array.from(btns);

let digits = btns.filter(btn=>btn.className =="digit");
let operators =  btns.filter(btn=>btn.className =="operate");
let clear  = document.querySelector('.clear')
console.log(clear)
console.log(digits)
console.log(operators)
/*
    bnts.map(btn=>{
        btn.addEventListener('click',function(e){
            if(e.target.className == 'digit'){
            obj.a = parseInt(obj.a+e.target.textContent);
            populate(obj.a) 
            }
            else if(e.target.className == 'operate'){
                obj.f = e.target.textContent
                obj.b = operate(obj); 
                populate(obj.b)
                obj.a = 0;
            }
            else if (e.target.className == 'equal'){ 
                populate(obj.b)
                obj.a = 0;
            }
            else if (e.target.className == 'clear'){ 
                obj.a = obj.b = 0;
                obj.f = ''
                populate('.....Wanna clac somthing !!.....')
            }
            console.log(obj)
        })
    });*/
//put somthing on the screeen.
function populate(pressed){
    
    let  display = document.querySelector('.result .box');
    let value= pressed;
    display.textContent=value;    
}
