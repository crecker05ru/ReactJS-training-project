import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {GalleryPage} from "./pages/GalleryPage";
import {ToolsPages} from "./pages/ToolsPages";
import {AuthPage} from "./pages/AuthPage";
import {HomePage} from "./pages/HomePage";
import {RoutesPage} from "./pages/RoutesPage";
import ArticleList from "./components/ArticleList";
import articles from './fixtures';
import {AboutPage} from "./pages/AboutPage";

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return (

            <Switch>
                <Route path ="/news" exact>
                    <ArticleList articles = {articles} />
                </Route>
                <Route path ="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/gallery" exact>
                    <GalleryPage />
                </Route>
                <Route path="/tools" exact>
                    <ToolsPages />
                </Route>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/routes" exact>
                    <RoutesPage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Redirect to="/main" />

            </Switch>
        )
    }
    return (
        <Switch >
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}