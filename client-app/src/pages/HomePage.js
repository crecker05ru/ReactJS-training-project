import {useState} from "react";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";

export const HomePage = (props) =>{
    const [inputUrl,setInputUrl] = useState('')
    const [outputUrl,setoutputUrl] = useState('')
    console.log(useState)


    const extractHostname = (url) => {
        let hostname = (url.indexOf("//") > -1) ? url.split('/')[2] : url.split('/')[0]

        // Remove port number.
        hostname = hostname.split(':')[0]

        // Remove querystring.
        hostname = hostname.split('?')[0]

        return hostname
    }

  return  <div>
        Some JS
        <div>
         <span>Input URL
             <textarea name='inputUrl' value={inputUrl} onChange={e => setInputUrl(e.target.value)}/>
         </span>
            <div></div>
            <span>Output URL
             <textarea name='outputUrl' value={outputUrl} />
         </span>
            <button name="submit" onClick={(event) => setoutputUrl(extractHostname(inputUrl))}> Submit </button>
        </div>
      <NavigationBar />
      <Footer />
    </div>
}