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
// test 12 + 7 - 5 * 3 = 42
let obj = {a:null, b:null ,f:'' , result:null};

let btns = document.querySelectorAll("button")
btns = Array.from(btns);

let digits = btns.filter(btn=>btn.className =="digit");
let operators =  btns.filter(btn=>btn.className =="operate");
let clear  = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let point = Array.from(document.querySelector('.point'));

// evnt listner to digits 
let isa ;
digits.map(digit=>{ 
    digit.addEventListener('click',function(e){ 
       
        if(!obj.a )obj.a = e.target.textContent ; 
        else if (!isa) obj.a = obj.a + e.target.textContent
        obj.a = parseInt(obj.a)
        populate(obj.a)
        if(obj.a > 1000000000) {
            obj={a:null, b:null , f:null,result:null} 
            populate('reset');
        }
        if(isa){ 
            if(!obj.b) obj.b = e.target.textContent;
            else obj.b = obj.b + e.target.textContent;
            obj.b = parseInt(obj.b)
            populate(obj.b)
        }
        
    })
})
operators.map(operator=>{ 
    operator.addEventListener('click',function(e){
        
        //if not a store f 
        if(!obj.a){ 
            populate("invalid input ");
        }
        // if a and b pop
        if(obj.a){
         
            if(!obj.f)obj.f = `${e.target.textContent}`;
            
            isa  = true ;
             
            if(obj.b){ 
                obj.result = operate(obj)
                obj.a = null;
                obj.b = null;
                obj.f = null ;
                obj.f = `${e.target.textContent}`;
                obj.a = obj.result
                isa = true;
                populate(obj.a)
                obj.result = null ;
            }
        }
        
    })
})
 
// clear
clear.addEventListener('click',function() {
    reset()
populate('.....Wanna clac somthing !!.....')
});
equal.addEventListener('click',function(){ 
    console.log(obj)
    let res  = operate(obj)
    reset();
    populate(res)
    obj.a = res ; 
})



function reset(){ 
    obj = { 
        a : null,
        b : null , 
        f : null , 
        result : null
    }

}



//put somthing on the screeen.
function populate(pressed){
    
    let  display = document.querySelector('.result .box');
    let value= pressed;
    display.textContent=value;    
}



// falied trail 1 
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
    // failed trail 2
    /*operators.map(operator=>{
    operator.addEventListner('click',function(e){

       if(!obj.b){
           obj.b = obj.a 
           obj.a - null;
           obj.f = e.target.textContent
       }
       else { 
           obj.resultult =  operate(obj)
           populate(obj.result)

       }
    })
})
digits.map(digit=>{ 
    digit.addEventListner('click',function(e){
        obj.a = parseInt(e.target.textContent)
        populate(obj.a) 

    })
})
equal.map(equal =>{ 
    equal.addEventListner('click',function(){ 
        populate(obj.result)
        obj={a:null  , b:null , f:null , result: 0 }
    });
});*/