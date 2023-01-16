// import RandomString from "./RandomString"
import "./button.css";
// import CopyComponent from "./copyTextButton";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

//this is the real page but at the moment this is a being spiked in for the copy functionality- real code is in safteyCopy

function copyPassword() {
  // Get the text field

  debugger;
  let copyText = document.getElementById("newPassword") as HTMLInputElement;
  // Select the text field
  // copyText.select();
  // Copy the text inside the text field
  navigator.clipboard.writeText("Ross").then((t) => {
    alert("Copied the text: " + t);
  });
}

const Button = (props: any) => {
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&#";

  const [oldPassword, setOldPassword] = useState<String[]>([]);

  const [password, setPassword] = useState<String>("");

  function stringGenerator(length: number = 20) {
    let result: string = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
    // console.log(111,password)//this is the log that is actually working. not sure how it's hoisting the function invokation below (i know it is because if i set the string length to 20 there, the length of the first console log changes)
  }

  function saveOldPassword(oldPassword: any) {
    setOldPassword((prevPasswords) => [password, ...prevPasswords]);
  }
  //password is returning the newest password- which then gets passed to oldPassword
  //password[0] returns the first in the array e.g the current password
  //oldPassword.slice() is returning the whole array (from useState) except the first element

  return (
    <div>
      <button
        className="styledButton"
        onClick={() => {
          stringGenerator(20);
          saveOldPassword(oldPassword);
        }}
      >
        Click here for password &#x1F510;
      </button>
      <h2>New Password:</h2>

      <CopyToClipboard
      
        text={(document.getElementById("newPassword") as HTMLInputElement).textContent!}
      >
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      <p className="newPassword" id="newPassword">
        {password}
      </p>
        {/* <button
          onClick={() => {
            copyPassword();
          }}
        >
          Copy password
        </button> */}

      <h2>Last Password:</h2>
      <p className="lastPassword">{oldPassword[0]}</p>

      <h2>Used Passwords:</h2>
      <ul>
        <li>{`${oldPassword.slice(1)}`}</li>
      </ul>
    </div>
  );
};
export default Button;

// https://www.youtube.com/watch?v=ebWNqQTI6ZY

