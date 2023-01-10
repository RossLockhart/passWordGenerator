// import RandomString from "./RandomString"
import "./button.css"
import { useState } from "react";



const Button = (props:any) => {
    const characters: string ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&#';
    const [password, setPassword] = useState("")//may stay or go 
    
    function stringGenerator(length:number=20) {
        let result:string = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    setPassword(result) 
    console.log("first log",password)//this is the log that is actually working. not sure how it's hoisting the function invokation below (i know it is because if i set the string length to 20 there, the length of the first console log changes)
        // return <p>password</p>//if changed to return result without braces, you can see the result in the console
    }
    
return (
    <div> 
<button className="styledButton" onClick={()=>stringGenerator(20)}>Click here for passsword &#x1F510;</button>
<p className="newPassword">{password}</p>
</div>
)

}
export default Button 


// https://www.youtube.com/watch?v=ebWNqQTI6ZY 