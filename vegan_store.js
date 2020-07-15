var btn1=document.getElementById("primary-button");
var userForm=document.getElementById("Buy-Now");
var overlay = document.getElementById("overlay");
var displayMsg = document.getElementById("display-message-wrapper");
var btn2=document.getElementById("btn");
var btn3=document.getElementById("display-msg-btn");
btn1.onclick = function(){
  userForm.style.display = 'block';
  overlay.style.display='block';
}
overlay.onclick = function() {
  userForm.style.display = 'none';
  overlay.style.display='none';
}
btn2.onclick = function(){
  displayMsg.style.display = 'block';
   userForm.style.display = 'none';
}
btn3.onclick =function(){
  displayMsg.style.display = 'none';
  overlay.style.display='none';
}