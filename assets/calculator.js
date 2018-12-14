$(document).ready(function()
{   
  $("#display").html("");
  var final = "", ans = "", result = "", value_res = "";
  $(".standard").click(function()
  {
    var value = $(this).val();
    ans = $("#answer").val(); 
    if(ans == 0)
    {
      ans = "";
    } 
    $("#answer").val(ans+value);   
    $("#display").html($("#display").html() + value);
    final = $("#answer").val();   
  });
  $(".equals").click(function()
  {
    result = eval(final); 
    $("#answer").val(result);   
    var a = result.toFixed(2);
    $("#display").html($("#display").html() + "=" + a+ "<br>" + a);
  }); 
  $(".sc_operator").click(function()
  { 
    sc_op = $(this).val(); 
    if(result == "")
    { 
      result = final; 
    } 
    if(sc_op == 'sin')
    {               
      result = Math.sin(result * Math.PI / 180.0);
    }
    if(sc_op == 'cos')
    {          
      result = Math.cos(result * Math.PI / 180.0);
    }
    if(sc_op == 'tan')
    {           
      result = Math.tan(result * Math.PI / 180.0);
    }
    if(sc_op == 'asin')
    {          
      result = Math.asin(result * Math.PI / 180.0);
    }
    if(sc_op == 'acos')
    {          
      result = Math.acos(result * Math.PI / 180.0);
    }
    if(sc_op == 'atan')
    {           
      result = Math.atan(result * Math.PI / 180.0);
    }
    if(sc_op == 'ln')
    {
      result = Math.log(result);
    }
    if(sc_op == 'log')
    { 
      result = (Math.log(result) / Math.LN10);
    }
    if(sc_op == 'e(x)')
    {  
      result = Math.exp(result);
    }
    if(sc_op == '10^x')
    {    
      result = Math.pow(10,result);
    } 
    if(sc_op == '2^x')
    {  
      result = Math.pow(2,result);
    }
    if(sc_op == 'x²')
    {
      result = Math.pow(result,2);
    }
    if(sc_op == 'x³')
    {
      result = Math.pow(result,3);
    }
    if(sc_op == '√x')
    {
      result = Math.sqrt(result);
    }
    if(sc_op == '∛x')
    {
      result = Math.pow(result,1/3);
    }
    if(sc_op == '1/x')
    {
      result = (1 / result);
    }
    function factorial(number)
    {
      var fact =1 ;
      for(i = 1; i <= number; i++)
      {
        fact = fact * i ;
      }
        return fact;
    }
    if(sc_op == 'x!')
    {
      result = factorial(result);
    }
    if(sc_op == 'nCr')
    {
      var answer = "", res2 = "", x ="";
      if(result == 0)
      {
        result = "Invalid";
      } else
      {
        $("#display").html($("#display").html() + "<b>C</b>");
        var number = Math.floor(result);
        result = " ";
        $(".number").click(function()
        {
          var x = $(this).val();
          res2 = res2 + x;
        });
      }
      $(".equals").click(function()
      {
        var no2 = Number(res2);
        var no1 = Number(number);
        if(no2 > no1)
        {
          $("#answer").val("Invalid");
        } else
        {
          var r = factorial(no2);
          var n = factorial(no1);
          var a = factorial(no1 - no2);
          result = n/(r * a);
          $("#answer").val(result);
          $("#display").html($("#display").html() + "=" + result + "<br>");
          }
      });
    }
    if(sc_op == 'nPr')
    {
      var answer = "", res2 = "", x ="";
      if(result == 0)
      {
        result = "Invalid";
      } else
      {
        $("#display").html($("#display").html() + "<b>P</b>");
        var number = Math.floor(result);
        result = "";
        $(".number").click(function()
        {
          var x = $(this).val();
          res2 = res2 + x;
        });
      }
      $(".equals").click(function()
      {
        var no2 = Number(res2);
        var no1 = Number(number);
        if(no2 > no1)
        {
          $("#answer").val("Invalid");
        } else
        {
          var n = factorial(no1);
          var a = factorial(no1 - no2);
          result = n/(a);
          $("#answer").val(result);
          $("#display").html($("#display").html() + "=" + result + "<br>");
        }
      });
    }
    if(sc_op == 'floor')
    {           
      result = Math.floor(result);
    }
    if(sc_op == 'ceil')
    {           
      result = Math.ceil(result);
    }
     if(sc_op == 'e')
    {           
      result = Math.E;
    }
    if(sc_op == 'ln10')
    {           
      result = Math.LN10;
    }
    if(sc_op == '√1/2')
    {         
      result = Math.SQRT1_2;
    }
    if(sc_op == '√2')
    {          
      result = Math.SQRT2;
    }
    if(sc_op == 'ln2')
    {         
      result = Math.LN2;
    }
    if(sc_op == 'Pi')
    {         
      result = Math.PI;
    }
    if(sc_op == 'to_oct')
    {         
      var j = result, octal = ""; 
      while(j>0)
      { 
        octal = (j%8) + octal;
        j = Math.floor(j/8);
      }
      result = octal; 
    }
    if(sc_op == 'to_hd')
    {
      var j = result, hd = "";
      while(j >0)
      {
        hd = (j % 16) + hd;
        if(hd == '10')
        {
          hd ='A';
        }  
        if(hd == '11')
        {
          hd ='B';
        }
        if(hd == '12')
        {
          hd ='C';
        }
        if(hd == '13')
        {
          hd ='D';
        } 
        if(hd == '14')
        {
          hd ='E';
        }
        if(hd == '15')
        {
          hd ='F';
        }
        j = Math.floor(j / 16);
      }
      result = hd;
    }
    if(sc_op == 'to_bin')
    {
      result = (result >>> 0).toString(2);
    }
    $("#answer").val(result);
    if(sc_op == "e" || sc_op == "ln10" || sc_op == "ln2" || sc_op == "Pi" || sc_op == "√2" || sc_op == "√1/2")
    {
      $("#display").html($("#display").html() + "<br>(" + sc_op + ") = " + result + "<br>" + result + "<br>");
    } 
    else if(sc_op == "to_oct" || sc_op == "to_hd" || sc_op == "to_bin")
    {
      $("#display").html($("#display").html() + " " + sc_op + "=" + result + "<br>" + result + "<br>");
    } else
    {
      $("#display").html($("#display").html() + "(" + sc_op + ") = " + result + "<br>" + result + "<br>");
    }
  });
  $(".cl").click(function()
  {
    result = 0;
    $("#answer").val(result);
  });
  $(".clear").click(function()
  {
    if(result == "")
    {
      result = final;
    }
    result = result.toString();
    var len = result.length;
    result = result.substr(0,(len - 1)); 
    $("#answer").val(result);
  });
});