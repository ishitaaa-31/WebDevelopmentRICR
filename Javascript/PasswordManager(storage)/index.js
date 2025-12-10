function addData(){
    const site = document.getElementById("siteName").ariaValueMax.trim();
    const user = document.getElementById("UName").ariaValueMax.trim();
    const pass= document.getElementById("pass").ariaValueMax.trim();


}
const dataPacket={
    website: site,
    name: user,
    password: pass,
};
console.log(dataPacket
);
if()


const data= localStorage.getItem("PasswordManager");
localStorage.setItem("PasswordManager",JSON.stringify(dataPacket))
