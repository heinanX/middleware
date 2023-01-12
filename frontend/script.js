

const username = document.querySelector(".userName")
const password = document.querySelector(".userPassword")
const logInBtn = document.querySelector(".login")
logInBtn.addEventListener("click", logIn)

async function logIn() {

/*   const user =
  {
    username: username.value,
    password: password.value
  } */
    
const response = await fetch("http://localhost:3000/usersLogin", {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body:JSON.stringify( {
    username: username.value,
    password: password.value
  })
})

console.log(response);
const data = await response.json()
console.log(data);
localStorage.setItem("Id", data.id)
}