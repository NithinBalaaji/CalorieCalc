var calorie;
var name;
        

function fnCalculate(){

var height, weight, age,gender;

name = document.getElementById("name").value;
height = document.getElementById("height").value;
weight =  document.getElementById("weight").value;
age =  document.getElementById("age").value;

if(document.getElementById("rdoMale").checked)
  gender = document.getElementById("rdoMale").value;
else if(document.getElementById("rdoFemale").checked)
  gender = document.getElementById("rdoFemale").value;
  
if(name == ""){
  alert("Please enter Name");
  document.getElementById("name").focus();
}
else if(height == ""){
  alert("Please enter Height");
  document.getElementById("height").focus();
}
else if(weight == ""){
  alert("Please enter Weight");
  document.getElementById("weight").focus();
}
else if(age == ""){
  alert("Please enter Age");
  document.getElementById("age").focus();
}
else if(gender == ""){
  alert("Please enter Gender");
  document.getElementById("gender").focus();
}

if(name != "" && height != "" && weight != "" && age != "" && gender != "")
 {
  weight = weight * 2.205;
  height = height *0.4;
  age = age*0.1;
  
  var bmr;
  if (gender=="Male"){
      bmr = (66+(6.23*weight)+(12.7*height)-(6.8*age));
      calorie = 1.7*(bmr);
      calorie= calorie.toFixed(2);
      
  }
  
  else{
      bmr=((655+(4.35*weight)+(4.7*height))-(4.7*age));
      calorie= 1.6*(bmr);
      calorie= parseInt(calorie);
  }
  
  document.getElementById("spnCalorie").innerHTML = calorie;    
 }
}

  var cal=0;
  
 function displayDetails()
 {
    
    var row=1;   
    
    
        
        var food = document.getElementById("food").value;
        if(food == ""){
       alert("Please enter Food Item");
        document.getElementById("food").focus();}
        
        else{
         
          if(calorie>=0){
          
          
        var carbs = document.getElementById("carbs").value;
        var fats = document.getElementById("fats").value;
        var prot = document.getElementById("prot").value;
        
        
        
        carbs=parseInt(carbs);
        fats=parseInt(fats);
        prot=parseInt(prot);
        
        var cal1=carbs+fats+prot;
        cal= cal +cal1;
       
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);
        
        
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        
        cell1.innerHTML = food;
        cell2.innerHTML = carbs;
        cell3.innerHTML = fats;
        cell4.innerHTML = prot;
        cell5.innerHTML = cal1;
        
        row++;     
        
         
         
       Result();
          }
         
        
          
       else{
        alert("Enter Personal Details First");
        document.getElementById("name").focus();
       }
         
        
         
         
       
        }
 }
 
 function Result(){
    var display = document.getElementById("divDisplay");
    if(calorie-cal>=0){
    display.innerHTML = name+ " has consumed '"+ cal+ "' Calories today.<br/>Remaining Calorie Intake '" + (calorie-cal).toFixed(2) +"'";
    }
    else{
      display.innerHTML = "Maximum Intake Level Reached for Today";
    }
}
        
        
   
