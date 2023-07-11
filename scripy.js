const form=document.getElementById('form')
const input=document.getElementById('input')
const lastname=document.getElementById('lastname')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(input.value)
    console.log(lastname.value)
    console.log(email.value)
    console.log(password.value)
    console.log(password2.value)
})