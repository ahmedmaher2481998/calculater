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
    return res;

}    
let  display = document.querySelector('.result .box');
let btns = document.querySelectorAll("button")
bnts = Array.from(btns)
bnts.map(btn=>{ 
    let value='';
    btn.addEventListener('click',function(){ 
        value += btn.textContent;

        display.textContent=value;
    })
})
