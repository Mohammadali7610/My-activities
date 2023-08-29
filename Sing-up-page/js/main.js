document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const formSubmit = document.getElementById("formSubmit");
    const generalError = document.getElementById("generalError");
    const successMessage = document.getElementById("successMessage");


    formSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      checkFormFillup();
    });


    const checkFormFillup = () => {

 
  


      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const dob = document.getElementById("dob");
      const github = document.getElementById("github");
      const linkedin = document.getElementById("linkedin");

      const firstNameError = document.getElementById("firstNameError");
      const firstNameError2 = document.getElementById("firstNameError2");
      const lastNameError = document.getElementById("lastNameError");
      const lastNameError2 = document.getElementById("lastNameError2");
      const emailError = document.getElementById("emailError");
      const emailError2 = document.getElementById("emailError2");
      const passwordError = document.getElementById("passwordError");
      const passwordError2 = document.getElementById("passwordError2");

      const confirmPasswordError = document.getElementById("confirmPasswordError");
      const confirmPasswordError2 = document.getElementById("confirmPasswordError2");
      const dobError = document.getElementById("dobError");
      const githubError = document.getElementById("githubError");
      const githubError2 = document.getElementById("githubError2");
      const linkedinError = document.getElementById("linkedinError");
      const linkedinError2 = document.getElementById("linkedinError2");



        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[\w\.-]+@\w+\.\w{2,3}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        const urlRegex = /^https?:\/\/\w+(\.\w+)+/;
      
        if(!firstName.value){
            firstName.style.border = '3px solid red';
            firstNameError.style.display = "block";
        }
        else if (!nameRegex.test(firstName.value)) {
                firstName.style.border = '3px solid red';
                firstNameError2.style.display = "block";
                firstNameError.style.display = "none";
           }
        else {
            firstName.style.border = 'none';
            firstNameError.style.display = "none";
            firstNameError2.style.display = "none";
          }

      if (!lastName.value) {
        lastName.style.border = '3px solid red';
        lastNameError.style.display = "block";
      } 
      else if (!nameRegex.test(lastName.value)) {
        lastName.style.border = '3px solid red';
        lastNameError2.style.display = "block";
        lastNameError.style.display = 'none';
   } else {
        lastName.style.border = 'none';
        lastNameError.style.display = 'none';
        lastNameError2.style.display = "none";
      }
    
      if (!email.value) {
        email.style.border = '3px solid red';
        emailError.style.display = "block";
      } 
      else if (!emailRegex.test(email.value)) {
        email.style.border = '3px solid red';
        emailError2.style.display = "block";
        emailError.style.display = "none";
   }else {
        email.style.border = 'none'
        emailError.style.display = "none";
        emailError2.style.display = "none";
      }
         
      if (!password.value) {
        password.style.border = '3px solid red';
        passwordError.style.display = "block";
      } 
      else if (!passwordRegex.test(password.value)) {
        password.style.border = '3px solid red';
        passwordError2.style.display = "block";
        passwordError.style.display = 'none';
      }
       else {
        password.style.border = 'none'; 
        passwordError.style.display = 'none';
        passwordError2.style.display = "none";
      }
       
      if (!confirmPassword.value) {
        confirmPassword.style.border = '3px solid red';
        confirmPasswordError.style.display = "block";
      } 
      else if(confirmPassword.value != password.value){
        confirmPassword.style.border = '3px solid red'; 
        confirmPasswordError2.style.display = "block";
        confirmPasswordError.style.display = "none";
    }
     else {
        confirmPassword.style.border = 'none';
        confirmPasswordError.style.display = "none";
        confirmPasswordError2.style.display = "none";
      }

      if (!dob.value) {
        dob.style.border = '3px solid red'; 
        dobError.style.display = "block";
      } else {
        dob.style.border = 'none'; 
        dobError.style.display = "none";
      }

      if (!github.value) {
        github.style.border = '3px solid red';
        githubError.style.display = "block";
      } 
      else if (!urlRegex.test(github.value)) {
        github.style.border = '3px solid red';
        githubError2.style.display = "block";
        githubError.style.display = "none";
      }
      else {
       github.style.border = 'none';
       githubError.style.display = "none";
        githubError2.style.display = "none"
      }
       
      
      if (!linkedin.value) {
        linkedin.style.border = '3px soid red';
        linkedinError.style.display = "block";
      }
      else if (!urlRegex.test(linkedin.value)) {
        linkedin.style.border = '3px solid red';
        linkedinError2.style.display = "block";
        linkedinError.style.display = "none";
      }
       else {
        linkedin.style.border = 'none';
        linkedinError.style.display = "none";
        linkedinError2.style.display = "none";
      }

      if (
        (!firstName.value || !nameRegex.test(firstName.value)) ||
        (!lastName.value || !nameRegex.test(lastName.value)) ||
        (!email.value || !emailRegex.test(email.value)) ||
        (!password.value || !passwordRegex.test(password.value)) ||
        (!confirmPassword.value || confirmPassword.value !== password.value) ||
        !dob.value ||
        (!github.value || !urlRegex.test(github.value)) ||
        (!linkedin.value || !urlRegex.test(linkedin.value))
    ) {
        successMessage.style.display = "none";
    } else {
        successMessage.style.display = "block";
    }
    };
  });   