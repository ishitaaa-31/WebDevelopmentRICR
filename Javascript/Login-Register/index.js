function Login(){
    console.log("Login button clicked");
    const em =document.getElementById("loginEmail").value;
    console.log("My Email " +em);
    const ps =document.getElementById("LoginPassword").value;
    console.log(ps);
    console.log("Registeration button clicked");
   alert("login done");
    // / data gayab after Login
    document.getElementById("loginEmail").value="";
    document.getElementById("LoginPassword").value="";
}
function Register(){
    console.log("Registeration button clicked");
    const name=document.getElementById("RegName").value;
    console.log(name);

    const em=document.getElementById("emailregister").value;
    console.log(em);
   
    const ps=document.getElementById("pass").value;
    console.log(ps);
    
}

