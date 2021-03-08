import {NavigationBar} from "./NavigationBar";
import CenterMode from "./CenterMode";
import {Footer} from "./Footer";
import {useState, useEffect} from "react";

export const RoutesPage = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([])

    useEffect(()  => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    },[type])
    return (
       <div>
           <CenterMode />
           <NavigationBar />
           <Footer />
            <div>
                <button onClick={() => setType('users')}>Загрузить users</button>
                <button onClick={() => setType('todos')}>Загрузить todos</button>
                <button onClick={() => setType('posts')}>Загрузить posts</button>
                <h1>Загруженно: {type}</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
       </div>
    )
}