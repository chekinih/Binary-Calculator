$(document).ready(function() {
    $("#btn0").click(function() {
        var old = document.getElementById("res").innerHTML;
        $("#res").html(old.concat('',"0"));    
    });

    $("#btn1").click(function() {
        var old = document.getElementById("res").innerHTML;
        $("#res").html(old.concat('',"1"));    
    });

    $("#btnClr").click(function() {
        $("#res").html("");   
    });

    $("#btnSum").click(function() {
        var old = document.getElementById("res").innerHTML;
        if(old.length != 0 && !("+-*/=".includes(old[old.length-1])))
        {
            $("#res").html(old.concat('',"+"));  
        }
    });
    $("#btnSub").click(function() {
        var old = document.getElementById("res").innerHTML;
        if(old.length != 0 && !("+-*/=".includes(old[old.length-1])))
        {
            $("#res").html(old.concat('',"-"));  
        }
    });

    $("#btnMul").click(function() {
        var old = document.getElementById("res").innerHTML;
        if(old.length != 0 && !("+-*/=".includes(old[old.length-1])))
        {
            $("#res").html(old.concat('',"*"));  
        }
    });

    $("#btnDiv").click(function() {
        var old = document.getElementById("res").innerHTML;
        if(old.length != 0 && !("+-*/=".includes(old[old.length-1])))
        {
            $("#res").html(old.concat('',"/"));  
        }
    });
    
    function findOperator(str)
    {
        if(str.includes("+"))
        {
            return "+";
        }else if(str.includes("-")){
            return "-";
        }else if(str.includes("*")){
            return "*";
        }else {
            return "/";
        }
    }
    function convertDecimal(operand){
        let i;
        let j = operand.length -1;
        let res = 0;
        for(i = 0; i< operand.length; i++)
        {
            res+=operand[i]*Math.pow(2,j);
            j--;
        }
        return res;
    }

    $("#btnEql").click(function() {
        var old = document.getElementById("res").innerHTML;
        if(old.length != 0 && !("+-*/".includes(old[old.length-1])) && (old.includes("+") || old.includes("-") || old.includes("*") || old.includes("/")))
        {
            let operator = findOperator(old);
            let operand1 = old.substr(0, old.indexOf(operator)) ;
            let operand2 = old.substr(old.indexOf(operator)+1,old.length - old.indexOf(operator)+1 );
            let decOperand1 = convertDecimal(operand1);
            let decOperand2 = convertDecimal(operand2);
            let desRes;
            switch(operator){
                case "+": desRes = decOperand1 + decOperand2;
                break;
                case "-":  desRes = decOperand1 - decOperand2;
                break;
                case "*":  desRes = decOperand1 * decOperand2;
                break;
                default:  desRes = Math.trunc(decOperand1 / decOperand2);
                break
            }
            let binRes = desRes.toString(2);

            $("#res").html(binRes);  
        }
    });

  });