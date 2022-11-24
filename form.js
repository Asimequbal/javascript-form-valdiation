// console.log('form validation')
function valdidateForm(){
    let fullName = document.querySelector('#fullName').value
    let fullNameLength = fullName.length
    
    let PhoneNumber = document.querySelector('#Phone').value
    let PhoneNumberLength = PhoneNumber.length

    let myPasword = document.querySelector('#Password').value
    let myPaswordLength = myPasword.length



if(fullNameLength <=3){
    document.querySelector('.error_message').innerText = 'Name is required with minium 4 characters!!'
}
else if('PhoneNumberLength !== 10'){
    document.querySelector('.error_message').innerText = 'Minimum 10 digit required'
}else if('myPaswordLength >==8'){
    document.querySelector('.error_message').innerText = 'Minimum 8 digit required'
}

else{
    document.querySelector('.error_message').innerText = ''
}


}