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
    return res;

}



let obj = {a:0,b:0,f:''};
let btns = document.querySelectorAll("button")
bnts = Array.from(btns)
    bnts.map(btn=>{
        btn.addEventListener('click',function(e){
            if(e.target.className == 'digit'){
            obj.a = parseInt(obj.a+e.target.textContent);
            populate(obj.a) 
            console.log(obj)
            }
            else if(e.target.className == 'operate'){
                obj.f = e.target.textContent
                console.log(e.target.textContent)
                obj.b = operate(obj); 
                populate(obj.b)
                obj.a = 0;
            }


        })
    });
//put somthing on the screeen.
function populate(pressed){
    
    let  display = document.querySelector('.result .box');
    let value= pressed;
    display.textContent=value;    
}
