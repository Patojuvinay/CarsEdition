function validation() {
  let username = document.getElementById("username") .value;
  let userstatus = false;
  let alphaExp = /^[A-Za-z]+$/;
  let mobile = document.getElementById("mobile") .value;
 let mobilestatus = false;
 let numExp = /^[0-9]+$/;
 let mail = document.getElementById("email") .value
 let mailstatus = false;
 let mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 let person = document.getElementById("person") .value;
 let personstatus = false;
 let perExp = /^[0-9]+$/;


//namevalidation
  if (username === ""){
      document.getElementById("namenote").innerHTML = "Please enter your name.. ";
  }
  else{
    if (username.match(alphaExp)) {
      document.getElementById("namenote").innerHTML = "";
      userstatus = true;
    }
    else{
      document.getElementById("namenote").innerHTML = "Use only Alphabets"
      userstatus = false;
    }
  }
   
  //mobilevalidation
   if (mobile === ""){
      document.getElementById("mobilenote").innerHTML = " Please enter your mobile number";
   }   
   else{
     if(mobile.match(numExp)) {
      if (mobile.length === 10){
          document.getElementById("mobilenote").innerHTML = "";
          mobilestatus = true;
      }
      else{
          document.getElementById("mobilenote").innerHTML = "10 digit mobile number";
          mobilestatus = false;
      }
     }
     else{
      document.getElementById("mobilenote").innerHTML = "Use only digits";
      mobilestatus = false;
     }
   }


   //person validation 
   if(person === ""){
      document.getElementById("pernote").innerHTML="enter numbers"
   }
   else{
      if(person.match(perExp)) {
          if (person.length === 12){
              document.getElementById("pernote").innerHTML = "";
              personstatus = true;
          }
          else{
              document.getElementById("pernote").innerHTML = "enter valid transcation";
              personstatus = false;
          }
         }
         else{
          document.getElementById("pernote").innerHTML = "Use only digits";
          personstatus = false;
         }
   }
  if (userstatus === true && mobilestatus === true && personstatus === true) {
      return true;
  }
  else{
      return false;
  }
}