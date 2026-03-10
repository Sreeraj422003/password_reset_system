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

    const newPassword = document.getElementById("newPassword").value
    const confirmPassword = document.getElementById("confirmPassword").value
    
    if(newPassword !== confirmPassword){
    alert("Passwords do not match")
    return
    }
    console.log("TOKEN:", token)
    
    fetch("http://localhost:5000/api/auth/reset-password",{
    
    method:"POST",
    
    headers:{
    "Content-Type":"application/json"
    },
    
    body:JSON.stringify({
    token: token,
    newPassword: newPassword
    })
    
    })
    .then(res=>res.json())
    .then(data=>alert(data.message))
    
    }