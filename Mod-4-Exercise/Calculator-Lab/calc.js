//these should be defined using let instead, and try not to rely on global variables too much. 
// it's usually better to scope them within functions 

var num1 = [];
var num2 = [];
var finalNum1 = 0 ;
var finalNum2 = 0 ;
var i = 0;
var operatorSign;
var gtotal = 0; 
var counter = 0; 

function reset()
{
    document.getElementById('result').innerHTML='';
    num1 = [];
    finalNum1 = 0;
    finalNum2 = 0;
    i = 0;
    operatorSign = '';
    gtotal = 0;
    counter = 0;
}

//this is a much more efficient way to code it rather than having lots of functions that all do pretty much the same thing
function setNumber(value)
{
    num1[i] = value;
    document.getElementById('result').innerHTML=num1.join('');
    i++;    
}
// function one()
// {
//     num1[i]=1;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function two()
// {
//     num1[i]=2;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;
// }
// function three()
// {
//     num1[i]=3;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function four()
// {
//     num1[i]=4;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function five()
// {
//     num1[i]=5;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function six()
// {
//     num1[i]=6;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function seven()
// {
//     num1[i]=7;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function eight()
// {
//     num1[i]=8;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function nine()
// {
//     num1[i]=9;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }
// function zero()
// {
//     num1[i]=0;
//     document.getElementById('result').innerHTML=num1.join('');
//     i++;    
// }

//this is a much more efficient way to code it rather than having lots of functions that all do pretty much the same thing
function setOperator(op)
{
    operatorSign = op;
    document.getElementById('result').innerHTML='';
    finalNum1 = num1.join('');
    num1 = []; 
}

// function add()
// {
//     operatorSign ='+';
//     document.getElementById('result').innerHTML='';
//     finalNum1 = num1.join('');
//     num1 = []; 
// }

// function sub()
// {
//     operatorSign ='-';
//     document.getElementById('result').innerHTML='';
//     finalNum1 = num1.join('');
//     num1 = []; 
// }

// function mul()
// {
//     operatorSign ='x';
//     document.getElementById('result').innerHTML='';
//     finalNum1 = num1.join('');
//     num1 = []; 
// }

// function divi()
// {
//     operatorSign ='/';
//     document.getElementById('result').innerHTML='';
//     finalNum1 = num1.join('');
//     num1 = []; 
// }
    
function total()
{
    //a switch statement might be handy here
    if(operatorSign === '+')
    {
        if(counter == 0)
        {
            finalNum2 = num1.join('');
            gtotal = parseInt(finalNum1) + parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
            counter = 1;
        }else{
            finalNum2 = num1.join('');
            gtotal = gtotal + parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
        }
    }

    if(operatorSign === '-')
    {
        if(counter == 0)
        {
            finalNum2 = num1.join('');
            gtotal = parseInt(finalNum1) - parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
            counter = 1;
        }else{
            finalNum2 = num1.join('');
            gtotal = gtotal - parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
        }
    }

    if(operatorSign == 'x')
    {
        if(counter == 0)
        {
            finalNum2 = num1.join('');
            gtotal = parseInt(finalNum1) * parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
            counter = 1;
        }else{
            finalNum2 = num1.join('');
            gtotal = gtotal * parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
        }
    }

    if(operatorSign == '/')
    {
        if(counter == 0)
        {
            finalNum2 = num1.join('');
            gtotal = parseInt(finalNum1) / parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
            counter = 1;
        }else{
            finalNum2 = num1.join('');
            gtotal = gtotal / parseInt(finalNum2);
            document.getElementById('result').innerHTML=gtotal;
        }
    
    }

}