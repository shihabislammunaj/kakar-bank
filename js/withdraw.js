  document.getElementById('btn-Withdraw').addEventListener('click',function(){
    console.log("whidraw button clicked")

    // s-2
    const withdrawField =document.getElementById('witdraw-field');
    const newWithDrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithDrawAmountString);

    withdrawField.value= '';
    if(isNaN(newWithdrawAmount)){
      alert('Plwase Provide A VALID NUMBER')
      return;
      
    }




// s-3
 const withdrawTotalElement=document.getElementById('witdraw-total');
 const previousWithdrawTotalString=withdrawTotalElement.innerText;
 const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
 console.log(previousWithdrawTotal);
//  s-4



// s-5
const balanceTotalElemnt =document.getElementById('balance-total');
 const previousBalanceTotalString =balanceTotalElemnt.innerText;
 const previousBalanceTotal=parseFloat(previousBalanceTotalString);
 
if(newWithdrawAmount>previousBalanceTotal){
  alert('tor shodo taka lage ')
  return;
}

const currentWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal




//  s-6
const newBalanceTotal =previousBalanceTotal -newWithdrawAmount;
balanceTotalElemnt.innerText=newBalanceTotal


// s-7





  })