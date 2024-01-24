const email = document.querySelector('#email')
const message = document.querySelector('#message')
const joinUs = document.querySelector('#joinUs')
const goAdmin = document.querySelector('#goAdmin')
const adminEmail = document.querySelector('#adminEmail')
const adminMessage = document.querySelector('#adminMessage')
const joinusdiv = document.querySelector('.join-us-div')
const admin = document.querySelector('.admin')

let data
joinUs.addEventListener('click', ()=>{
    data = {email: `${email.value}`, message: `${message.value}`}
    console.log(data);
    email.value = ''
    message.value = ''
})

goAdmin.addEventListener('click', ()=>{
    joinusdiv.style.display = 'none'
    adminEmail.innerHTML = data.email
    adminMessage.innerHTML = data.message
    admin.style.display = 'flex'

})