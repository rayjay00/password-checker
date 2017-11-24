var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Great password!"
};

window.onload = function() {
  
  var password = document.getElementById("pass");
  
  var meter = document.getElementById("password-strength-meter");
  
  var text = document.getElementById("password-strength-text");
  
  password.addEventListener("input", function(){
    text.style.display="flex";
    meter.style.display="flex";
    var val = password.value;
    var result = zxcvbn(val);
    
    //Update the password strength meter
    meter.value = result.score; 
    // Update the text indicator
    if (val !== "") {
      text.innerHTML =  strength[result.score];
    } else {
      text.innerHTML = "";
      //Remove meter when and text pw input is erased
      text.style.display="none";
      meter.style.display="none";
    };
    
  });
  
  var button = document.getElementById("button");
  
  button.addEventListener("click", function() {
    if (meter.value === 4) {
      alert("You clicked Sign Up and have a Great Password! Hooray!");
    } else {
    alert("You clicked the Sign Up button but your password needs some work!");
    };
  });
} 