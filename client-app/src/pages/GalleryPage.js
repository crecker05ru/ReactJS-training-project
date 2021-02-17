import CenterMode from "./CenterMode";
import SimpleSlider from "./SimpleSlider";
import styles from './GalleryPage.css';
import './GalleryPage.css'
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";

export const GalleryPage = () => {

    return(
        <div>
                <CenterMode />
                <NavigationBar />
                <Footer />

        </div>
    )
}