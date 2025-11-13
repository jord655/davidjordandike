import React from "react";
import "./styles/contact.css"


function Contact(){

    return(
<form >
    <h2 class="header">contact us</h2>
    {/* <legend>contact us</legend> */}
<fieldset class="good">
 <input  type="text" required placeholder="Enter your name"/> <br/><br/>
    <input type =  "email" required placeholder="Enter you email"/><br/><br/>
    <input type ="number" required placeholder="Enter your mobile number"/><br/><br/>
  <textarea placeholder="Enter message here">

  </textarea> <br/> <br/>
    <button  type="submit">send message</button>

</fieldset>
   
</form>

    )
}

export default Contact;