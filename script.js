function compute() { 
  p = document.getElementById("principal").value;
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function result() { 
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  if (principal == "") {
    alert("Enter a positive number");
    return;
  }

 if(principal == "0"&& rate == "1"&& years =="1"){
    alert("Enter a positive number");
    return;
  }

  if(principal =="0"){
    alert("Enter a positive number");
    return;
  }

  document.getElementById("result").innerHTML =
    "If you Deposit <span class=\"yellow\">" +
    principal +
    "</span>,<br>at an interest rate of <span class=\"yellow\">" +
    rate +
    "%</span><br>You will receive an amount of <span class=\"yellow\">" +
    interest +
    "</span>,<br>in the year <span class=\"yellow\">" +
    year +
    "</span><br>";
  

  document.getElementById("years").value="";
  document.getElementById("rate").value="";
  document.getElementById("principal").value="";
  
}

