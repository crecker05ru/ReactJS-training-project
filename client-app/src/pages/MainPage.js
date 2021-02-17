import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SimpleSlider from "./SimpleSlider";
import CenterMode from "./CenterMode";
import './MainPage.css'
import {NavLink} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";

export const MainPage = () =>{

    return(
        <body>
            <div className="page__content">
                <header className="header">
                    <NavLink to="/home" className="header__logo" />
                    <div className="slider">
                        <div className="slider__item">
                            <CenterMode />
                        </div>
                    </div>

                </header>
                <div className="wrapper">
                    <NavigationBar />
                    <div className="maincontent">
                            <div className="maincontent__box">
                                <div className="maincontent__items">
                                    <div className="maincontent__item1  left">
1
                                    </div>
                                    <div className="maincontent__item2 right">
2
                                    </div>
                                    <div className="maincontent__item3 right">
3
                                    </div>
                                    <div className="maincontent__item4 right">
4
                                    </div>
                                    <div className="maincontent__item5 right">
5
                                    </div>
                                </div>
                            </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </body>
    )
}