const username = document.querySelector(".userName").value
const password = document.querySelector(".userPassword").value
const logInBtn = document.querySelector(".login")
logInBtn.addEventListener("click", logIn)

async function logIn() {
    
const response = await fetch("http://localhost:3000")
const data = await response.json()

    console.log(data);
}