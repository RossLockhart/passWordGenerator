// import RandomString from "./RandomString"
import "./button.css"
import { useState } from "react";

// const [password, setPassword] = useState("")//may stay or go 


const Button = (props:any) => {
    const characters: string ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    function stringGenerator(length:number=10) {
        let result:string = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    setPassword(result) //may stay or 
        return <p>{result}</p>//if changed to return result without braces, you can see the result in the console
    }
    
return (
    <>
<button className="styledButton" onClick={()=>{console.log(stringGenerator(10))}}>Click here for passsword &#x1F510;</button>

</>
)

}
export default Button 


//*****this is an example from another repo  */

// const [toDo, setToDo] = useState([]);
// const [newTaskItem, setNewTaskItem] = useState("");
// //
// function addToDo(event) {
//   event.preventDefault();

//   setToDo((currentToDo) => {
//     const copy = [...currentToDo];
//     copy.push({ id: toDo.length, text: newTaskItem });
//     setNewTaskItem("");
//     return copy;
//   });
// }