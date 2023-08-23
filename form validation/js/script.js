var is_visible = false;

function check()
{
    let input = document.getElementById("password").value;
    input=input.trim();
    document.getElementById("password").value=input;
    if(input.match(/[a-z]/))
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red"; 
    }
    
    if(input.match(/[@,#,$,&,%,*,=,+,-,_,<,>,?,/,!,~]/i))
    {
        document.getElementById("check1").style.color="green";
        }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    
    if(input.match(/[A-Z]/))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    if(input.length>=8)
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check4").style.color="green";
    }
    else
    {
       document.getElementById("check4").style.color="red"; 
    }    
}
function checkpassword(){
    console.log('inside function')
    let pswd = document.getElementById("password").value;
    let con_pswd = document.getElementById("confirm-password").value;
    let newpasswordelement = document.getElementById("new-password-text");

    if(pswd != con_pswd && con_pswd!= ''){
        document.getElementById("confirm-password").style.borderColor = 'red'
        document.getElementById("resetpassword").disable = true
        document.getElementById("passwordMessage").style.display = 'block'
        
    }  
    else{
        document.getElementById("confirm-password").style.border = ''
        document.getElementById("resetpassword").disabled = false
        document.getElementById("passwordMessage").style.display = 'none'
        newpasswordelement.style.display = "block"
        newpasswordelement.innerHTML = pswd
        document.getElementById("new-password-display").style.display = "block"
    }
    }

