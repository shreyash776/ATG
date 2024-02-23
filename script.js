
function toggleSignupPage() {
   
    var accountContainer = document.querySelector('.account-container');
    if (accountContainer.style.display === 'none') {
        accountContainer.style.display = 'block';
    } else {
        accountContainer.style.display = 'none';
    }
}
function toggleSigninPage() {
    
    var accountContainer2 = document.querySelector('.account-container2');

    if (accountContainer2.style.display === 'none') {
        toggleSignupPage();
        accountContainer2.style.display = 'block';
    } else {
        accountContainer2.style.display = 'none';
    }
}

function updateCreateAccountText() {
    console.log("submitted:")
    var firstNameInput = document.getElementById('firstName').value;
    var lastNameInput = document.getElementById('lastName').value;
    var div3 = document.querySelector('.div3'); // Assuming you have an input field with the id 'firstName'
    var createAccountText = document.getElementById('createAccountText');
    var joinText = document.getElementById('join');

    if (firstNameInput && lastNameInput) {
        createAccountText.textContent =   firstNameInput + ' ' + lastNameInput ;
        joinText.textContent =  "Leave group" ;
        div3.style.display = 'block';
         
    } else {
        createAccountText.textContent = 'Create account. It’s free';
        div3.style.display = 'none';
         
    }
}
    
function toggleFollow(element) {
    if (element.classList.contains('followed')) {
        element.textContent = 'Follow';
        element.classList.remove('followed');
    } else {
        element.textContent = 'Followed';
        element.classList.add('followed');
    }
}

