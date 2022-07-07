
// Click function
  document.getElementById('introBtn').onclick = function() {intro()};
    
function intro() {
  document.getElementById('sizeMenu').style.display = "block";
  document.getElementById('introBtn').style.display = "none";
}    

   document.getElementById('sizeBtn').onclick = function() {myMenu()};

function myMenu() {
  document.getElementById('toppingsMenu').style.display = "block";
  document.getElementById('sizeMenu').style.display = "none";
}    
 document.getElementById('toppingsBtn').onclick = function() {subTotal()};
function subTotal() {
  document.getElementById('subTotal').style.display = "block";
   document.getElementById('toppingsMenu').style.display = "none";
}    
