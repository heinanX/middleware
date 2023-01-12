

const username = document.querySelector(".userName").value
const password = document.querySelector(".userPassword").value
const logInBtn = document.querySelector(".login")
logInBtn.addEventListener("click", logIn)

async function logIn() {
    
const response = await fetch("http://localhost:3000/usersLogin", {
mode: 'no-cors',
method: 'POST',
body:JSON.stringify({ "username": username, "password": password }),
headers: {
    'Content-Type': 'application/json'
  }
})
console.log(response);
const data = await response.json()
localStorage.setItem("Id", data.id)
}