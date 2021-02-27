import Article from "../pages/NewsPage";
import 'bootstrap/dist/css/bootstrap.css'
import '../ArticleList.css'
import {useState} from "react";
import {NavigationBar} from "../pages/NavigationBar";
import {useEffect} from "react";

export default function ArticleList ({ articles }) {
    const [reverted, setReverted] = useState(null)
    const [openArticleId,setOpenArticleId] = useState("")
    // const handleClick = useEffect((openArticleId) => {
    //     setOpenArticleId({openArticleId})
    // },[openArticleId])
    const handleClick = openArticleId => setOpenArticleId(openArticleId)

    console.log("openArticleId",openArticleId)
    const articleElements = articles.map((article, index) =>
    <li key = {article.id} className="article-list__li" >
        <Article article = {article}
                 isOpen = {openArticleId === article.id}
                 onButtonClick = {() => handleClick(article.id)}

        />
        {console.log('article.id',article.id)}
        {console.log("openArticleId === article.id",openArticleId === article.id)}
        {console.log("typeof (openArticleId)",typeof (openArticleId))}
        {console.log("typeof (article.id)",typeof (article.id))}

    </li>)

    const revertArticles = () => {
        setReverted(!reverted)
    }
    return (
        <div className="container">
            <div className="jumbotron">
                <NavigationBar />
                <h1 className="display-3">Articles
                <button className="btn-primary" onClick={revertArticles}  >Revert</button>
                </h1>
            </div>
            <ul>

                {reverted ? articleElements.slice().reverse() : articleElements.slice()}
            </ul>
        </div>
    )
}