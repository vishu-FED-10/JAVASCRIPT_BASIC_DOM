function printError(elemId,hintMsg)
document.getElementById(elemId).innerHTML = hintMsg;

function ValidateForm(){
    var Name = document.contectForm.value;
    var email = document.contectForm.email.value;
    var mobile = document.contectForm.Number.value;
    var Country = document.contectForm.Country.value;
    var Gender = document.contectForm.Gender.value;   

    document.write{`your name is ${Name}`}

// defining error variables with a default value
var nameErr = emailErr = mobileErr = CountryErr = GenderErr = true

// Validate name
if(Name == "")
{
    printError("nameErr", "Please enter your name");
}
}