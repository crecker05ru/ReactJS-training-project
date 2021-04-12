import {useState,useEffect,useContext} from "react";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";
import {Form} from "../components/Form"
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

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

  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect( ()=>{
        fetchNotes()
    },[])

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

        <Form />
      {loading
      ?<Loader />
      :< Notes notes={notes} onRemove={removeNote}/>
      }
      <Footer />
    </div>
}