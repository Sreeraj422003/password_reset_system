function sendReset(){

    const email = document.getElementById("email").value
    
    fetch("http://localhost:5000/api/auth/forgot-password",{
    
    method:"POST",
    
    headers:{
    "Content-Type":"application/json"
    },
    
    body:JSON.stringify({email})
    
    })
    .then(res=>res.json())
    .then(data=>alert(data.message))
    
    }
    const params = new URLSearchParams(window.location.search)
const token = params.get("token")

function resetPassword(){

    const newPassword =
    document.getElementById("newPassword").value
    
    const confirmPassword =
    document.getElementById("confirmPassword").value
    
    const error =
    document.getElementById("error")
    
    // password rule
    const strongPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
    
    // weak password check
    if(!strongPassword.test(newPassword)){
    
    error.innerText =
    "Password must contain 8 characters, 1 uppercase, 1 number and 1 special character"
    
    return
    }
    
    // confirm password check
    if(newPassword !== confirmPassword){
    
    error.innerText = "Passwords do not match"
    
    return
    }
    
    // clear error
    error.innerText = ""
    
    fetch("http://localhost:5000/api/auth/reset-password",{
    
    method:"POST",
    
    headers:{
    "Content-Type":"application/json"
    },
    
    body:JSON.stringify({token,newPassword})
    
    })
    .then(res=>res.json())
    .then(data=>alert(data.message))
    
    }