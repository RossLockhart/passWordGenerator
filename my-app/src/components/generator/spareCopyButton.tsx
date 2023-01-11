// import RandomString from "./RandomString"
import "./button.css"
import { useState } from "react";
//THIS FILE IS A REPLICA OF BUTTON TSX
const Button = (props:any) => {
    const characters: string ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&#';
    
    const [oldPassword, setOldPassword] = useState<String[]>([]);

    const [password, setPassword] = useState("")
    
    function stringGenerator(length:number=20) {
        let result:string = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
    setPassword(result) 
    console.log(111,password)//this is the log that is actually working. not sure how it's hoisting the function invokation below (i know it is because if i set the string length to 20 there, the length of the first console log changes)
        // return <p>password</p>//if changed to return result without braces, you can see the result in the console
    }

    function saveOldPassword(oldPassword: any){
     setOldPassword(oldPassword)
        const copy = [...oldPassword];
        copy.push({ id: oldPassword.length, text: oldPassword });
        console.log(444, oldPassword)
        console.log(555, copy.join())
        return copy.join();
     }
    
    


return (
    <div> 
<button className="styledButton" onClick={()=>{stringGenerator(20); saveOldPassword(password)}}>Click here for passsword &#x1F510;</button>
<h2 className="oldPassword">New Password:</h2>
<p className="newPassword">{password}</p>
    <h2 className="oldPassword">Used Passwords:</h2>
<ul>
<li>{`${oldPassword}`}</li>
<li>{`${oldPassword}`}</li>
</ul>
</div>
)

}
export default Button 


// https://www.youtube.com/watch?v=ebWNqQTI6ZY 