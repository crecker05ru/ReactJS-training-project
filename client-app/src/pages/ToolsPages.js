import {useState} from "react";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";

export const ToolsPages = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    console.log(useState)


    function getFullName({ firstName, lastName }) {
        //return `${firstName} ${lastName}`;
        alert(`${firstName} ${lastName}`)
    }

    return <div>
        ToolsPage
        <div>
         <span>Input URL
             <textarea name='inputUrl' value={firstName} onChange={e => setFirstName(e.target.value)}/>
         </span>
            <div></div>
            <span>Output URL
             <textarea name='outputUrl' value={lastName} />
         </span>
            <button name="submit" onClick={(event) => getFullName(firstName)}> Submit </button>
        </div>
        <NavigationBar />
        <Footer />
    </div>


}