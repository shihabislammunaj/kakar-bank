 document.getElementById('btn-deposite').addEventListener('click',function(){

  // step-3
 
  const depositField =document.getElementById('deposit-field');
  const newDepostAmoutString=depositField.value;
  const newDepostAmout =parseFloat( 
     newDepostAmoutString)
      
  

  const depositTotalElement=document.getElementById('deposit-total');
  const previousDepsitTotalString=depositTotalElement.innerText;
  const previousDepsitTotal=parseFloat(previousDepsitTotalString);
 const currentDepositTotal =previousDepsitTotal + newDepostAmout;
  depositTotalElement.innerText=currentDepositTotal;
 
 
//  step-7
 
const balanceTotalElemnt =document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElemnt.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);


const currentBlanceTotal= previousBalanceTotal + newDepostAmout;
  

balanceTotalElemnt.innerText =currentBlanceTotal; 
  depositField.value ='';
 })