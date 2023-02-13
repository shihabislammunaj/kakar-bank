document.getElementById('btn-submit').addEventListener('click',function(){
  const emailField=document.getElementById('User-email');
  const email=emailField.value;
  const passwordFiend =document.getElementById('User-password');
  const password=passwordFiend.value;
  if(email ==='sonta@baap.com' && password==='Munas'){
    window.location.href='bank.html';
  }
  else{
 alert('tui password vule gesal!! toke ame teijjo sontan gosona korlam')
  }
})