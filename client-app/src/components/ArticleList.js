import Article from "../pages/NewsPage";
import 'bootstrap/dist/css/bootstrap.css'
import '../ArticleList.css'
import {useState} from "react";
import {NavigationBar} from "../pages/NavigationBar";

export default function ArticleList ({ articles }) {
    const [reverted, setReverted] = useState(false)

    const articleElements = articles.map((article, index) =>
    <li key = {article.id} className="article-list__li"><Article article = {article} defaultOpen = {index === 0}/></li>)
    return (
        <div className="container">
            <div className="jumbotron">
                <NavigationBar />
                <h1 className="display-3">Articles
                <button className="btn-primary" onClick={() => setReverted(!reverted)}>Revert</button>
                </h1>
            </div>
            <ul>

                {reverted ? articleElements.reverse() : articleElements}
            </ul>
        </div>
    )
}