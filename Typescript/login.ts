const button=document.querySelector("button")!;
const uname=document.getElementById("t1")! as HTMLInputElement;
const password=document.getElementById("pass")! as HTMLInputElement;


button.addEventListener( "click", function() {
    if(uname.value=="admin"){
        
    } else if(uname.value="user"){

    } else 
    console.log("username: "+uname.value+"password: "+password.value);
});
