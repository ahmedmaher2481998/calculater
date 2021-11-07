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
let isa ;
let nums = [];
let numindex = 0;
digits.map(digit=>{

    digit.addEventListener('click',function(e){
        if(!nums[numindex]){ 
            nums[numindex] = e.target.textContent;
            populate(nums[numindex])
        }
        else{
            nums[numindex] = parseInt(nums[numindex] + e.target.textContent);
            if(nums[numindex] > 10000000000) populate('very high number !!')
            else populate(nums[numindex]);
            
        }
        console.log(nums[numindex]) 






        /*
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
        }*/
    })
})
let operator ;
let result;
operators.map(operator=>{ 
    operator.addEventListener('click',function(e){
        if(nums.length == 2 ){ 
            result = operate(nums,operator)
            numindex = 0 ;
            operator = null ;
        }
        else if(nums.length == 1){ 
            operator = e.target.textContent;
            numindex ++;
        }
        else if (nums.length == 0){ 
            populate("enter a number first")
        }







        /*
        e.target.classList.add('pressed')

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
        }*/
        
    })
})
document.querySelector('.sign-reverse').addEventListener('click',function(){ 
    if(obj.a){ 
        if(obj.b){ 
            obj.b = -obj.b ; 
            populate(obj.b)
        }
        else { 
            obj.a = -obj.a ; 
            populate(obj.a)
        }
    }    
}) 
// clear
clear.addEventListener('click',function() {
    reset()
populate(0)
});
equal.addEventListener('click',function(){ 
    
    let res  = operate(obj)
    reset();
    populate(res)
    obj.a = res ;
    document.querySelector('.pressed').classList.remove('.pressed') 
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